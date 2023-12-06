import Image from "next/image";
import Avatar from "../public/avatar.jpg";

type ButtonLinkProps = {
  name: string;
  path: string;
  variant?: "yt";
}[];

const buttonLinks: ButtonLinkProps = [
  {
    name: "Turborepo Starter",
    path: "https://github.com/thmsmtylr/turborepo-starter",
  },
  {
    name: "Music",
    path: "https://www.youtube.com/playlist?list=PLXaEip6sfRFbnWRtU-qnUGKQ8rRpOGO9Q",
    variant: "yt",
  },
];

export const Card = () => (
  <div className="relative animate-in dark:bg-black/90 bg-white rounded-xl shadow-lg px-4 py-7 max-w-[340px] min-w-[340px] flex flex-col items-center mb-4">
    <div className="rounded-full w-20 h-20 relative mx-auto mb-3">
      <Image
        src={Avatar}
        layout="fill"
        className="rounded-full overflow-hidden"
        alt="Thomas Taylor avatar"
      />
    </div>
    <div className="mb-6">
      <h1 className="font-inter text-base dark:text-white text-center font-bold">
        Thomas Taylor
      </h1>
      <p className="font-inter text-sm dark:text-white text-center">
        UI Engineer{" "}
        <a
          className="text-rose-400 hover:text-fuchsia-500 transition-colors"
          href="https://www.swell.is/"
          target="_blank"
          rel="noreferrer"
          aria-label="Everything's swell"
        >
          @swell
        </a>{" "}
        💜
      </p>
    </div>
    <div className="flex flex-col gap-y-3 w-full">
      {buttonLinks.map((link) => {
        if (link.variant === "yt") {
          return (
            <a
              className="relative font-semibold duration-300 w-full text-center text-white overflow-hidden bg-black text-sm py-2.5 px-4 rounded-lg border border-solid border-transparent transition-[background-image] bg-gradient-yt bg-clip-padding-border bg-origin-border-border before:content-[''] before:z-[1] before:bg-transparent before:absolute before:inset-0 before:transition-colors hover:before:bg-[#ffffff1a]"
              href={link.path}
              target="_blank"
              rel="noreferrer"
              key={link.name}
              aria-label={link.name}
            >
              {link.name}
            </a>
          );
        }

        return (
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
        );
      })}
    </div>
  </div>
);
