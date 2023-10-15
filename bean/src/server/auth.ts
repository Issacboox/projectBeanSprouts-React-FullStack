// import { Users } from "@/shared/user";
// import express, { Router } from "express";
// import { remult } from "remult";

// const userRepo = remult.repo(Users);

// export const auth = Router();
// auth.use(express.json());

// auth.post("/api/signIn", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await userRepo.findFirst({
//     where: (user) => user.username.isEqualTo(username),
//   });

//   if (user && user.password === password) {
//     // If the provided password matches the stored password, store user information in the session
//     req.session!["user"] = user;
//     return res.json(user);
//   }

//   // If no matching user or invalid password, respond with an error
//   res.status(404).json("Invalid username or password");
// });
import express, { Router } from "express";
import { UserInfo } from "remult";

interface CustomUserInfo extends UserInfo {
    password: string;
}

const validUsers: CustomUserInfo[] = [
    { id: "1", name: "doctor", roles: ["admin"], password: "1122" },
    { id: "2", name: "Jason", roles: [], password: "2234" }
];

export const auth = Router();
auth.use(express.json());

auth.post("/api/signIn", (req, res) => {
    const { username, password } = req.body; // Get both username and password from the request body
    const user = validUsers.find((user) => user.name === username && user.password === password); // Check both username and password

    if (user) {
        req.session!["user"] = user;
        res.json(user);
    } else {
        res.status(404).json("Invalid username or password");
    }
});

auth.post("/api/signOut", (req,res) =>{
    req.session!["user"]=null;
    res.json("ok")
});

auth.get("/api/currentUser",(req,res)=>{
    res.json(req.session!["user"]);
})