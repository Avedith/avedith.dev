import clsx from "clsx";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

import Avatar from "../../public/assets/logo/256x.png";
import Link from "../input/Link";

export default function Navigation() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScroll]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-4 py-6 transition-all duration-500",
        scroll && "bg-background shadow-2xl"
      )}
    >
      <noscript>
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 bg-background shadow-2xl" />
      </noscript>
      <div className="container mx-auto flex flex-row items-center gap-6">
        <NextLink href="/" passHref>
          <a className="mr-2 block overflow-clip rounded-full leading-[0]">
            <Image
              src={Avatar}
              width={32}
              height={32}
              className="align-middle"
              alt="Avedith"
              priority
            />
          </a>
        </NextLink>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}