import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function ContactBar() {
  return (
    <div className="fixed bottom-0 left-2 text-xl text-[#A89F91] md:text-3xl lg:left-8">
      <a href="https://github.com/RobAndonie" className="block p-3">
        <IoLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/roberto-andonie-71b066213/"
        className="block p-3"
      >
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/robertoah_2111/" className="block p-3">
        <FaInstagram />
      </a>
      <a href="mailto:rah2111@outlook.com" className="block p-3">
        <IoMail />
      </a>
      <div className="h:12 mx-auto w-px bg-[#A89F91] md:h-28 " />
    </div>
  );
}

export default ContactBar;
