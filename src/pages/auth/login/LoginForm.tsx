import { AuthenticationError, PromiseReturnType } from "blitz";
import Link from "next/link";
import login from "src/features/auth/mutations/login";
import { Login } from "src/features/auth/schemas";
import { useMutation } from "@blitzjs/rpc";
import { Routes } from "@blitzjs/next";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput, Title } from "@mantine/core";
import { Vertical } from "mantine-layout-components";
import { FORM_ERROR } from "src/core/components/Form";

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void;
};

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login);

  const handleSubmit = async (values) => {
    try {
      const user = await loginMutation(values);
      props.onSuccess?.(user);
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" };
      } else {
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        };
      }
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Vertical>
      <Title>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder=""
          {...form.getInputProps("password")}
        />

        <Button type="submit">Submit</Button>
      </form>
      <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>
      Or <Link href={Routes.SignupPage()}>Sign Up</Link>
    </Vertical>
  );
};

export default LoginForm;
