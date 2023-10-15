import App from "./App.tsx";
import { FormEvent, useEffect, useState } from "react";
import { remult } from "remult";
// import Register from "Register.tsx";

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
            <main>
                <div className="containerform">
                    <div className="row justify-content-center bf-form">
                        <h1 className="topic-sign text-center mb-4"><b>Sign in</b></h1>
                        
                        <div className="col-md-6 loginForm">
                  

                            <form onSubmit={(e) => doSignIn(e)}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label"><b>Username</b></label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Input username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Input password"
                                    />
                                </div> 
                                <button type="submit" className="btn btn-success btn-block ">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
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