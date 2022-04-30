import { column } from "./column.js";
import { columnLength } from "../constants.js";
import { header } from "./header.js";
export let adultUsers = (users) => {
    let line = "Users who have 18+ age\n";
    line += header();
    users = users.filter(user => user.age>=18)
    users.map( (user, index) => {
        line += '\n';
        line += column(index + 1, columnLength.SrNo)
        line += column(user.name, columnLength.Name)
        line += column(user.age, columnLength.Age)
        line += column(user.email, columnLength.Email)
        line += column(user.contact_no, columnLength.ContactNo)
    })

    line+= `\n\nNumber of above 18 users : ${users.length}\n\n\n\n`;
    return line;
}