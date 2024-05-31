import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Entering email is mandatory"),
  age: yup
    .number()
    .positive("Please enter a valid age")
    .required("Entering age is mandatory"),
  password: yup
    .string()
    .min(8, "Password must consist of 8 characters")
    .matches(
      passwordRules,
      "Please enter at least 1 upper case letter, 1 lower case letter and 1 number"
    )
    .required("Entering pasword is mandatory"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords did not match")
    .required("Entering confirm pasword is mandatory"),
});

export const advencedSchemas = yup.object().shape({
  userName: yup
    .string()
    .min(5, "User name must consist of 5 characters")
    .required("Entering user name is mandatory"),
  university: yup
    .string()
    .oneOf(["Fırat", "Boğaziçi", "İTÜ", "YTÜ"], "Please select your university")
    .required("Selecting university is mandatory"),
  isAccepted: yup.boolean().oneOf([true], "Accept the terms of use"),
});
