import Link from "next/link";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PfEvent } from "../types/EventType";



export default function SocialLinks({PfEvent}: {PfEvent: PfEvent}) {
const [links, setLinks] = useState([]);
if (PfEvent.socials.length > 0) {
    setLinks(PfEvent.socials);
} else {
    return null;
};


return (
    <Grid container>
        {links.map((link: { name: string; url: string; icon: string }) => (
            <Grid item key={link.name}>
                <Link href={link.url} passHref>
                    
                        {/* <Image src={link.icon} alt={link.name} width={50} height={50} /> */}
                        {link.name}
                </Link>
            </Grid>
        ))}
    </Grid>
)


}

