const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const path = require('path')
const figlet = require('figlet')

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname
    // pathname is the path section of the URL, that comes after the host and before the query, including the initial slash if present.
    const params = querystring.parse(url.parse(req.url).query);

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
        case '/otherotherpage':
            readWrite('otherotherpage.html', 'text/html')
            break;
        case '/api':
            // let personName = 'unknown'
            // let personOccupation = 'unknown'
            // let personStatus = 'unknown'
            // if (params['student'] == 'leon') {
            //     personName = 'leon'
            //     personOccupation = 'Boss Man'
            //     personStatus = 'Baller'
            // }
            // res.writeHead(200, {'Content-Type': 'application/json'});
            // const objToJson = {
            //     name: personName,
            //     status: personStatus,
            //     currentOccupation: personOccupation
            //   }
            //   res.end(JSON.stringify(objToJson));

            // FLIP COIN
            let flipCoin = "flip!"
            if (params['student'] == 'flip') {
                flipCoin = Math.random() <= .5 ? "head" : "tail"
            }
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
                name: flipCoin
            }
            res.end(JSON.stringify(objToJson));
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function(err, data) {
                res.write(data);
                res.end();
            })
            break;
        case '/js/main.js':
            readWrite('js/main.js', 'text/javascript')
            break;
        default:
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
})

const PORT = 8000 || process.env.PORT
server.listen(PORT)

// url.parse('http://stackoverflow.com/questions/17184791').pathname    
// will give you:
// "/questions/17184791"

