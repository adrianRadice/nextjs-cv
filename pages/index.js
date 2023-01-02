import dynamic from "next/dynamic";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";
const Navigation = dynamic(() => import("../components/Navigation"));

const Greetings = dynamic(() => import("../containers/Greetings"));
export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <Greetings />
      <main className={styles.main}></main>
    </>
  );
}
