export type Role = 'paciente' | 'empleado';
const key = 'nutricloud-role';
export const getRole = (): Role => sessionStorage.getItem(key) === 'paciente' ? 'paciente' : 'empleado';
export const setRole = (role: Role) => sessionStorage.setItem(key, role);
export const clearSession = () => sessionStorage.removeItem(key);
