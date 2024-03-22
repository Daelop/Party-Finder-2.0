'use client'
import { useRouter } from "next/navigation";
import PfButton from "../PfButton";
import { useParams } from "next/navigation";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
export default function ApplyButton({creator}: {creator: string}) {
  const router = useRouter();
 const { id } = useParams();
 const [user, discordUser, loggedIn,loading] = useContext(UserContext);
 if (loading) {
    return <div>Loading...</div>;
  }
  if (loggedIn&&user) {
    console.log(user._id, creator)
  if (creator === user._id) {
    return <PfButton text="Settings" action={() => router.push(`/events/${id}/settings/`)} />;
  }else if (loggedIn) {
  return (
    <PfButton
      text="Apply"
      action={() => {
        router.push(`/events/${id}/apply/`);
      }}
    />
  );
  }}else{return <div>Log in to apply</div>;}}