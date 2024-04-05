import { useRouter } from "next/navigation";
//depricated component
export default function NotLoggedIn() {
const router = useRouter();
router.push("/")
}