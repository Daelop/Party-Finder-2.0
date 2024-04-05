//Displays all events a user is participating in
import { useParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { Card, CardContent, Grid } from "@mui/material"
import { EventUser } from "../types/EventUserType"
import Link from "next/link"
export default function UserEvents() {
    const {id} = useParams()
    const [events, setEvents] = useState<EventUser[]>([])
    const [loading, setLoading] = useState(true)
    //fetch all events a user is participating in
    useEffect(() => {
        if (id){
            fetch("http://localhost:8080/eventusers/user/" + id).then((res) => res.json()).then((data) => {
                setEvents(data);
                setLoading(false);
            });
        }
    },[id])
    if (loading){
        return <div>Loading...</div>
    }
    return(
        //maps through events and displays them
        <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center" sx={{width:'60%'}}>
            <Grid item xs={12}>
            <h3 className="text-color-1" style={{textAlign:"left"}}>User&apos;s events: </h3>
            </Grid>
            {(events.length === 0||events === null || events === undefined)&& <div>No events yet</div>}
            {events.length > 0 && events.map((event) => (
                <Grid key={event._id} item xs={4}>
                    <Card>
                        <CardContent>
                            <h4>
                                <Link href={"/events/" + event.event}>{event.eventName}</Link>
                            </h4>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        
        </Grid>
    )
}