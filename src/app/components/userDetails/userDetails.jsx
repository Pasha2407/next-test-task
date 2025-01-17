"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import css from "./userDetails.module.css";
import { fetchUserDetails } from "@/lib/api";

export function UserDetails() {
  const [user, setUser] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetchUserDetails(id).then(setUser);
    }
  }, [id]);

  return (
    user && (
      <div className={css.Container}>
        <h1>
          {user.firstname} {user.lastname}
        </h1>
        <ul>
          <li>
            <span>Phone: </span>
            {user.phone}
          </li>
          <li>
            <span>Email: </span>
            {user.email}
          </li>
          <li>
            <span>Date of birth: </span>
            {user.birthDate}
          </li>
          <li>
            <span>Address: </span>
            {user.address.street}
          </li>
        </ul>
      </div>
    )
  );
}
