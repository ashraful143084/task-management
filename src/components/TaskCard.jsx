import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const TaskCard = (props) => {
  const {
    title = "This is the default Title",
    description = "This is the default Description",
    status = "todo",
    priority = "normal",
    dueDate = new Date("2025-04-23T04:44:57.310+00:00"),
  } = props;

  let formattedDate = dueDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <h1 className="flex basis-3/4">{title}</h1>
              <div className="flex justify-between items-center gap-2 max-lg:flex-col max-lg:items-end">
                <p className="text-nowrap border border-slate-700 px-2 py-1 rounded-lg text-sm">
                  {formattedDate}
                </p>
                <p className="bg-green-800 px-2 py-1 text-sm rounded-lg text-center">
                  {priority}
                </p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>{description}</CardContent>
          <CardFooter>
            <div className="flex justify-between items-center gap-2 w-full">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={status === "inProgress" ? true : false}
                  onCheckedChange={() => console.log("Button Switched")}
                  id="inProgress"
                />
                <Label htmlFor="inProgress">In Progress</Label>
              </div>
              <Button className="font-bold">Completed</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default TaskCard;
