import React from "react";
import { globals } from "../globals";
import Link from "next/link";

export const Header: React.FC = () => (
  <div className="header">
    <Link href="/">{globals.siteName}</Link>
    <div className="flex-spacer" />
    <Link href="/imprint/">Imprint</Link>
  </div>
);
