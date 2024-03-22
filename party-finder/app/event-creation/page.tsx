import EventCheck from "../components/Events/EventCheck";
import PfHeader from "../components/Header";
import { UserProvider } from "../context/UserContext";
import EventCreationForm from "../components/Events/EventCreationForm";
export default function EventCreation() {
  return (
    <UserProvider>
      <PfHeader />
      <EventCreationForm/>
    </UserProvider>
  );
}