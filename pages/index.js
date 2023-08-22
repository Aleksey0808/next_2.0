import Head from "next/head";
import Heading from "@/components/Heading";
import Socials from "@/components/Socials";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
  const response = await fetch('https://localhost:3000/api/socials/');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
        props: {
          socials: data
        }
      };
}


const Home = ({socials}) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
      <Heading text= "Hello Next.js"/>
      <Socials socials={socials} />
  </div>
);

export default Home;