/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import fs from "fs/promises";

// fs.readFile("./files/text.txt", function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data[0]);
//     }
// });

// fs.readFile("./files/text.txt", function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data.toJSON());
//     }
// });

// fs.readFile("./files/text.txt", function (err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// fs.stat("./files/text.txt", function (err, stats) {
//     console.log(stats.isFile());
//     console.log(stats);
// });

// fs.writeFile("./files/text.txt", "data", function(err){
//     if(err)throw err;

//     fs.rename("./files/text.txt", "new.txt", function(err){
//         if(err) throw err;

//         fs.unlink("./files/new.txt", function(err){
//             if(err) throw err;
//         });
//     });
// fs.readFileSync("./files/text.txt"),
//     (err, data) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(data[0]);
//         }
//     };

////////////
let filehandle;
try {
    filehandle = await fs.readFile("./files/text.txt");
    console.log(filehandle);
} catch (err) {
    console.error(console.error(err));
}

// try {
//     await fs.unlink("./files/text.txt");
//     console.log("successfully deleted ./files/text.txt");
// } catch (error) {
//     console.error("there was an error:", error.message);
// }

try {
    filehandle = await fs.readFile("./files/text.txt");
    console.log(filehandle);
} finally {
    // await filehandle?.close();
}
try {
    filehandle = await fs.writeFile("./files/text.txt", "data");
    console.log(filehandle);
    filehandle = await fs.rename("./files/text.txt", "./files/new.txt");
    console.log(filehandle);
    filehandle = await fs.unlink("./files/new.txt");
    console.log(filehandle);
} catch (err) {
    console.error(console.error(err));
}
