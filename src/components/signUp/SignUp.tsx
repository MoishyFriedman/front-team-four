import { useForm, type FieldValues, UseFormWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password: UseFormWatch<Text> = watch("password");
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data: FieldValues) => {
    const api = await axios.post("http://localhost:5080/users/signUp", data);
    if (api.status >= 200 && api.status <= 299) {
      navigate(location.state.from || "/");
    } else {
      alert("try agin");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5">sign up</Typography>
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
      <div>
        <Input
          {...register("confirmPassword", {
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
            validate: (value) => value === password || "The passwords do not match",
          })}
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <ErrorMessage errors={errors} name="confirmPassword" render={({ message }) => <p>{message}</p>} />}
      </div>
      <Button type="submit">signUp</Button>
    </form>
  );
}
