"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

import css from "./usersCard.module.css";

export function UsersCard({ usersList }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  return (
    <div className={css.CardList}>
      {usersList.map((item) => (
        <Link
          href={`/users?id=${item.id}`}
          shallow
          key={item.id}
          className={clsx(css.Card, {
            [css.active]:
              pathname === "/users" && userId === item.id.toString(),
          })}
        >
          <p>{item.firstname}</p>
          <p>{item.lastname}</p>
        </Link>
      ))}
    </div>
  );
}
