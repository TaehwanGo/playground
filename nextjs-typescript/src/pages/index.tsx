import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styles from "styles/Home.module.css";
import Card from "src/components/Card";
import { Context } from "src/hooks/useContext";
import { CatFact, getCatFact } from "./api";
import { useQuery } from "react-query";
import { axiosApi } from "./api/axiosApi";
import { CATFACT_SUB_URL } from "@common/constants";

const Home: NextPage = () => {
  const { isShown } = useContext(Context);
  const [catFact, setCatFact] = useState<CatFact>({ fact: "", length: 0 });
  // const { isLoading } = useQuery("cat-fact", getCatFact, {
  //   onSuccess: (res) => setCatFact(res),
  //   staleTime: Infinity,
  //   refetchInterval: Infinity,
  // });

  const getSomeData = useCallback(async (params) => {
    try {
      const res = axiosApi.get(CATFACT_SUB_URL.fact, {
        params,
      });
      // 토스트 메세지
    } catch (error) {
      // 토스트 메세지
    }
  }, []);

  useLayoutEffect(() => {
    let result: CatFact;
    getCatFact()
      .then((res) => {
        console.log("Home", res);
        setCatFact(res);
        return (result = res);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {isShown && <Card />}
        <div>{catFact.fact}</div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
