import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import styles from "../modules/taskSidebar.module.css";
import UserProfile from "./UserProfile";
import CreateTaskForm from "./CreatetaskForm";
import Logout from "./Logout";

const TaskSideBar = () => {
  return (
    <section
      className={`max-lg:relative max-lg:top-0 max-lg:right-0 max-lg:mx-auto fixed right-4 top-4 ${styles.taskSidebarHeight}`}
    >
      <Card className="flex flex-col justify-between h-full w-full p-6">
        <UserProfile />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
};

export default TaskSideBar;
