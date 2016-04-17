// will hold people objects
var people = [];

var stupid = [{"woman": "Beyonce" , "quote": "Who runs the world? Girls.", "occupation":"Singer"},
              {"woman": "Roseanne Barr", "quote": "The thing women have yet to learn is nobody gives you power. You just take it.",  "occupation":"Comedian"},
              {"woman" : "Charlotte Whitton", "quote" : "Whatever women do they must do twice as well as men to be thought half as good. Luckily, this is not difficult.", "occupation":"Feminist"},
              {"woman" : "Mary Harris Jones", "quote" : "I am not a humanitarian, I am a hell-raiser.", "occupation" : "School teacher turned activist"},
              {"woman" : "Gloria Steinem" , "quote" : "A woman without a man is like a fish without a bicycle.", "occupation": "Journalist"},
              {"woman" : "Jane Goodall", "quote" : "My family has very strong women. My mother never laughed at my dream of Africa, even though everyone else did because we did not have any money, because Africa was the dark continent, and because I was a girl." ,"occupation": "Anthropologist"},
              {"woman" : "Gloria Allred", "quote" : "There are some people who still feel threatened by strong women. That is their problem. It is not mine.", "occupation" : "Civil Rights Lawyer"} ,
              {"woman" : "Simone de Beauvoir" , "quote": "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself.", "occupation": "Philosopher and political activist"} ,
              {"woman" : "Margaret Sanger" , "quote" : "No woman can call herself free who does not control her own body.", "occupation": "Activist"},
              {"woman" : "Bell Hooks" , "quote" : "If any female feels she needs anything beyond herself to legitimate and validate her existence, she is already giving away her power to be self-defining, her agency.", "occupation": "Author, feminist, and social activist"},
              {"woman" : "Louisa May Alcott" , "quote" : "The emerging woman will be strong-minded, strong-hearted, strong-souled, and strong-bodied…strength and beauty must go together.", "occupation" : "Novelist and poet"},
              {"woman" : "Marie Curie" , "quote" : "Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.","occupation" : "Physicist and chemist"},
              {"woman": "Milka Duno" , "quote": "When you put the helmet on, it doesn't matter if you are woman or man: your mission is to compete to win. The important thing is your ability, your intelligence and your determination.", "occupation":"Race Car Driver"},
              {"woman": "Sally Ride" , "quote": "If we want scientists and engineers in the future, we should be cultivating the girls as much as the boys","occupation":"Astronaut"},
              {"woman": "Chimamanda Ngozi Adichie" , "quote": "Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.","occupation":"Novelist"}];


console.log(stupid.length);
var rand = Math.floor(Math.random() * stupid.length);
console.log(rand);
window.onload = function(){
	document.getElementById("mywoman").innerHTML =  stupid[rand]['woman'];
	document.getElementById("myquote").innerHTML = stupid[rand]['quote'];
    document.getElementById("occupation").innerHTML = stupid[rand]['occupation'];
}

$(document).ready(function() {
    $("body").css("background-color", "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)");
});
