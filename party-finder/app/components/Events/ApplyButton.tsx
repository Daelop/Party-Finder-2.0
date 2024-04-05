'use client'
import { useRouter } from "next/navigation";
import PfButton from "../PfButton";
import { useParams } from "next/navigation";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
export default function ApplyButton({creator}: {creator: string}) {
  const router = useRouter();
 const { id } = useParams();
 //checks if user is logged in and if the user is the creator of the event
 const [user, discordUser, loggedIn,loading] = useContext(UserContext);
 //Prevents the page from rendering before the user is loaded
 if (loading) {
    return <div>Loading...</div>;
  }
  if (loggedIn&&user) {
    console.log(user._id, creator)
    //if the user is the creator of the event, they can access the settings page
  if (creator === user._id) {
    return <PfButton text="Settings" action={() => router.push(`/events/${id}/settings/`)} />;
  }else if (loggedIn) {
    //if the user is not the creator of the event, they can apply
  return (
    <PfButton
      text="Apply"
      action={() => {
        router.push(`/events/${id}/apply/`);
      }}
    />
  );
  //if the user is not logged in, they cannot apply
  }}else{return <div>Log in to apply</div>;}}