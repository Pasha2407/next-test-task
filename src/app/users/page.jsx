import { Suspense } from "react";
import { fetchUsersList } from "@/lib/api";
import { UsersCard } from "../components/usersCard/usersCard";
import { UserDetails } from "../components/userDetails/userDetails";

export default async function UsersPage() {
  const usersList = await fetchUsersList();
  return (
    <Suspense>
      <div style={{ padding: "20px" }}>
        <UsersCard usersList={usersList} />
        <UserDetails />
      </div>
    </Suspense>
  );
}
