import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="filePath" source="filePath" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Edit>
  );
};
