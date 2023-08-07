import Layout from "src/core/layouts/Layout";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { Form, FORM_ERROR } from "src/core/components/Form";
import { ForgotPassword } from "src/features/auth/schemas";
import forgotPassword from "src/features/auth/mutations/forgotPassword";
import { useMutation } from "@blitzjs/rpc";
import { BlitzPage } from "@blitzjs/next";
import { Button, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const ForgotPasswordPage: BlitzPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);

  const handleSubmit = async (values) => {
    try {
      await forgotPasswordMutation(values);
    } catch (error: any) {
      return {
        [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
      };
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Layout title="Forgot Your Password?">
      <Title>Forgot your password?</Title>

      {isSuccess ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Layout>
  );
};

export default ForgotPasswordPage;
