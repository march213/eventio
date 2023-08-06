import { BlitzPage } from "@blitzjs/next";
import Layout from "src/core/layouts/Layout";
import { useStringParam } from "src/utils";

const BlogPost: BlitzPage = () => {
  const slug = useStringParam("slug");

  return (
    <Layout title={`Blog Post: ${slug}`}>
      <h1>BlogPost: {slug}</h1>
    </Layout>
  );
};

export default BlogPost;
