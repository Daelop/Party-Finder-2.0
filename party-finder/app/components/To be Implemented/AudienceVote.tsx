
import { useEffect,useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardActions, CardContent, Grid } from "@mui/material";
import { useForm } from "@tanstack/react-form";
export default function AudienceVote() {
const [participants, setParticipants] = useState([]);
const [loading, setLoading] = useState(true);
const {id} = useParams();
useEffect(()=>{if (id){
    fetch("http://localhost:8080/eventusers/event/" + id)
    .then((res) => res.json())
    .then((data) => {
        setParticipants(data);
        setLoading(false);
    });
}},[id])
const form = useForm({
    
})
if (loading){
    return <div>Loading...</div>
}
return(

)

}
