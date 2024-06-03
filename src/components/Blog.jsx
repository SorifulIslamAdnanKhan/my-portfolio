import { Image, Link, Card, CardFooter, Button } from "@nextui-org/react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center py-10 px-4">My Blogs</h2>
      <div className="max-w-[1024px] gap-4 grid grid-cols-12 grid-rows-2 mx-auto px-6">
        <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
          <Image
            isZoomed
            alt="What is Minification"
            className="z-0 w-full"
            src="https://getwpo.com/wp-content/uploads/2024/02/What-is-Minification-WP-Optimize-01-980x350.webp"
          />
          <div className="mt-5 px-2">
            <h4 className="text-black">
              What is minification and how can it improve site speed
            </h4>
          </div>
          <CardFooter className="absolute bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://getwpo.com/what-is-minification-and-how-can-it-improve-site-speed/"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full h-[300px] col-span-12 sm:col-span-5">
          <Image
            isZoomed
            alt="Solve WordPress Website Not Loading Issue"
            className="z-0 w-full"
            src="https://cdn.wedevs.com/uploads/2020/05/How-to-Solve-WordPress-Website-Not-Loading-Issue_.png"
          />
          <div className=" px-2">
            <h4 className="text-black">
              How to Solve WordPress Website Not Loading Issues
            </h4>
          </div>
          <CardFooter className="absolute bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://wedevs.com/blog/304599/wordpress-website-not-loading/"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            alt="Starting Online Plant Business"
            className="z-0 w-full"
            src="https://wpastra.com/wp-content/uploads/2022/12/Starting-online-plant-business.jpg"
          />
          <div className="mt-5 px-2">
            <h4 className="text-black">How To Sell Plants Online From Home</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://wpastra.com/guides-and-tutorials/sell-plants-online/"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            alt="Add Script in Elementor"
            className="z-0 w-full"
            src="https://www.wpcrafter.com/wp-content/uploads/2022/12/How-to-add-script-in-Elementor.jpg"
          />
          <div className="mt-5 px-2">
            <h4 className="text-black">How To Add Script in Elementor</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://www.wpcrafter.com/add-javascript-to-elementor-websites/"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <Image
            isZoomed
            alt="Change PHP Memory Limit in WordPress"
            className="z-0 w-full"
            src="https://happyaddons.com/wp-content/uploads/2021/12/How-To-Change-PHP-Memory-Limit-WordPress-1024x640.png"
          />
          <div className="mt-5 px-2">
            <h4 className="text-black">Increase PHP Memory Limit</h4>
          </div>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button
              as={Link}
              href="https://happyaddons.com/how-to-increase-php-memory-limit-wordpress/"
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Read More
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="text-center mt-10">
        <Button
          as={Link}
          href="https://docs.google.com/spreadsheets/d/1nWsisfdtsraM_Yi-lE4obGy0qPyA6IAe/edit?usp=sharing&ouid=101942921476126377146&rtpof=true&sd=true"
          color="primary"
        >
          Find More Blogs
        </Button>
      </div>
    </div>
  );
};

export default Blog;
