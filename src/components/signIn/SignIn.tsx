import { useForm, type FieldValues } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data: FieldValues) => {
    data = { email: data.email, password: data.password };
    try {
      const api = await axios.post("http://localhost:4000/users/signIn", data);
      if (api.statusText === "OK") {
        alert(api.data);
        navigate(location.state?.from || "/");
      } else {
        throw new Error(api.statusText);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">sign in</Typography>
      <div>
        <Input
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "email must be correct",
            },
          })}
          type="email"
          placeholder="Enter Email"
        />
        {errors.email && <ErrorMessage errors={errors} name="email" render={({ message }) => <p>{message}</p>} />}
      </div>
      <div>
        <Input
          {...register("password", {
            required: "password is required",
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&()*-+=]).+$/,
              message: "Password must contain at least one uppercase letter, one lowercase letter, and one special character (@, $, !, %, *, #, (, ), ^, =, +, &)",
            },
            minLength: {
              value: 8,
              message: "password most be minimum 8 characters",
            },
            maxLength: {
              value: 20,
              message: "password most be maximum 20 characters",
            },
          })}
          type="password"
          placeholder="Enter Password"
        />
        {errors.password && <ErrorMessage errors={errors} name="password" render={({ message }) => <p>{message}</p>} />}
      </div>
      <Button type="submit">signIn</Button>
      <Link to="/signUp">
        <Button type="button">signUp</Button>
      </Link>
    </form>
  );
}
