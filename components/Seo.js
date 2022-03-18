import Head from "next/head";

export default function Seo({ title }) {
  // html <head></head> 안에 들어가는 것들
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
