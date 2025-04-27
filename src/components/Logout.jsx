import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <div className="flex justify-end">
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer"
        onClick={handleClick}
      >
        <LogOut />
      </Button>
    </div>
  );
};

export default Logout;
