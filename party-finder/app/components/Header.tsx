'use client'
import { UserContext, UserProvider } from "../context/UserContext";
import { useContext } from "react";
import Link from "next/link";
import { AppBar, Grid } from "@mui/material";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import UserNav from "./User/UserNav";
export default function PfHeader() {
    const [user, discordUser] = useContext(UserContext);
    

    return (
        
        <AppBar position="sticky"  style={{ backgroundColor: "#00000019", height:"150" }}>
            <Grid  height="150" marginTop={0} display="flex" justifyContent="center" alignItems="center" container spacing={2}>
            <Grid item xs={2} display="flex" alignItems="center" justifyContent="center"> <Link href="/">
            <Image src="/assets/PFLogo2.png" alt="Party Finder Logo" width={100} height={100} className="auto-margins" />
            </Link></Grid>
                <Grid item xs={4}><div className="nav-button"> <Link href="/event-creation">Event Creation</Link></div> </Grid>
                <Grid item xs={4}> <div className="nav-button"><Link href="/events">Event List</Link></div></Grid>
                <Grid item xs={2}> <UserNav /></Grid>

            </Grid>
        </AppBar>
    );

}