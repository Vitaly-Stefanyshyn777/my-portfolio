import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    "Vitaliy Stefanyshyn is a full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Vitaliy Stefanyshyn",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Vitaliy Stefanyshyn",
  imageAlt: "Vitaliy Stefanyshyn portfolio website",
};

const Home: NextPage<Props> = ({ blogPosts }) => {
  return (
    <>
      <AppHead
        title="Vitaliy Stefanyshyn - A Full-stack Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Vitaliy.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
