import Image from "next/image";
import { Button } from "@nextui-org/react";
import adnanImage from "@/assets/adnan.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-16 px-6 mt-16 max-w-[1024px] mx-auto">
      <div>
        <h3>THIS IS</h3>
        <h1 className="my-5">
          K. M. SORIFUL ISLAM{" "}
          <span className="font-bold text-blue-500">ADNAN</span>
        </h1>
        <p className="leading-loose w-10/12">
          I am a web developer experienced in React.Js. I have developed several
          projects using JavaScript, React.Js, Next.Js, Node JS, Express JS,
          MongoDB, Tailwind, and Bootstrap.
        </p>
        <Button className="mt-5" color="primary" variant="ghost">
          Hire Me
        </Button>
      </div>
      <div>
        <Image
          src={adnanImage}
          className="w-full md:max-w-[450px] mx-auto"
          alt="K. M. Soriful Islam Adnan"
        />
      </div>
    </div>
  );
};

export default Banner;
