import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advencedSchemas } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchemas}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="User Name"
              name="userName"
              type="text"
              placeholder="Please enter your user name"
            />
            <CustomSelect
              label="University"
              name="university"
              placeholder="Please selecet your university"
            >
              <option value="">Please selecet your university</option>
              <option value="fu">Firat University</option>
              <option value="bogazici">Bogazici University</option>
              <option value="itu">ITU</option>
              <option value="ytu">YTU</option>
            </CustomSelect>
            <CustomCheckbox name="isAccepted" type="checkbox" />
            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
            <Link className="formLink" to="/">
              Go to main form
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
