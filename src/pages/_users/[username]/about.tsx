import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const About: NextPage = (props: any) => {
  return (
    <div>
      <h1>Welcome to profile {props.username} about</h1>
      <Link href="/">
        <a>Go to user profile</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.query;

  return {
    props: {
      username: username,
    },
  };
};

export default About;
