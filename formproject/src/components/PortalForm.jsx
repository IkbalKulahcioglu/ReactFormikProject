import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchemas } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      {" "}
      <Formik
        initialValues={{ userName: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchemas}
      >
        {() => (
          <Form>
            <CustomInput
              label="User Name"
              name="userName"
              type="text"
              placeholder="Please enter your user name"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
