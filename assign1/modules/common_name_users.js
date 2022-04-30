import { columnLength } from "../constants.js";
import { column } from "./column.js";
import { header } from "./header.js";
let final = {};
let keys = [];
let values = [];

export let commonName = (users) => {
    users.forEach(element => {
        if(!keys.includes(element.name)){
            let temp =users.filter(ele => element.name === ele.name);
            keys.push(element.name);
            values.push({name: element.name, length: temp.length})
            if(final[temp.length]){
                final[temp.length].push(...temp);
            }
            else{
                final[temp.length] = temp;
            }
        }
    });
    values.sort((a,b) => a.length > b.length ? -1 : 1);
    
    values = values.filter(ele => ele.length > 1);

    let line = "\nCommon User Name are ";
    values.forEach(value => {
        line+= `${value.name}  = ${value.length},`;
    })
    line += '\n' + header();
    let index = 1;
    values.map( (uservalue) => {
            
            let temp = users.filter((user) => user.name === uservalue.name)
            temp.forEach( (user) =>{
            
                line += '\n';
                line += column(index, columnLength.SrNo)
                line += column(user.name, columnLength.Name)
                line += column(user.age, columnLength.Age)
                line += column(user.email, columnLength.Email)
                line += column(user.contact_no, columnLength.ContactNo)
                index++;
            })    
        })
        
    line+= `\n\nCommon name users : ${index - 1}\n\n\n\n`;
    return line;
}