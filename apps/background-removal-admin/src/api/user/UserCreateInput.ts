import { InputJsonValue } from "../../types";
import { TokenCreateNestedManyWithoutUsersInput } from "./TokenCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  tokens?: TokenCreateNestedManyWithoutUsersInput;
  username: string;
};
