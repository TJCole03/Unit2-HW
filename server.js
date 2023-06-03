const express = require('express'); //"I require the modules from express"
const fs = require('fs'); //reading the file systems
const port = 4000;
const app = express();

app.use(express.json());

let frank = 'Never sneak up on a man whos been in a chemical fire';

app.get('/', (req, res) => { //callback function for the route
    res.send('<h1>Holla</h1>'); 
});

app.get('/greeting', (req, res) => { //another callback function for the root
    res.send(`${frank}`);
});

app.get('/greeting/easter_egg', (req, res) => { //another callback function where I added a second layer
    res.send('<h1>"I NEED TO GO TO MY QUIET PLACE!!"</h1>');
});

app.get('/greeting/:name', (req, res) => { 
    //parseInt(req.params.name)
    //res.send('Never sneak up on a man whos been in a chemical fire, ' + req.params.name)
    res.send(`${frank} , ` + req.params.name) //make into one or the other. 
});


                                       //req res
app.get('/tip/:total/:tippercentage', (req, res) => {
    let tip = (req.params.total * req.params.tippercentage) / 100
    res.send(`tip: ${tip}`)    //algebra II 
})


app.get('/magic/:input', (req, res) => {
    parseInt(req.params.magic)
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let response = Math.floor(Math.random() * responses.length) 
    const item = responses[response]
    res.send(`<h1>${item}</h1>`) 
    return item
})
    

//fibonacci 
// app.get('/fibonacci/:userinput', (req, res) = {
//     parseInt(req.params.num)
//     function checkFibonacci(num) {
//         let newSum = 0; 
//         let firstNum = 1; 
//         let secondNum = 2; 
//         while (num > newSum) {
//             newSum = firstNum + secondNum
//             if (newSum === num) { return true }
//             firstNum = secondNum 
//             secondNum = newSum
//         }
//         return false
//     }
//     let num;
//     if (checkFibonacci === true) {
//         console.log(`${num} is Lateralus`)
//     } else {
//         console.log('Vicarious')
//     }
// })


app.listen(4000, function () { //telling application to listen on port 4000. (or any port number)
    console.log(`Listening on ${port}`);
});

