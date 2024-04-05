"use client";
import { UserContext, UserProvider } from "../context/UserContext";
import { useContext } from "react";
import Link from "next/link";
import { AppBar, Box, Grid } from "@mui/material";
import Image from "next/image";
import UserNav from "./User/UserNav";
export default function PfHeader() {
  const [user, discordUser] = useContext(UserContext);
//Header for the website
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#00000019", height: "150" }}
    >
      <Grid
        height="150"
        marginTop={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          <Link href="/">
            <Image
              src="/assets/PFLogo2.png"
              alt="Party Finder Logo"
              width={100}
              height={100}
              className="auto-margins"
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
            <Grid container spacing={2}  display="flex"
          alignItems="center"
          justifyContent="center">
            <Grid item xs={4}>
          <Box>
            <Link className="nav-button" href="/event-creation">
              Event Creation
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Link className="nav-button" href="/events">
              Event List
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4}>
          {" "}
          <UserNav />
        </Grid>
            </Grid>
        </Grid>
     
      </Grid>
    </AppBar>
  );
}
