import { fetchUsersList } from "@/lib/api";
import { UsersCard } from "../components/usersCard/usersCard";
import { UserDetails } from "../components/userDetails/userDetails";

export default async function UsersPage({ searchParams }) {
  const usersList = await fetchUsersList();
  const waitingSearchParams = await searchParams;
  const id = waitingSearchParams?.id;

  return (
    <div style={{ padding: "20px" }}>
      <UsersCard usersList={usersList} />
      <UserDetails id={id} />
    </div>
  );
}
