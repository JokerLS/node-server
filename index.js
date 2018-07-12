var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req,res) {
    var pathObj = url.parse(req.url, true)
    console.log(pathObj)

    switch(pathObj.pathname) {
        case '/getWeather':
            var ret            
            if(pathObj.query.city == 'guangzhou') {
                ret = {
                    city: 'guangzhou',
                    weather: 'Sunny'
                }
            }else {
                ret = {
                    city: pathObj.query.city,
                    weather: 'unknow'
                }
            }
            res.setHeader('Access-Control-Allow-Origin','*')
            res.end(JSON.stringify(ret))
            break;
        case '/user/Lan':
            res.end(fs.readFileSync(__dirname + '/sample/test.html'))
            break;
        default:
            res.end(fs.readFileSync(__dirname + '/sample' + pathObj.pathname))
    }
}).listen(8060)
