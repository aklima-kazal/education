import Banner from "@/Components/Banner/banner";
import Categories from "@/Components/Categories/Categories";
import Course from "@/Components/Course/Course";
import Information from "@/Components/Information/Information";
import Layout from "@/Components/Layout/layout";
import LearnCourses from "@/Components/LearnCourses/LearnCourses";
import Numberfact from "@/Components/Numberfact/Numberfact";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <Banner />
          <Information />
          <Course />
          <LearnCourses />
          <Categories />
          <Numberfact />
        </Layout>
      </div>
    </>
  );
}
