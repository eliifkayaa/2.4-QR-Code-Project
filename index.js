import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'node:fs';

inquirer
    .prompt([
        {
            message: "Link girin",
            name: "URL"
        }
    ])
    .then((answers) => {

        let url = answers.URL
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('url.png'));

        writeFile('url.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });