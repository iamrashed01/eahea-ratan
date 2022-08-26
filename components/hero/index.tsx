import anime from "animejs";
import { IUser } from "pages";
import { useEffect } from "react";

type Props = {
  user: IUser;
};

export default function Hero({ user }: Props) {
  return (
    <div className="bg-black h-screen pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-2/3">
            <UserInfo user={user} />
          </div>
          <div className="flex-1">
            <div
              className="max-h-full h-[700px]"
              style={{ background: `url(${user.author.picture.url})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const UserInfo = ({ user }: Props) => {
  useEffect(() => {
    anime({
      targets: "#name_skeleton",
      left: "100%",
      // rotate: "1turn",
      duration: 2000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: "#profession_skeleton",
      right: "100%",
      // rotate: "1turn",
      duration: 2000,
      easing: "easeInOutQuad",
    });
  }, []);
  return (
    <>
      <h2 className="relative overflow-hidden inline-block text-8xl font-bold text-white">
        {user.author.name}{" "}
        <span
          id="name_skeleton"
          className="absolute -left-full top-0 h-full opacity-50 bg-white w-full"
        ></span>
      </h2>
      <h2 className="relative overflow-hidden inline-block text-8xl font-bold text-white">
        {user.author.profession}{" "}
        <span
          id="profession_skeleton"
          className="absolute -left-full top-0 h-full opacity-50 bg-white w-full"
        ></span>
      </h2>
    </>
  );
};
