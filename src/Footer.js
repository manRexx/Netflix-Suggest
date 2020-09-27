import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div>
          <h3>
            This site shows Trailers of all the trending shows currently airing
            in NETFILX
          </h3>
        </div>
        <div>
          <h4>mail @ : manikrawat@outlook.com</h4>
        </div>
        <div>
          <GitHubIcon />
          <h2>This site is creted by manRexx</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
