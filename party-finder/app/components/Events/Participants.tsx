import { EventUser } from "../types/EventUserType";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardActions, CardContent, Grid } from "@mui/material";
import Link from "next/link";

export default function Participants(){
const { id } = useParams();
const [participants, setParticipants] = useState<EventUser[]>();
const [loading, setLoading] = useState(true);
//fetch all participants for an event
useEffect(()=>{if (id){
    fetch("http://localhost:8080/eventusers/event/" + id)
    .then((res) => res.json())
    .then((data) => {
        setParticipants(data);
        setLoading(false);
    });
}},[id])
//Prevents the page from rendering before the participants are loaded
if (loading){
    return <div>Loading...</div>
}
return(
    //maps through participants and displays them
<Grid container spacing={2} display="flex" justifyContent="center" alignItems="center" >
    <Grid item xs={9}>
        {(participants.length === 0 || participants===null || participants === undefined)&& <div>No participants yet</div>}
        {participants.length > 0 && participants !== undefined && participants!==null && participants.map((participant) => (
            <Card key={participant._id} sx={{maxWidth:"30%"}}>
                <CardContent>
                    <h2>IGN: <Link href={
                        "/user/" + participant.user
                    }>{participant.ign}</Link></h2>
                    <h3>Server: {participant.server}</h3>
                    <h3>Discord: {participant.username}</h3>
                </CardContent>
            </Card>
        ))}
    </Grid>
</Grid>
)
}

