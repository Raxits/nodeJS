import { columnLength } from "../constants.js";
import { column } from "./column.js";

export let header = () => {
    let dash = '';
    let total = columnLength.SrNo + columnLength.Age 
              + columnLength.ContactNo + columnLength.Email
              + columnLength.Name;
    for(let i = 0; i< total; i++){
        dash += '-';
    }
    let line = dash + '\n';
    for (const key in columnLength) {
        line += column(key, columnLength[key])
    }
    line += '\n'+dash;
    return line;
}