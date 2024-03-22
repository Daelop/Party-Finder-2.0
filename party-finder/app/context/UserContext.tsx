'use client'
import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const UserContext = createContext([{ DiscordUser: null }, { User: null }] as any);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies] = useCookies(["token"]);
  const [user, setUser] = useState(null);
  const [discordUser, setDiscordUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (cookies.token) {
      fetch("http://localhost:8080/auth/discord/user", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setDiscordUser(data);
            if (data.id) {
              fetch("http://localhost:8080/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: data.id, username: data.username }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.error) {
                    console.log(data.error);
                  } else {
                   fetch("http://localhost:8080/users/" + data._id, { credentials: "include" })
                   .then((res) => res.json())
                   .then((data) => {
                      if (data.error) {
                        console.log(data.error);
                      } else {
                        setUser(data);
                        setLoggedIn(true);
                      }
                      setLoading(false)
                   });
                  }
                })
            }else{
              setLoading(false);
              setLoggedIn(false);
            }
          };
        });
    } else {
      setLoading(false);
    }
  }, [loggedIn, cookies.token]);
  if (loading) {
    return null;
  }
  console.log("UserProvider: ", user, discordUser, loggedIn, loading);
  return <UserContext.Provider value={[user, discordUser, loggedIn,loading]}>{children}</UserContext.Provider>;
}