import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/nav";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const siteTitle = "erinfox.codes";

export default function Layout({ children, home }) {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="mx-16 mt-10 h-screen">
      <div className="">
        <div className="float-right z-10 -mr-20 -mt-16">
          <Image
            src="/rainbow.png"
            alt="Picture of rainbow"
            width={225}
            height={300}
          />
        </div>
        <Head>
          <link rel="icon" href="/n.png" />
        </Head>
        <header>
          <h2>
            <Link href="/">
              <a className="fixed text-5xl font-semibold">ERIN FOX</a>
            </Link>
          </h2>
        </header>
        <div className="flex-wrap sm:h-screen sm:items-start">
          <div className=" sm:hidden pl-2 absolute top-0 right-0 mr-2 mt-2">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full flex-grow sm:block `}
          >
            <Nav />
          </div>
        </div>
        <main>{children}</main>
        <div className="fixed bottom-0 right-0 flex flex-row pb-4 pr-4">
          <Link href="https://github.com/erinfox">
            <FaGithub
              style={{
                height: "40",
                width: "40",
                paddingRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://twitter.com/erinfoox`">
            <FaTwitter
              style={{
                height: "40",
                width: "40",
                paddingRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/erinkfox/">
            <FaLinkedinIn
              style={{
                height: "40",
                width: "40",
                paddingRight: "10px",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
