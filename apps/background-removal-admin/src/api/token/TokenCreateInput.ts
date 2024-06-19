import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenCreateInput = {
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
