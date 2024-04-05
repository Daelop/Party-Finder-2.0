'use client'
//Stores the user and discord user information
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
    //if the token cookie is present, fetch the discord user information
    if (cookies.token) {
      fetch("http://localhost:8080/auth/discord/user", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            //set the discord user information
            setDiscordUser(data);
            //uses the discord user id to fetch the user id or create new user
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
                    //fetches the user information using the id
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
              //if the token is not present, set loading to false and logged in to false
              setLoading(false);
              setLoggedIn(false);
            }
          };
        });
    } else {
      setLoading(false);
    }
  }, [loggedIn, cookies.token]);
  //if the page is still loading, return null
  if (loading) {
    return null;
  }
  // console.log("UserProvider: ", user, discordUser, loggedIn, loading);
  //returns the user context
  return <UserContext.Provider value={[user, discordUser, loggedIn,loading]}>{children}</UserContext.Provider>;
}