import React from "react";
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const registerInitialValues = {
  fullName: "",
  email: "",
  password: "",
  // role:""
  role: "ROLE_CUSTOMER"
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=-{};:>./<,])(?=.*\d).*$/,
      "Password must have uppercase, lowercase, a symbol and a number"
    )
    .min(12, "Password must be at least 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
});

export default function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("form values", values);
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
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
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
