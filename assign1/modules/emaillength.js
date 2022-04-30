import { columnLength } from "../constants.js";
import { column } from "./column.js";
import { header } from "./header.js";

export let emailGreaterThan25 = (users) => {
    let emailUsers = users.filter(user => user.email.length > 25);
    let line = "\nEmail Length is greater than 25\n";
    line += header();
    emailUsers.map( (user, index) => {
            line += '\n';
            line += column(index + 1, columnLength.SrNo)
            line += column(user.name, columnLength.Name)
            line += column(user.age, columnLength.Age)
            line += column(user.email, columnLength.Email)
            line += column(user.contact_no, columnLength.ContactNo)
        })
        
    line+= `\n\nEmail Address greater than 25 characters : ${emailUsers.length}\n\n\n\n`;
    return line;
}