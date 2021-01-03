import React from "react";
import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({
  name,
  toggleVisible,
  isSecure,
  isPassword,
  width,
  ...otherProps
}) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        isPassword={isPassword}
        onPress={toggleVisible}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
