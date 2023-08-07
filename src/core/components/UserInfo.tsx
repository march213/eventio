import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";
import logout from "src/features/auth/mutations/logout";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";

export const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (!currentUser) return null;

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
};
