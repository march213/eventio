import Link from "next/link";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import logout from "src/features/auth/mutations/logout";
import { useMutation } from "@blitzjs/rpc";
import { Routes } from "@blitzjs/next";
import { Button } from "@mantine/core";

export const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (currentUser) {
    return (
      <>
        <Button
          onClick={async () => {
            await logoutMutation();
          }}
        >
          Logout
        </Button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <strong>Sign Up</strong>
        </Link>
        <Link href={Routes.LoginPage()}>
          <strong>Login</strong>
        </Link>
      </>
    );
  }
};
