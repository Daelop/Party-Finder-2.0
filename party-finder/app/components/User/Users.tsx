'use client'
import {UserContext } from "@/app/context/UserContext";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { EventUser } from "../types/EventUserType";
import UserEvents from "./UserEvents";
interface User {
    id: string;
    discordId: string;
    username: string;
    bio: string;
    pic?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }


export default function Profile() {
    const [user, discordUser] = useContext(UserContext);
    const { id } = useParams();
    const [profile, setProfile] = useState<User>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:8080/users/" + id).then((res) => res.json()).then((data) => {
            setProfile(data);
            setLoading(false);
        });
     
    }, [id]);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1 className="text-color-1">{profile?.username}</h1>
            <Image src="/assets/user-default.png" alt="User Profile Image" width={200} height={200} />
            <p>{profile?.bio}</p>
            <UserEvents/>
        </div>
    );
}
