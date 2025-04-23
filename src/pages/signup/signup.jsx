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

const signup = () => {
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
            <CardContent>
              <Input className="mb-4" type="text" placeholder="First Name" />
              <Input className="mb-4" type="text" placeholder="Last Name" />
              <Input className="mb-4" type="email" placeholder="Email" />
              <Input className="mb-4" type="password" placeholder="Password" />
            </CardContent>
            <CardFooter>
              <div className="flex justify-between items-center gap-2 w-full">
                <p className="text-wrap">
                  Already have an account ?{" "}
                  <Link to={"/login"}>
                    <span className="hover:text-blue-500">Login Here</span>
                  </Link>
                </p>
                <Button>Signup</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

export default signup;
