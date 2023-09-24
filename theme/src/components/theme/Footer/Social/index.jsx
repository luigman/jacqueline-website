import React from "react";
import colors from "tokens/colors";
import { socialLinks } from "data";
import { Links } from "./styles";
import { LinkedinFull } from "components/social";

export default () => (
  <Links>
    {socialLinks.linkedin && (
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on Linkedin"
      >
        <LinkedinFull color={colors.primary} />
      </a>
    )}
  </Links>
);
