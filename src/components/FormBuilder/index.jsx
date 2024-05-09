import Card from "../Utils/Card";
import { TextQuestion } from "./Questions/Types";

const Sidebar = () => {
  return (
    <>
      <Card title="Basic fields">
        <TextQuestion />
      </Card>
    </>
  );
}

export default Sidebar;