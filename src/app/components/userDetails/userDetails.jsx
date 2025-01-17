import css from "./userDetails.module.css";
import { fetchUserDetails } from "@/lib/api";

export async function UserDetails({ id }) {
  const user = await fetchUserDetails(id);

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
