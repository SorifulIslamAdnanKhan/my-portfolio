import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div>
        <div className="grid grid-flow-col gap-4 justify-center p-4 mb-4">
          <a href="https://github.com/SorifulIslamAdnanKhan" target="_blank">
            <FaGithub className="text-2xl"></FaGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/soriful-islam-adnan/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl"></FaLinkedin>
          </a>
          <a href="https://twitter.com/adnankhan7792" target="_blank">
            <FaTwitter className="text-2xl"></FaTwitter>
          </a>
        </div>
        <p className="text-center p-2">Copyright © 2024 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
