import React from "react";
import { ErrorMessage } from ".";
import ImageInputList from "../ImageInputList";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  //Handle AddImageUri
  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  //Handle RemoveImageUri
  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemoveImage}
        onAddImage={handleAddImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
