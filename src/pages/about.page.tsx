import { BlitzPage } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";

const About: BlitzPage = () => {
  return (
    <Layout title="About">
      <h1>About</h1>
      <p>This is the about page</p>
    </Layout>
  );
};

export default About;
