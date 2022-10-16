import anime from "animejs";
import { IUser } from "pages";
import React, { useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";

type Props = {
  user: IUser;
};

export default function Hero({ user }: Props) {
  useEffect(() => {
    anime({
      targets: "#profile_photo",
      translateY: -10,
      opacity: 1,
      easing: "easeInOutQuad",
      delay: 500,
    });
  }, []);
  return (
    <div className="bg-black min-h-screen pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-2/3">
            <UserInfo user={user} />
          </div>
          <div className="flex-1">
            <div
              id="profile_photo"
              className="max-h-full h-[700px] opacity-0 blur-sm"
              style={{
                background: `url(${user.author.picture.url}) center/cover no-repeat`,
              }}
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
      targets: "#name",
      translateY: -10,
      opacity: 1,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#name_skeleton",
      left: 100,
      opacity: 0,
      duration: 2000,
      delay: 500,
      easing: "easeInOutQuad",
    });

    anime({
      targets: "#profession",
      translateY: -10,
      opacity: 1,
      delay: 500,
      easing: "easeInOutQuad",
    });
    anime({
      targets: "#profession_skeleton",
      left: 100,
      opacity: 0,
      duration: 2000,
      delay: 800,
      easing: "easeInOutQuad",
    });

    anime({
      targets: ".author-personal-info",
      translateY: -10,
      opacity: 1,
      easing: "easeInOutQuad",
      delay: function (_, i: number) {
        return i * 300;
      },
    });
    anime({
      targets: "#details_wrapper",
      translateY: -5,
      opacity: 1,
      easing: "easeInOutQuad",
      delay: 1200,
    });
  }, []);

  return (
    <>
      <h2
        id="name"
        className="relative overflow-hidden inline-block text-8xl font-bold text-white mb-5 opacity-0"
      >
        {user.author.name}
        <span
          id="name_skeleton"
          className="absolute -left-full top-0 h-full opacity-50 bg-white w-full"
        ></span>
      </h2>
      <h2
        id="profession"
        className="relative overflow-hidden inline-block text-6xl font-normal text-white opacity-0"
      >
        {user.author.profession}
        <span
          id="profession_skeleton"
          className="absolute -left-full top-0 h-full opacity-50 bg-white w-full"
        ></span>
      </h2>
      <p className="author-personal-info text-gray-300 text-sm leading-7 mt-6 opacity-0 font-fira-code">
        {user?.author?.bio}
      </p>
      <p className="author-personal-info text-gray-300 text-sm leading-7 mt-6 opacity-0 font-fira-code">
        Email: {user?.author?.email}
      </p>
      <p className="author-personal-info text-gray-300 text-sm leading-7 mt-1 opacity-0 font-fira-code">
        Phone: {user?.author?.phone}
      </p>

      <div
        id="details_wrapper"
        className="bg-secondary p-3 mt-10 h-[350px] opacity-0"
      >
        <QuickInfoSectionTitle title="Skills">
          <ul>
            {user?.skills?.map((skill, i) => (
              <li
                className="inline-block font-secondary text-xl"
                key={skill.id}
                style={{
                  color: user.color,
                }}
              >
                {i !== 0 && ","}
                <span className={`${i !== 0 && "pl-2"}`}>{skill.title}</span>
              </li>
            ))}
          </ul>
        </QuickInfoSectionTitle>
        <QuickInfoSectionTitle title="Social">
          <ul>
            {user?.socials?.map((social) => (
              <li
                key={social.id}
                className="inline-block text-gray-600 font-secondary text-xl mr-5"
              >
                <a
                  className="flex items-center gap-2 hover:underline"
                  href={social.url}
                  style={{
                    color: user.color,
                  }}
                >
                  <AiOutlineLink />
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </QuickInfoSectionTitle>
      </div>
    </>
  );
};

const QuickInfoSectionTitle = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="relative my-10 pt-10 text-center">
    <h3 className="blur-sm absolute left-0 top-0 w-full -z-10 font-extrabold tracking-[2rem] text-8xl text-gray-700">
      {title}
    </h3>
    {children}
  </div>
);
