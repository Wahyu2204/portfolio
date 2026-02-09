import MySelf from "@/components/about/mySelf";
import TechStack from "@/components/about/techStack";
import Edu from "@/components/about/edu";

import Scroll from "@/components/ui/scroll";

export default function About() {
  return (
    <>
      <MySelf />
      <Scroll>
        <TechStack />
      </Scroll>
      <Scroll>
        <Edu />
      </Scroll>
    </>
  );
}
