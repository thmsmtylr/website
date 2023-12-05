import * as React from "react";
import Image from "next/image";
import Avatar from "../public/avatar.jpg";

type ButtonLinkProps = {
  name: string;
  path: string;
}[];

const buttonLinks: ButtonLinkProps = [
  {
    name: "Turborepo Starter",
    path: "https://github.com/thmsmtylr/turborepo-starter",
  },
];

export const Card = () => (
  <div className="relative dark:bg-black/90 bg-white rounded-xl shadow-lg px-4 py-7 max-w-[340px] min-w-[340px] flex flex-col items-center mb-4">
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
);
