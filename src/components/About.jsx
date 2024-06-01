import Image from "next/image";
import { Button } from "@nextui-org/react";
import adnanImage from "@/assets/adnan.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-16 px-6 mt-16 max-w-[1024px] mx-auto">
      <div className="w-full lg:max-w-[512px] max-auto order-last lg:order-first">
        <Image
          src={adnanImage}
          className="w-full md:max-w-[450px] mx-auto"
          alt="K. M. Soriful Islam Adnan"
        />
      </div>
      <div className="w-full lg:max-w-[512px] max-auto">
        <h4>About Me</h4>
        <h2 className="my-5">
          Streamline Your{" "}
          <span className="font-bold text-blue-500">Web Applications!</span>
        </h2>
        <p className="leading-loose">
          I am a passionate web developer with expertise in JavaScript, React,
          Next.js, Node.js, Express.js, and MongoDB. I have developed websites
          for industries like dental practices, law firms, eCommerce, and online
          education, using technologies such as React Router, Firebase, Stripe,
          JSON Web Tokens, Tailwind, and Bootstrap. My dedication to learning
          ensures I stay updated with new technologies.
        </p>
        <p className="leading-loose my-5">
          With over four years of experience in content writing, I specialize in
          creating, editing, and optimizing content for SEO. I have written 120+
          articles for companies like UpdraftPlus, Brainstorm Force, and weDevs,
          and authored over 40 technical documents. If you need a skilled web
          developer or content writer, feel free to reach out.
        </p>
        <p className="leading-loose">
          I am always eager to collaborate on exciting projects and share my
          expertise. If you are looking for a dedicated web developer feel free
          to reach out.
        </p>
        <Button className="mt-5" color="primary" variant="ghost">
          Hire Me
        </Button>
      </div>
    </div>
  );
};

export default About;
