"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import css from "./header.module.css";

export function Header() {
  const pathname = usePathname();
  return (
    <div className={css.Links}>
      <Link href={"/"} className={clsx({ [css.active]: pathname === "/" })}>
        Home
      </Link>
      <Link
        href="/users"
        className={clsx({ [css.active]: pathname === "/users" })}
      >
        Users
      </Link>
      <Link
        href="/posts"
        className={clsx({ [css.active]: pathname === "/posts" })}
      >
        Posts
      </Link>
    </div>
  );
}
