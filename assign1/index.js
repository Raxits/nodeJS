import { users } from "./modules/users.js";
import { adultUsers } from "./modules/adult_users.js";
import * as fs from "fs";
import { commonName } from "./modules/common_name_users.js";
import { emailGreaterThan25 } from "./modules/emaillength.js";

let folderName="users/";
let fileName = "usersFilter.txt";

fs.promises.access(folderName, fs.constants.O_DIRECTORY)
    .then( async () => {
        await fs.promises.unlink(`${folderName}${fileName}`, (err) => {console.log('dfdfdf')});
    })
    .catch(async () => {
        await fs.promises.mkdir(folderName, (err) => {
            if (err)
                console.log(err);
        })
    })
    .finally(async () => {
        let adultUsersTable = adultUsers(users);
        await fs.promises.appendFile(`${folderName}${fileName}`, adultUsersTable, (err) => {
            if(err) console.log(err);
        })
        let commonNameTable = commonName(users);
        await fs.promises.appendFile(`${folderName}${fileName}`, commonNameTable, (err) => {
            if(err) console.log(err);
        })
        let usersEmail = emailGreaterThan25(users);
        await fs.promises.appendFile(`${folderName}${fileName}`, usersEmail, (err) => {
            if(err) console.log(err);
        })
    });
