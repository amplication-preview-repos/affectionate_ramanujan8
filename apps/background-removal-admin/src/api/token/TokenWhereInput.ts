import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenWhereInput = {
  id?: StringFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
