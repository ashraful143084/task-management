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

const login = () => {
  return (
    <>
      <section className="flex justify-center items-center max-w-xl min-h-screen w-full">
        <div className="w-4/5">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Loging and create tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Input className="mb-4" type="email" placeholder="Email" />
              <Input className="mb-4" type="password" placeholder="Password" />
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center gap-2 w-full">
                <p className="text-wrap">
                  Don't have an account ?{" "}
                  <Link to={"/signup"}>
                    <span className="hover:text-blue-500">Signup Here</span>
                  </Link>
                </p>
                <Button>Login</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default login;
