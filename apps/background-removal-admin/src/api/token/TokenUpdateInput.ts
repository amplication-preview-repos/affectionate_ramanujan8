import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenUpdateInput = {
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
