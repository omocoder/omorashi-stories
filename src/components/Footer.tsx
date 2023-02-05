import React from "react";
import { globals } from "../globals";

export const Footer: React.FC = () => (
  <div className="footer">
    <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
    <div className="centered">
      <a href="https://github.com/omocoder" target="_blank" rel="noreferrer">
        <img
          src="/omorashi-stories/img/github.svg"
          width="20"
          height="20"
          alt="GitHub Logo"
        />
      </a>
    </div>
    <a href="/omorashi-stories/rss.xml" target="_blank" rel="noreferrer">
      <img
        src="/omorashi-stories/img/rss-white.svg"
        alt="RSS Feed"
        height="30"
        width="30"
      />
    </a>
  </div>
);
