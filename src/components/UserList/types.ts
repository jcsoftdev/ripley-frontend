export interface UserI {
  id: number;
  name: string;
  last_name: string;
  born: string;
  age: number
  onClick?: ()=>void
}
export type UserListI = UserI[]
