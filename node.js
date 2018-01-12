var http = require("http");

http.createServer(function(req,res){
   res.writeHead(200,{"Content-type":"text/blain"});
   res.write("Hello NodeJs");
   res.end();
}).listen(8888);
console.log('环境搭建成功')