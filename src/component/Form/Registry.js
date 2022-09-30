import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./Registry.module.css";
import user from "../../redux/user/userOperation";

const { registrationNewUser } = user;

function Registry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const reset = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      dispatch(registrationNewUser({ name, email, password, reset }));
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return;
    }
  };

  return (
    <div>
      {/* <h1>Anywhere in your app!</h1> */}
      <Formik
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
    
      >
        {({
          errors,
          touched,
          handleBlur,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={name}
                className={s.input}
                placeholder="you name"
              />
            </label>
            <label className={s.label}>
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
                className={s.input}
                placeholder="your@mail.com"
              />
            </label>

            {errors.email && touched.email && errors.email}
            <label className={s.label}>
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
                className={s.input}
                placeholder="you password"
              />
            </label>

            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              disabled={isSubmitting}
              className={s.buttonReg}
            >
              Registration
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Registry;
