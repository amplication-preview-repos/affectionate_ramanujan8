import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
