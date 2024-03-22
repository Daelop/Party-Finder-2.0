import SettingsForm from "@/app/components/Events/settings/SettingsForm";
import PfHeader from "@/app/components/Header";
import { UserProvider } from "@/app/context/UserContext";

export default function SettingsPage() {
  
  return (
    <UserProvider>
    <PfHeader/>
    <SettingsForm/>
    </UserProvider>
  );
}