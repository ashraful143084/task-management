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

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schema/LoginSchema";
import { useLogin } from "@/hooks/useLogin.hook";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { mutate, isSuccess, isError } = useLogin();
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (values) => {
    mutate(values);
    form.reset();
  };

  useEffect(() => {
    if (isSuccess) {
      setLogin(true);
      toast.success("Login Successful");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Uh Ho! Your request failed", {
        description: "Invalid Email/Password",
      });
    }
  }, [isError]);

  useEffect(() => {
    if (login) {
      navigate("/tasks");
    }
  }, [login]);

  return (
    <>
      <section className="flex justify-center items-center max-w-xl min-h-screen w-full">
        <div className="w-4/5">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Loging and create tasks</CardDescription>
            </CardHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent>
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
                      Don't have an account ?{" "}
                      <Link to={"/signup"}>
                        <span className="hover:text-blue-500">Signup Here</span>
                      </Link>
                    </p>
                    <Button type="submit">Login</Button>
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

export default Login;
