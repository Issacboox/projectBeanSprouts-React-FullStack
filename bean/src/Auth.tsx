import App from "./App.tsx";
import { FormEvent, useEffect, useState } from "react";
import { remult } from "remult";

export default function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signIn, setSignedIn] = useState(false);
    useEffect(() => {
        fetch("/api/currentUser")
            .then(async (result) => {
                if (!result.ok) {
                    throw new Error("Network response was not ok");
                }
                const responseText = await result.text();
                if (responseText) {
                    try {
                        remult.user = JSON.parse(responseText);
                        setSignedIn(true);
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                    }
                } else {
                    console.error("Empty response from /api/currentUser");
                }
            })
            .catch((error) => {
                console.error("Error fetching /api/currentUser:", error);
            });
    }, []);
    
    
    if (!signIn) {
        async function doSignIn(e: FormEvent<HTMLFormElement>) {
            e.preventDefault();
            const result = await fetch("/api/signIn", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password }) // Send both username and password
            })
            // Inside your doSignIn function
            if (result.ok) {
                const responseText = await result.text();
                if (responseText) {
                    remult.user = JSON.parse(responseText);
                    setSignedIn(true);
                    setUsername("");
                    setPassword("");
                } else {
                    alert("Empty response from the server");
                }
            } else {
                alert("Failed to sign in");
            }

        }
        return <>
            <h1>Sign in</h1>
              <main>
                <form className="form-control" onSubmit={(e) => doSignIn(e)}>
                <label className="form-label">Username</label>
                  <input
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Input username"
                  />
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Input password"
                  />
                  <button>Sign In</button>
                </form>
              </main>
        </>
    }
    async function signOut() {
        await fetch("/api/signOut", { method: "POST" });
        setSignedIn(false);
        remult.user = undefined;
    }

    return <>
        <App />
        Hello {remult.user!.name}
        <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
    </>;
}