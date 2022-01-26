import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Experience from "../components/experience";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Skills from "../components/skills";

export default function Home() {
  return (
    <Layout>
      <About />
      <Skills />
      <Experience />
    </Layout>
  );
}
