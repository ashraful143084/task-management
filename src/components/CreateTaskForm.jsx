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
    const dueDate = values.dueDate.toISOString();
    mutate({ ...values, dueDate });
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Task Created Successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Uh Ho! Your request failed", {
        description: "Task not Created, Please try again later",
      });
    }
  }, [isError]);

  return (
    <>
      <section className="flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">Create a new Task</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                            <SelectItem value="todo">Status</SelectItem>
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

            <div className="py-2">
              <FormField
                control={form.control}
                name="dueDate" // <- changed from "priority"
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
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="py-2 flex justify-end">
              <Button type="submit" className="font-bold  cursor-pointer">
                Create Task
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};

export default CreateTaskForm;
