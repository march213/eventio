import Layout from "src/core/layouts/Layout";
import { FORM_ERROR } from "src/core/components/Form";
import resetPassword from "src/features/auth/mutations/resetPassword";
import { BlitzPage, Routes } from "@blitzjs/next";
import { useRouter } from "next/router";
import { useMutation } from "@blitzjs/rpc";
import Link from "next/link";
import { assert } from "blitz";
import { Button, PasswordInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

const ResetPasswordPage: BlitzPage = () => {
  const router = useRouter();
  const token = router.query.token?.toString();
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword);

  const handleSubmit = async (values) => {
    try {
      assert(token, "token is required.");
      await resetPasswordMutation({ ...values, token });
    } catch (error: any) {
      if (error.name === "ResetPasswordError") {
        return {
          [FORM_ERROR]: error.message,
        };
      } else {
        return {
          [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
        };
      }
    }
  };

  const form = useForm({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  return (
    <Layout title="Reset Your Password">
      <Title>Set a New Password</Title>

      {isSuccess ? (
        <div>
          <h2>Password Reset Successfully</h2>
          <p>
            Go to the <Link href={Routes.Home()}>homepage</Link>
          </p>
        </div>
      ) : (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <PasswordInput
            withAsterisk
            label="New Password"
            placeholder=""
            {...form.getInputProps("newPassword")}
          />
          <PasswordInput
            withAsterisk
            label="Confirm New Password"
            placeholder=""
            {...form.getInputProps("confirmPassword")}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </Layout>
  );
};

ResetPasswordPage.redirectAuthenticatedTo = "/";

export default ResetPasswordPage;
