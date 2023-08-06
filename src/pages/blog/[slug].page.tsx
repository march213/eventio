import { BlitzPage } from "@blitzjs/next";
import { useStringParam } from "src/utils";

const BlogPost: BlitzPage = () => {
  const slug = useStringParam("slug");

  return (
    <div>
      <h1>BlogPost: {slug}</h1>
    </div>
  );
};

export default BlogPost;
