import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskOrder = () => {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">ASC</SelectItem>
          <SelectItem value="dsc">DSC</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default TaskOrder;
