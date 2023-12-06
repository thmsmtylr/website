import { Metadata } from "next";
import { Card, CurrentlyPlaying, SocialLinks } from "../components";

export const metadata: Metadata = {
  title: "Thomas Taylor",
  description: "UI Engineer @swell.",
};

export default function Page() {
  return (
    <main>
      <CurrentlyPlaying />
      <Card />
      <SocialLinks />
    </main>
  );
}
