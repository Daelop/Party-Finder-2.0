import { useCookies } from "react-cookie";

export default function useLogout() {
  const [cookies, removeCookie] = useCookies(["token"]);

  return () => {
    removeCookie("token", { path: "/" });
  };
}