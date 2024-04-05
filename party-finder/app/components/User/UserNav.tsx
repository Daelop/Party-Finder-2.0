//conditional rendering for user nav bar
import Link from "next/link";
import { UserContext } from "../../context/UserContext";
import {useContext} from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import useLogout from "../logout";
export default function UserNav() {
  //useContext to get the user, discordUser, and loggedIn status
  const [user, discordUser,loggedIn] = useContext(UserContext);
  //useLogout to logout the user
  const logout = useLogout();
  //if the user is logged in, the user profile image and logout button will be displayed
  if (loggedIn===true) {
    return (
      <div>
        <Link href={
          "/user/" + user._id
        }>
        <Image src="/assets/user-default.png" alt="User Profile Image" width={60} height={60} />
        </Link>
        <Link href="/" >
         <Button className="nav-button" onClick={logout}>Logout</Button>
        </Link>
      </div>
    );
  } else {
    //if the user is not logged in, the login button will be displayed
    return (
      <div>
        <Link className="nav-button" href="https://discord.com/oauth2/authorize?client_id=1212963361063436319&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fauth%2Fdiscord%2Fredirect&scope=identify">
          Login
        </Link>
      </div>
    );
  }
}