var randomNumber = Math.round(Math.random() * 10);
var count = 8;
//var choice =prompt("Select 1 to play a game 2 to exit");
while (count!=0) {
	var UserNum = parseInt(prompt('Hi lets play a game enter a number between 0 and 10'));
	if(UserNum < randomNumber){
		alert("The number you guesd is low!, try again ");
		count-=1;
				
		}else if (UserNum>randomNumber){
				alert("The number you guesed is high!, try again ");
				count-=1;
				
			}
			else if(UserNum === randomNumber){
				alert("Congrats! you guessed right.");
				count = 0;
			
			}	
            
			


}