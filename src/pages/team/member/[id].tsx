import { useStringParam } from "src/utils";

const TeamMember = () => {
  const id = useStringParam("id");

  return <div>Team Member: {id}</div>;
};

export default TeamMember;
