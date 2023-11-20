import { IoLogoGithub } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

function ContactBar() {
  return (
    <div className="fixed bottom-0 left-8 text-3xl text-[#A89F91]">
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
      <div className="mx-auto h-28 w-px bg-[#A89F91] " />
    </div>
  );
}

export default ContactBar;
