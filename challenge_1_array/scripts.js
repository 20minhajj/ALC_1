var names = [];
var start = true;

console.log('1.add name \n 2.display the list \n 3. quit');
while (start) {

	var choice = prompt('Enter your choices: ');

	switch(choice){
		case '1':
			var name = prompt('enter name');
			names.push(name);
			break;
		
		case '2':
			for (var i=0; i < names.length; i++){
				console.log(names[i]);

			}
			break;

		case '3':
			start = false;
			break;

		

	}
}