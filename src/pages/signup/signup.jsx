import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupSchema } from "@/schema/SignupSchema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <section className="flex justify-center items-center max-w-xl min-h-screen w-full">
        <div className="w-4/5">
          <Card>
            <CardHeader>
              <CardTitle>Sigup</CardTitle>
              <CardDescription>
                Create a new account to start creating tasks
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormControl className="py-2">
                          <Input
                            placeholder="First Name"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormControl className="py-2">
                          <Input
                            placeholder="Last Name"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormControl className="py-2">
                          <Input
                            type="email"
                            placeholder="Email"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormControl className="py-2">
                          <Input
                            type="password"
                            placeholder="Password"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center gap-2 w-full">
                    <p className="text-wrap">
                      Already have an account ?{" "}
                      <Link to={"/login"}>
                        <span className="hover:text-blue-500">Login Here</span>
                      </Link>
                    </p>
                    <Button type="submit">Signup</Button>
                  </div>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Signup;
