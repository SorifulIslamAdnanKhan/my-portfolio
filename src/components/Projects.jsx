import Image from "next/image";
import { Card, CardFooter, Button, Link } from "@nextui-org/react";
import projectOne from "@/assets/project-one.png";
import projectTwo from "@/assets/project-two.png";
import projectFour from "@/assets/project-four.png";
import projectFive from "@/assets/project-five.png";
import projectSix from "@/assets/project-six.png";
import projectSeven from "@/assets/project-seven.png";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center py-10 px-4">My Projects</h2>
      <div className="max-w-[1024px] gap-4 grid grid-cols-12 grid-rows-2 mx-auto px-6">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image alt="Project One" className="z-0 w-full" src={projectSeven} />
          <div className="mt-10 px-2">
            <h4 className="text-black">Smart Health & Medical Care App</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://smart-health-supply-chain-client.vercel.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/health-supply-chain-client"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Client
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/health-supply-chain-server"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Server
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image alt="Project One" className="z-0 w-full" src={projectSix} />
          <div className="mt-10 px-2">
            <h4 className="text-black">iEvent Landing Page</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://i-event-landing-page.vercel.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/programming-hero-web-course1/l2-b2-assignment-5-frontend-SorifulIslamAdnanKhan"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Client
            </Button>
            <Button
              as={Link}
              href="https://github.com/programming-hero-web-course1/l2-b2-assignment-5-simple-backend-SorifulIslamAdnanKhan"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Server
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image alt="Project One" className="z-0 w-full" src={projectOne} />
          <div className="mt-10 px-2">
            <h4 className="text-black">Hands Fashion</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://ak-hands-fashion-shop.web.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Client
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/hands-fashion-shop-server"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Server
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image alt="Project Two" className="z-0 w-full" src={projectTwo} />
          <div className="mt-10 px-2">
            <h4 className="text-black px-2">Lawyer Service</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://akl-lawyer-service.web.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/lawyer-service"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Client
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/lawyer-service-server"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Server
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full h-[300px] col-span-12 sm:col-span-4">
          <Image alt="Project Four" className="z-0 w-full" src={projectFour} />
          <div className="mt-10 px-2">
            <h4 className="text-black">SPX Capsule App</h4>
          </div>
          <CardFooter className="absolute bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://spx-rocket-app-7dcef.web.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/K-M-Soriful-Islam-Adnan-Frontend-Developer"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Client
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/K-M-Soriful-Islam-Adnan-Frontend-Developer-Server"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Server
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full h-[300px] col-span-12 sm:col-span-4">
          <Image alt="Project Five" className="z-0 w-full" src={projectFive} />
          <div className="mt-10 px-2">
            <h4 className="text-black">Aya Tailwind & React Template</h4>
          </div>
          <CardFooter className="absolute bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://aya-test-delta.vercel.app/"
              className="text-tiny"
              color="secondary"
              radius="full"
              size="sm"
            >
              Live Site
            </Button>
            <Button
              as={Link}
              href="https://github.com/SorifulIslamAdnanKhan/aya-test"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              GitHub Repository
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
