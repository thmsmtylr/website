import * as React from "react";
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

export const SocialLinks = () => (
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
);
