import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import Workspace from "../../components/workspace";
import { fetchDistributions } from "../../hooks/useDistributions";

export default function New() {
  return (
    <>
      <Head>
        <title>GDPM - Edit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full w-full">
        <Workspace />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["distributions"],
    queryFn: () => fetchDistributions(),
    staleTime: Infinity,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
