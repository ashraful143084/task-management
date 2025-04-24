import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
const Logout = () => {
  return (
    <div className="flex justify-end  ">
      <Button variant="outline" size="icon">
        <LogOut />
      </Button>
    </div>
  );
};

export default Logout;
