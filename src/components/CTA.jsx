import { Button } from "@nextui-org/react";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-slate-900 mt-16 py-10">
      <div className="flex justify-center items-center gap-4">
        <Button
          as={Link}
          href="https://form.jotform.com/223431326725451"
          className="mt-5"
          color="primary"
          variant="ghost"
        >
          Contact Me
        </Button>
        <Button
          as={Link}
          href="https://drive.google.com/file/d/1NCXVR_YGqj-was6EaQbwDaR43GT5LGry/view?usp=sharing"
          className="mt-5"
          color="primary"
        >
          Resume
        </Button>
      </div>
    </div>
  );
};

export default CTA;
