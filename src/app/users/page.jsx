import { Suspense } from "react";
import { fetchUsersList } from "@/lib/usersApi";
import { UsersCard } from "../components/usersCard/usersCard";
import { UserDetails } from "../components/userDetails/userDetails";

export default async function UsersPage() {
  const usersList = await fetchUsersList();
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div style={{ padding: "20px" }}>
        <UsersCard usersList={usersList} />
        <UserDetails />
      </div>
    </Suspense>
  );
}
