import React from "react";
import "./Footer.css";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__top">
          <h3>Trailers of all the trending shows airing on NETFILX</h3>
        </div>
        <div>
          <IconButton href="https://github.com/manRexx" target="_blank">
            <GitHubIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
          <h4>
            ~ created by{" "}
            <span className="span" color="white">
              manRexx
            </span>{" "}
            ~
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
