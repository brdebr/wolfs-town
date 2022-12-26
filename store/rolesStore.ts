import { Role } from "~~/utils/types"
export type RoleItem = Role & { id: number };

export const useRolesStore = definePiniaStore('roles', () => {
  const roles = ref<RoleItem[]>([]);

  const addRole = (role: Role) => {
    const roleItem = {
      ...role,
      id: Date.now(),
    };
    roles.value.push(roleItem);
  }

  const removeRole = (role: RoleItem) => {
    const index = roles.value.findIndex((r) => r.id === role.id);
    roles.value.splice(index, 1);
  }

  return {
    roles,
    addRole,
    removeRole,
  };

});

