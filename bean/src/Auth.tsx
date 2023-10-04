import App from "./App.tsx";
import { FormEvent, useEffect, useState } from "react";
import { remult } from "remult";

export default function Auth(){
    const[username, setUsername] = useState("");
    const[signIn, setSignedIn] = useState(false);
    useEffect(() =>{
        fetch("/api/currentUser").then(async result=>{
            remult.user = await result.json()
            if (remult.user){
               setSignedIn(true) 
            }
        })
    },[])
    if(!signIn){
        async function doSignIn(e:FormEvent<HTMLFormElement>){
            e.preventDefault();
            const result = await fetch("/api/signIn",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username})
            })
            if (result.ok){
                remult.user = await result.json();
                setSignedIn(true)
                setUsername("")
            } else {
                alert(await result.json());
            }
        }

     
        return <>
        <h1>Sign in</h1>
        <main>
            <form className="form-control" onSubmit={(e) => doSignIn(e)}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Input username"/>
                <button>Sign In</button>           
            </form>
        </main>
        </>
    }
    async function signOut(){
        await fetch("/api/signOut",{ method:"POST" });
        setSignedIn(false);
        remult.user = undefined;
    }

    return <>
    <App/>
    Hello {remult.user!.name} 
    <button className="btn btn-danger" onClick={() => signOut()}>Sign out</button>
    </> ;
}