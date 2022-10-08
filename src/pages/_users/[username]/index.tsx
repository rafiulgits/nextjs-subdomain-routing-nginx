import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const User: NextPage = (props: any) => {
  return (
    <div>
      <h1>Welcome to profile {props.username}</h1>
      <div>
        <Link href="/about">
          <a>Go to user about</a>
        </Link>
      </div>
      <div>
        <Link href="http://localhost:3000">
          <a>Go to platform</a>
        </Link>
      </div>
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

export default User;
