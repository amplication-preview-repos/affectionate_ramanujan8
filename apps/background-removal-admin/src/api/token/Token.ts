import { User } from "../user/User";

export type Token = {
  createdAt: Date;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
