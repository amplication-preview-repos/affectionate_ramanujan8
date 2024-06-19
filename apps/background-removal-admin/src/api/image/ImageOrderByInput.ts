import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
};
