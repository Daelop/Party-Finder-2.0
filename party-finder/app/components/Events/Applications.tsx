import { PfApplication } from "../types/ApplicationType";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardActions, CardContent, Grid } from "@mui/material";
import PfButton from "../PfButton";
import Link from "next/link";


export default function Applications(){
const { id } = useParams();
const [applications, setApplications] = useState<PfApplication[]>();
const [loading, setLoading] = useState(true);
useEffect(()=>
{if (id){
    fetch("http://localhost:8080/applications/event/" + id)
    .then((res) => res.json())
    .then((data) => {
        setApplications(data);
        setLoading(false);
    });
}
},[id])
//need to add body to below

function acceptApplication(application: PfApplication){
    fetch("http://localhost:8080/applications/accept/" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(application)
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
}
if (loading){
    return <div>Loading...</div>
}
return(
<Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
    <Grid item xs={9}>
        {(applications.length === 0 || applications===null || applications === undefined)&& <div>No applications yet</div>}
        {applications.length > 0 && applications !== undefined && applications!==null && applications.map((application) => (
            <Card key={application._id}>
                <CardContent>
                    <h2>IGN: <Link href={
                        "/user/" + application.user
                    }>{application.ign}</Link></h2>
                    <h3>Server: {application.server}</h3>
                    <h3>Discord: {application.username}</h3>
                </CardContent>
                <CardActions>
                    <PfButton text="accept" action={() => acceptApplication(application)} />
                </CardActions>
            </Card>
        ))}
    </Grid>
</Grid>
)
}
