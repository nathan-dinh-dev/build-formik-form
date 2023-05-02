import "./NewFormik.css";
import { useFormik } from "formik";

const NewFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="new-formik-controls">
          <div className="new-formik-control">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div id="emailError">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="new-formik-control">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div id="pswError">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>

        <div className="new-formik-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewFormik;
