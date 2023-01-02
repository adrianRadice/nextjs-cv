import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import ContactUs from "../components/ContactUs";
import SEO from "../components/SEO";
import Experience from "../containers/Experience";
const Skills = dynamic(() => import("../containers/Skills"));
const Navigation = dynamic(() => import("../components/Navigation"));
const Education = dynamic(() => import("../containers/Education"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const GithubProfileCard = dynamic(() =>
  import("../containers/GithubProfileCard")
);
export default function Home({ githubProfileData }) {
  return (
    <>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      <ContactUs />
      <GithubProfileCard prof={githubProfileData} />
      <main></main>
    </>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/adrianRadice`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
