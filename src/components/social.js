import React from "react";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";

const Social = () => {
  return (
    <section className='soc-icons'>
      <div className='tooltip'>
        <a
          href='https://github.com/Rupesh-Gudmalwar/'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithubSquare className='icons' />
        </a>
        <span className='tooltip-text'>GitHub</span>
      </div>

      <div className='tooltip'>
        <a
          href='https://www.linkedin.com/in/rupesh-gudmalwar/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin className='icons' />
        </a>
        <span className='tooltip-text'>Linkedin</span>
      </div>

      <div className='tooltip'>
        <a
          href='https://twitter.com/Rupesh_Gud'
          target='_blank'
          rel='noreferrer'
        >
          <FaTwitterSquare className='icons' />
        </a>
        <span className='tooltip-text'>Twitter</span>
      </div>

      <div className='tooltip'>
        <a
          href='mailto:rupeshgudmalwar1@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <FaEnvelopeSquare className='icons' />
        </a>
        <span className='tooltip-text'>Mail me</span>
      </div>

      <div className='tooltip'>
        <a
          href='https://drive.google.com/file/d/1_MfwWAyRg2EshwMexP68XlAyiXlpBsb4/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          download
        >
          <FaPenSquare className='icons' />
        </a>
        <span className='tooltip-text'>Resume</span>
      </div>
    </section>
  );
};

export default Social;
