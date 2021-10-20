import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formik) =>
        onSubmit(values, formik.resetForm({ values: "" }))
      }
      validationSchema={validationSchema}
    >
      {<>{children}</>}
    </Formik>
  );
}

export default AppForm;
