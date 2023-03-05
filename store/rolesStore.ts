export const useRolesStore = definePiniaStore('roles', () => {
  const roles = ref<RoleItem[]>([]);

  const addRole = (role: Role) => {
    const roleItem = {
      ...role,
      id: newId(),
    };
    roles.value.push(roleItem);
  }

  const removeRole = (role: RoleItem) => {
    const index = roles.value.findIndex((r) => r.id === role.id);
    roles.value.splice(index, 1);
  }

  const sortByAlignmentAndName = () => {
    roles.value.sort((a, b) => {
      if (a.alignment === b.alignment) {
        return a.name.localeCompare(b.name);
      }
      return a.alignment.localeCompare(b.alignment);
    });
  };

  return {
    roles,
    addRole,
    removeRole,
    sortByAlignmentAndName,
  };

});

