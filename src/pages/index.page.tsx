import { BlitzPage } from "@blitzjs/next";
import { Vertical } from "mantine-layout-components";
import { AuthenticationForm } from "src/core/components/MainAuthenticationForm";
import Layout from "src/core/layouts/Layout";
import { useCurrentUser } from "src/features/users/hooks/useCurrentUser";
import { UserInfo } from "../core/components/UserInfo";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();

  return (
    <Layout title="Home">
      {currentUser && <UserInfo />}
      {!currentUser && (
        <Vertical center fullH fullW>
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Home;
