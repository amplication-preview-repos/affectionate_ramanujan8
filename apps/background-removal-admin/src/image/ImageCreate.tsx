import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="filePath" source="filePath" />
        <TextInput label="uploadedBy" source="uploadedBy" />
      </SimpleForm>
    </Create>
  );
};
