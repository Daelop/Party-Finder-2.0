import Link from "next/link";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PfEvent } from "../types/EventType";
import { useParams } from "next/navigation";


export default function Posts({PfEvent}: {PfEvent: PfEvent}) {
const {id} = useParams();
const [posts, setPosts] = useState([]);
useEffect(() => {
    fetch("http://localhost:8080/posts"+id).then((res) => res.json()).then((data) => {
        setPosts(data);
    });
}, [id]);

if (posts.length > 0) {
    return (
        <Grid container>
            {posts.map((post: { name: string; sub: string|null; img:string|null|undefined; body:string|null|undefined}) => (
                <Grid item key={post.name}>
                    <Grid container>
                    <Grid item>
                        <h2>{post.name}</h2>
                    </Grid>
                    <Grid item> 
                    {post.img && (
                        <Image src={post.img} alt={post.name} width={200} height={200} />)}
                    </Grid>
                    <Grid item>
                        {post.sub &&(post.sub)}
                    </Grid>
                    <Grid item>
                        <p>{post.body&&(post.body)}</p>
                    </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )} else {
        return <div>No posts yet</div>
    }
}