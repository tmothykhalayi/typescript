interface User {
    name: string;
    age: number;
}
declare const User: Readonly<User>;
type RolePermissions = Record<string, boolean>;
declare const permissions: RolePermissions;
interface User {
    name: string;
    age: number;
    address: string;
}
type UserName = Pick<User, "name">;
interface User {
    name: string;
    age: number;
    address: string;
}
type UserWithoutAddress = Omit<User, "address">;
