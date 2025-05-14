declare const combinedAges: any;
declare const combinedStringAges: any;
declare const combinedNames: any;
type Admin = {
    name: string;
    privileges: string[];
};
type Employee = {
    name: string;
    startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
declare const e1: ElevatedEmployee;
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
