import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageWhereInput = {
  filePath?: StringNullableFilter;
  id?: StringFilter;
  uploadedBy?: StringNullableFilter;
};
