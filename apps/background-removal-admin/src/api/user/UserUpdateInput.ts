import { InputJsonValue } from "../../types";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  tokens?: TokenUpdateManyWithoutUsersInput;
  username?: string;
};
