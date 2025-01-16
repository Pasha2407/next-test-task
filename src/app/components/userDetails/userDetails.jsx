"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { fetchUserDetails } from "@/lib/usersApi";

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
      <div>
        <p>Email: {user.email}</p>
      </div>
    )
  );
}
