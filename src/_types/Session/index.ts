import { type IItemUser } from "../Users/serviceUsers";

export interface IUserSession {
  token: string;
  usuario: IItemUser;
}
