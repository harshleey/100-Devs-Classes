const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const path = require('path')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname
    // pathname is the path section of the URL, that comes after the host and before the query, including the initial slash if present.
    const params = querystring.parse(page.query)

    const readWrite = (file, contentType) => {
        fs.readFile(file, function(err, data) {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
    })
}

    switch (page) {
        case '/':
            readWrite('index.html', 'text/html')
            break;
        case '/otherpage':
            readWrite('otherpage.html', 'text/html')
            break;
        case './otherotherpage':
            readWrite('otherotherpage.html', 'text/html')
            break;
        case './api':
            let personName = 'unknown'
            let personOccupation = 'unknown'
            let personStatus = 'unknown'
            if (params['student'] == 'leon') {
                personName = 'Leon'
                personOccupation = 'Boss Man'
                personStatus = 'Baller'
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
                name: personName,
                status: personStatus,
                currentOccupation: personOccupation
              }
              res.end(JSON.stringify(objToJson));
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function(err, data) {
                res.write(data);
                res.end();
            })
            break;
        case '404!!':
            figlet('404!!', function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                res.write(data);
                res.end();
              });
              break;
    }
    
   
    //     fs.readFile(filePath, (err, content) => {
    //         if (err) {
    //             if (err.code === 'ENOENT') { //If page isn't found
    //             // page not found
    //             fs.readFile('404.html', 
    //             (err, content) => {
    //                 res.writeHead(200, {'Content-Type': 'text/html'});
    //                 res.end(content, 'utf8')
    //             })
    //         } else {
    //             // Some server error
    //             res.writeHead(500);
    //             res.end(`Server Error: ${err.code}`)
    //         } 
    //     } else {
    //         // Success
    //         res.writeHead(200, {'Content-Type': contentType })
    //         res.end(content, 'utf8')
    //     }
    // })


})

const PORT = 8000 || process.env.PORT
server.listen(PORT)

// url.parse('http://stackoverflow.com/questions/17184791').pathname    
// will give you:
// "/questions/17184791"
  
    //student if
  // }//else if
  // }else{
  //   figlet('404!!', function(err, data) {
  //     if (err) {
  //         console.log('Something went wrong...');
  //         console.dir(err);
  //         return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
  // }
// });

