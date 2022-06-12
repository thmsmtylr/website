import * as React from "react";
import Image from "next/image";
import Avatar from "../public/avatar-400x400.jpg";
import FeatherIcon from "feather-icons-react";
import SpotifyIcon from "../public/spotify_samesize.svg";

type SocialLinkProps = {
  name: string;
  path: string;
  icon?: any;
}[];

const socialLinks: SocialLinkProps = [
  {
    name: "twitter",
    path: "https://twitter.com/thmsmtylr",
  },
  {
    name: "spotify",
    path: "https://open.spotify.com/user/thmsmtylr?si=0d324c8ae8dd4a80",
    icon: <SpotifyIcon />,
  },
  {
    name: "twitch",
    path: "https://www.twitch.tv/maxoverflow_",
  },
  {
    name: "github",
    path: "https://github.com/thmsmtylr",
  },
];

type ButtonLinkProps = {
  name: string;
  path: string;
}[];

const buttonLinks: ButtonLinkProps = [
  {
    name: "Turborepo Starter",
    path: "https://github.com/thmsmtylr/turborepo-starter",
  },
  // {
  //   name: "Very Good Music",
  //   path: "",
  // },
  // {
  //   name: "What The Fuck Should I Watch",
  //   path: "",
  // },
];

export const Card = () => (
  <>
    <div className="relative dark:bg-black/90 bg-white rounded-xl shadow-lg px-4 py-7 max-w-[340px] space-y-4 mb-4">
      <div className="rounded-full w-20 h-20 relative mx-auto">
        <Image
          src={Avatar}
          layout="fill"
          className="rounded-full overflow-hidden"
          alt="Thomas Taylor avatar"
        />
      </div>
      <h1 className="font-inter text-base dark:text-white text-center font-medium">
        @thmsmtylr
      </h1>
      <p className="font-inter text-sm dark:text-white text-center">
        Father. Senior Software Consultant{" "}
        <a
          className="text-rose-400 hover:text-fuchsia-500 transition-colors"
          href="https://alembic.com.au/"
          target="_blank"
          rel="noreferrer"
          aria-label="Alembic"
        >
          @teamalembic
        </a>
        .{" "}
        <a
          className="text-rose-400 hover:text-fuchsia-500 transition-colors"
          href="https://srrycmpny.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Sorry Company"
        >
          @srrycmpny
        </a>
        . Esports aficionado. Aspiring furniture restorer.
      </p>
      {buttonLinks.map((link) => (
        <a
          className="w-full font-medium hover:border-fuchsia-500 rounded-xl inline-block p-2 dark:text-white hover:text-fuchsia-500 border dark:border-white border-black text-center transition-colors"
          href={link.path}
          target="_blank"
          rel="noreferrer"
          key={link.name}
          aria-label={link.name}
        >
          {link.name}
        </a>
      ))}
    </div>
    <div className="max-w-[333px] flex justify-center dark:text-white space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className="hover:dark:text-rose-400 transition-colors"
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
        >
          {link.icon ? link.icon : <FeatherIcon icon={link.name} />}
        </a>
      ))}
    </div>
  </>
);
