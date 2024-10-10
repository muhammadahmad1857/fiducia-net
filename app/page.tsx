import ChooseUs from "@/components/choose-us";
import Header from "@/components/header";
import ProjectShowcase from "@/components/projectShowcase";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import Technologies from "@/components/technologies";
import React from "react";
import NewsLetterForm from "@/components/newsLetterForm";
// const fetchData = async () => {
//   const data = await client.fetch('*[_type == "reviews"]');
//   console.log(data);
//   return data;
// };

const Home = async () => {
  // const data = await fetchData();
  return (
    <div>
      <Header
        desc="Our advanced cybersecurity solutions are designed to protect your business from emerging threats, ensuring that you can operate confidently and efficiently. "
        title="Stay Secure, Stay Ahead in a Connected World."
      />
      <Services />
      <ProjectShowcase />
      <ChooseUs />
      <Testimonial />
      <Technologies />
      <div className="flex flex-col items-center  justify-center py-10">
        <NewsLetterForm />
      </div>
    </div>
  );
};

export default Home;
