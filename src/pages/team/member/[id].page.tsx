import Layout from "src/core/layouts/Layout";
import { useStringParam } from "src/utils";

const TeamMember = () => {
  const id = useStringParam("id");

  return <Layout title={`Team Member: ${id}`}>Team Member: {id}</Layout>;
};

export default TeamMember;
