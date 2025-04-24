import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserProfile = ({ firstName = "Ashraful Islam" }) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-2 w-full py-8">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.pngs" alt="@shadcn" />
          <AvatarFallback className="text-2xl font-semibold text-center">
            {firstName.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
        <div className="text-xl">
          Hello, <span className="font-bold">{firstName}</span>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
