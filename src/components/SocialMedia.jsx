import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/tahabenothmen/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>

    <div>
      <a href=" https://wa.me/21621447160" target="_blank" rel="noreferrer">
        <BsWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;
