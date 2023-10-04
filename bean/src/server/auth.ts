import express, { Router } from "express";
import { UserInfo } from "remult";

const validUsers : UserInfo[] = [
    {id: "1", name:"doctor", roles:["admin"]},
    {id: "2", name:"Jason"}
];

export const auth = Router();
auth.use(express.json());

auth.post("/api/signIn",(req,res)=>{
    const user = validUsers.find(user=>user.name===req.body.username)
    if(user){
        req.session!["user"] = user;
        res.json(user);
    }else{
        res.status(404).json("Invalid user")
    }
});

auth.post("/api/signOut", (req,res) =>{
    req.session!["user"]=null;
    res.json("ok")
});

auth.get("/api/currentUser",(req,res)=>{
    res.json(req.session!["user"]);
})
