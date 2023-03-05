export const useVotingStore = definePiniaStore('voting', () => {
  const gameStore = useGameStore();

  const voting = ref<Voting | null>(null);

  const createVoting = (type: VotingType, forMajor: boolean) => {
    if (!gameStore.game.createdAt) {
      throw new Error('Game does not have a created date');
    }
    const votingObj: Voting = {
      id: newId(),
      createdAt: new Date(),
      forMajor,
      type,
      votes: [],
    };
    voting.value = votingObj;
  };

  const endVoting = () => {
    if (!voting.value) {
      throw new Error('No voting to end');
    }
    if (!gameStore.game.createdAt) {
      throw new Error('Game does not have a created date');
    }
    if (!gameStore.currentDay) {
      throw new Error('No current day to end voting');
    }
    if (!votingResult.value) {
      throw new Error('No voting result to end voting');
    }
    voting.value.endedAt = new Date();
    voting.value.durationMs = voting.value.endedAt.getTime() - voting.value.createdAt.getTime();
    voting.value.loser = votingResult.value;

    gameStore.currentDay.voting.push(voting.value);

    voting.value = null;
  };

  const addVote = (voter: UUID, target: UUID) => {
    if (!voting.value) {
      throw new Error('No voting to add vote to');
    }
    const vote = {
      voter,
      target,
      index: voting.value.votes.length,
    };
    voting.value.votes.push(vote);
  };

  const votesCountMap = computed(() => {
    if (!voting.value) {
      return {};
    }
    return voting.value.votes.reduce((acc, vote) => {
      if (acc[vote.target]) {
        acc[vote.target] += 1;
      } else {
        acc[vote.target] = 1;
      }
      return acc;
    }, {} as Record<UUID, number>);
  });
  const votesCount = computed(() => {
    if (!voting.value) {
      return [];
    }
    const array = Object.entries(votesCountMap.value).map(([player, count]) => ({
      player,
      count,
    }));
    array.sort((a, b) => b.count - a.count);
    return array;
  });

  const votingResult = computed(() => {
    if (!voting.value || !votesCount.value.length || votesCount.value.length < 1) {
      return null;
    }
    switch (voting.value.type) {
      case 'simultaneous':
      case 'normal':
        return votesCount.value[0].player;
      case 'chain':
        return votesCount.value[votesCount.value.length - 1].player;
      default:
        return null;
    }
  });

  return {
    voting,
    createVoting,
    endVoting,
    addVote,
    votesCountMap,
    votesCount,
    votingResult,
  };
}, {
  persist: {
    storage: localStorage,
  },
});
