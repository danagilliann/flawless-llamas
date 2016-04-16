// will hold people objects
var people = [];

var stupid = [{"woman": "Beyonce" , "quote": "Who runs the world? Girls."},
                {"woman": "Ginger Rogers" , "quote": "There is nothing a man can do, that I can not do better and in heels."},
                {"woman": "Roseanne Barr", "quote": "The thing women have yet to learn is nobody gives you power. You just take it."},
                {"woman" : "Charlotte Whitton", "quote" : "Whatever women do they must do twice as well as men to be thought half as good. Luckily, this is not difficult."}, 
                {"woman" : "Mary Harris Jones", "quote" : "I am not a humanitarian, I am a hell-raiser."}, 
                {"woman" : "Gloria Steinem" , "quote" : "A woman without a man is like a fish without a bicycle."}, 
                {"woman" : "Jane Goodall", "quote" : "My family has very strong women. My mother never laughed at my dream of Africa, even though everyone else did because we did not have any money, because Africa was the &rsquodark continent&rsquo, and because I was a girl." } ,
                {"woman" : "Gloria Allred", "quote" : "There are some people who still feel threatened by strong women. That is their problem. It is not mine."} ,
                {"woman" : "Simone de Beauvoir" , "quote": "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself."} ,
                {"woman" : "Margaret Sanger" , "quote" : "No woman can call herself free who does not control her own body."}, 
                {"woman" : "Bell Hooks" , "quote" : "If any female feels she needs anything beyond herself to legitimate and validate her existence, she is already giving away her power to be self-defining, her agency."}, 
                {"woman" : "Dolly Parton" , "quote" : "I am not going to limit myself just because people won&rsquot accept the fact that I can do something else."}, 
                {"woman" : "Louisa May Alcott" , "quote" : "The emerging woman will be strong-minded, strong-hearted, strong-souled, and strong-bodied…strength and beauty must go together."} ,
                {"woman" : "Junie B Jones" , "quote" : "Girls can be anything guys can be!"} ,
                {"woman" : "Margaret Thatcher" , "quote" : "If you want something said, ask a man; if you want something done, ask a woman."}]


console.log(stupid.length);
var rand = Math.floor(Math.random() * stupid.length);
console.log(rand); 
window.onload = function(){
	document.getElementById("mywoman").innerHTML = stupid[rand]['woman'];
	document.getElementById("myquote").innerHTML = stupid[rand]['quote'];
}
