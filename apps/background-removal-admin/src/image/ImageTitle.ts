import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "filePath";

export const ImageTitle = (record: TImage): string => {
  return record.filePath?.toString() || String(record.id);
};
