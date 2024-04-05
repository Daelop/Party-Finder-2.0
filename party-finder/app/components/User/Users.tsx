'use client'

import {UserContext } from "@/app/context/UserContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { EventUser } from "../types/EventUserType";
import UserEvents from "./UserEvents";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
//declares types for user. This now needs to be imported from the types file.
interface User {
    id: string;
    discordId: string;
    username: string;
    bio: string;
    pic?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

//Displays the user profile
export default function Profile() {
    const [user, discordUser] = useContext(UserContext);
    const { id } = useParams();
    const [profile, setProfile] = useState<User>();
    const [loading, setLoading] = useState(true);
    //fetches the user profile
    useEffect(() => {
        fetch("http://localhost:8080/users/" + id).then((res) => res.json()).then((data) => {
            setProfile(data);
            setLoading(false);
        });
     
    }, [id]);
    //prevents the page from crashing if the profile is still loading
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        //Maps the user profile and displays it
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <h1 className="text-color-1">{profile?.username}</h1>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image src="/assets/user-default.png" alt="User Profile Image" width={200} height={200} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <p className="text-color-2">{profile?.bio}</p>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <UserEvents/>
                </Box>
            </Grid>
        </Grid>
    );
}
