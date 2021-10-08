import fs from "fs";

fs.readFile("./files/text.txt", function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data[0]);
    }
});

fs.readFile("./files/text.txt", function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toJSON());
    }
});

fs.readFile("./files/text.txt", function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

fs.stat("./files/text.txt", function (err, stats) {
    console.log(stats.isFile());
    console.log(stats);
});

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
