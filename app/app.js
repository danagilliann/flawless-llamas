// will hold people objects
var people = [];

var stupid = [{"woman": "Beyonce" , "quote": "Who runs the world? Girls."},
                {"woman": "Ginger Rogers" , "quote": "There is nothing a man can do, that I can not do better and in heels."},
                {"woman": "Roseanne Barr", "quote": "The thing women have yet to learn is nobody gives you power. You just take it."},
                {"woman" : "Charlotte Whitton", "quote" : "Whatever women do they must do twice as well as men to be thought half as good. Luckily, this is not difficult."}];


var rand = Math.floor(Math.random() * stupid.length);
console.log(rand); 
window.onload = function(){
	document.getElementById("mywoman").innerHTML = stupid[rand]['woman'];
	document.getElementById("myquote").innerHTML = stupid[rand]['quote'];
}
