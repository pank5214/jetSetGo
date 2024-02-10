import React from "react";
import { SiGithub, SiTwitter, SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import {
  Github_Link,
  INSTAGRAM_LINK,
  Linkedin_Link,
  Twitter_Link,
} from "../constants/AppConstants";

const SocialMedia = () => {
  return (
    <div className="flex h-14 gap-4 items-center">
      <a
        href={Linkedin_Link}
        className="w-22 h-22"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <BsLinkedin />
        </i>
      </a>
      <a
        href={Twitter_Link}
        className="w-22 h-22"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <SiTwitter />
        </i>
      </a>
      <a
        href={Github_Link}
        className="w-22 h-22"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <SiGithub />
        </i>
      </a>
      <a
        href={INSTAGRAM_LINK}
        className="w-22 h-22"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <SiInstagram />
        </i>
      </a>
    </div>
  );
};

export default SocialMedia;
