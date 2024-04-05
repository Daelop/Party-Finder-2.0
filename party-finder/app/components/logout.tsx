import { useCookies } from "react-cookie";
//Logs the user out by removing the token cookie
export default function useLogout() {
  const [cookies, removeCookie] = useCookies(["token"]);

  return () => {
    removeCookie("token", { path: "/" });
  };
}