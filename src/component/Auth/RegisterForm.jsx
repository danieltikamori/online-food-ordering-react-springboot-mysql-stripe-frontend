import React from "react";
import {
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registerUser } from "../State/Authentication/Action";
import { useDispatch } from "react-redux";

const registerInitialValues = {
  fullName: "",
  email: "",
  password: "",
  // role:""
  role: "ROLE_CUSTOMER"
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .max(60, "Full Name must be 60 characters or less")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .max(100, "Email must be 100 characters or less")
    .required("Email is required"),
  // .test("email-exists", "Email already exists", async (value) => {
  //   const response = await fetch("/api/v1/check-email", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: value }),
  //   });
  //   const data = await response.json();
  //   return !data.exists;
  // }),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:>./<,])(?=.*\d).*$/,
      "Password must have uppercase, lowercase, a symbol and a number"
    )
    .min(12, "Password must be at least 12 characters")
    .max(100, "Password must be 100 characters or less")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().required("Role is required")
});

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    // Add parameterized query logic here (Avoid SQL injection)
    // To verify if there are same registered emails, you'll need to make an API call to your backend to check if the email already exists in your database.
    console.log("form values", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik
        onSubmit={handleSubmit}
        initialValues={registerInitialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="fullName"
              label="Full Name"
              fullWidth
              variant="outlined"
              margin="normal"
              type="text"
            />
            {errors.fullName && touched.fullName && (
              <div style={{ color: "red" }}>{errors.fullName}</div>
            )}

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              type="email"
            />
            {errors.email && touched.email && (
              <div style={{ color: "red" }}>{errors.email}</div>
            )}

            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
            />
            {errors.password && touched.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}

            <Field
              as={TextField}
              name="confirmPassword"
              label="Confirm Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div style={{ color: "red" }}>{errors.confirmPassword}</div>
            )}

            <FormControl fullWidth margin="normal">
              <InputLabel id="role-select-label">Role</InputLabel>
              <Field
                as={Select}
                name="role"
                labelId="role-select"
                id="role-selectId"
                // value={age}
                label="Role"
                // onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>
                  Restaurant Owner
                </MenuItem>
              </Field>
              {errors.role && touched.role && (
                <div style={{ color: "red" }}>{errors.role}</div>
              )}
            </FormControl>

            <Button
              sx={{ mt: 2, padding: "1rem" }}
              fullWidth
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body-2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("account/login")}>
          <span style={{ color: "blue" }}>Login</span>
        </Button>
      </Typography>
    </div>
  );
}
