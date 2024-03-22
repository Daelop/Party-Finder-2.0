import Link from "next/link";
import { UserContext } from "../../context/UserContext";
import {useContext} from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import useLogout from "../logout";
export default function UserNav() {
  const [user, discordUser,loggedIn] = useContext(UserContext);
  const logout = useLogout();
  if (loggedIn===true) {
    return (
      <div>
        <Link href={
          "/user/" + user._id
        }>
        <Image src="/assets/user-default.png" alt="User Profile Image" width={60} height={60} />
        </Link>
        <Link href="/" >
         <Button onClick={logout}>Logout</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="https://discord.com/oauth2/authorize?client_id=1212963361063436319&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fdiscord%2Fredirect&scope=identify">
          Login
        </Link>
      </div>
    );
  }
}