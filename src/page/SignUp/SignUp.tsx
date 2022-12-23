import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Layout } from "sections/Layout";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AuthContext } from "contexts/AuthContext";
import { useContext } from "react";
import { routes } from "data/routes";

interface ISignInForm {
  name: string;
  email: string;
  password: string;
}

export const SignUpPage: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { handleSubmit, control } = useForm<ISignInForm>();
  const { errors } = useFormState({
    control,
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSubmit: SubmitHandler<ISignInForm> = async (data: any) => {
    // usersDataService.login(data).then((res) => console.log(res.data));
    try {
      await authContext.signInWithEmail(data);

      navigate(routes.home);
      // eslint-disable-next-line
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
        <Typography variant="h4">
          {pathname.includes("register") ? "SignUp" : "Login"}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {pathname.includes("register") && (
            <Controller
              control={control}
              name="name"
              // rules={null}
              render={({ field }: any) => (
                <TextField
                  label="Name"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  fullWidth={true}
                  size="small"
                  margin="normal"
                  error={!!errors.name?.message}
                  helperText={errors?.name?.message}
                />
              )}
            />
          )}
          <Controller
            control={control}
            name="email"
            // rules={null}
            render={({ field }: any) => (
              <TextField
                label="Email"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                error={!!errors.email?.message}
                helperText={errors?.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            // rules={null}
            render={({ field }: any) => (
              <TextField
                label="Password"
                onChange={(e) => field.onChange(e)}
                value={field.value}
                fullWidth={true}
                size="small"
                margin="normal"
                type="password"
                className="auth-form__input"
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2,
            }}
          >
            {pathname.includes("register") ? "SignUp" : "Login"}
          </Button>
        </form>

        {!pathname.includes("register") && (
          <>
            <Typography variant="subtitle1" component="span">
              No account?
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{ color: "blue" }}
            >
              Sign up
            </Typography>
          </>
        )}
      </Box>
    </Layout>
  );
};
