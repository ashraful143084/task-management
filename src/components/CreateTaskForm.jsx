import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TaskSchema } from "@/schema/TaskSchema";
import { useCreateTask } from "@/hooks/useCreateTask.hook";
import { toast } from "sonner";

const CreateTaskForm = () => {
  const [date, setDate] = useState();

  const { mutate, isSuccess, isError } = useCreateTask();

  const form = useForm({
    resolver: zodResolver(TaskSchema),
  });

  const onSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      if (key === "dueDate" && values[key]) {
        formData.append(key, values[key].toISOString());
      } else if (key === "taskFile" && values[key]) {
        // values.taskFile is FileList, so append first file
        formData.append("taskFile", values[key][0]);
      } else {
        formData.append(key, values[key]);
      }
    });
    console.log("Form Data", formData);
    mutate(formData);
    form.reset();
    setDate(undefined);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Task Created Successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Uh Oh! Your request failed", {
        description: "Task not Created. Please try again later.",
      });
    }
  }, [isError]);

  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-4">Create a new Task</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          {/* Title */}
          <div className="py-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="py-2">
                    <Input
                      placeholder="Task Title"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* File */}
          <div className="py-2">
            <FormField
              control={form.control}
              name="taskFile"
              render={({ field: { onChange, ref, name } }) => (
                <FormItem>
                  <FormLabel>Task File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*,application/pdf"
                      name={name}
                      ref={ref}
                      onChange={(e) => onChange(e.target.files)}
                      // NO value prop here!
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Status & Priority */}
          <div className="flex justify-between items-center">
            <div className="mr-2 w-full">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="py-2">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="todo">To Do</SelectItem>
                          <SelectItem value="inProgress">
                            In Progress
                          </SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mr-2 w-full">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="py-2">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Due Date */}
          <div className="py-2">
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <FormControl className="py-2">
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon />
                          {date ? date.toDateString() : <span>Due Date</span>}
                        </Button>
                      </PopoverTrigger>
                    </FormControl>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                          setDate(selectedDate);
                          field.onChange(selectedDate);
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description */}
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="py-2">
                    <Textarea
                      placeholder="Description of the Task"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit */}
          <div className="py-2 flex justify-end">
            <Button type="submit" className="font-bold cursor-pointer">
              Create Task
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateTaskForm;
