const port = 8989;
http= require("http");
httpStatus=require("http-status-codes");
app=http.createServer((request,response) => {
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let currentdate=new Date();
    let datetime = "The Current date is : " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds() + 
                " Would You like to play a game of chess??";
    let responseMessage="<h1>"+datetime+"</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`We sent the following to a goober: ${responseMessage}`);
});
app.listen(port);
console.log(`Our magic time clock is listening on port number: ${port}`);