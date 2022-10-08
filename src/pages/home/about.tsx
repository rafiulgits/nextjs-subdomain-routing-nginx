import { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <h1>Platform About</h1>
      <Link href="/">
        <a>Go to platform home</a>
      </Link>
    </div>
  );
};

export default About;
