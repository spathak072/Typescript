type AppUser ={
    name:string;
    age:number;
    permissions:{
        id:string;
        title:string;
        description: String;
    }[];
}

type permissions = AppUser["permissions"];

const userPermissions: permissions = [
    {
        id: "1",
        title: "Admin",
        description: "Has full access to the system"
    }
]

type UserPermissions = AppUser["permissions"];
type perms = UserPermissions[number];
const userPerm: perms = {
    id: "1",
    title: "Admin",
    description: "Has full access to the system"    
}