var num1 = parseInt(prompt('Enter number:'));
var num2 =parseInt(prompt('Enter number:'));
var oparation = prompt('select operation \n a for +,s for -, m for *,d for / \n ');
//alert("operation choosen is "+operation);
switch(oparation){
		case 'a':
			var result=num1+num2;
			alert("the ansewer of "+num1+" + "+num2+" = "+result+"\n");
			break;
		
		case 's':
			
			var result=num1-num2;
			alert("the ansewer of "+num1+" - "+num2+" = "+result+"\n");
			break;

		case 'm':
			var result=num1*num2;
			alert("the ansewer of "+num1+" *"+num2+" = "+result+"\n");
			break;

		case 'd':
			var result=num1/num2;
			alert("the ansewer of "+num1+" / "+num2+" = "+result+"\n");
			break;
		default:
		alert('Enter valid operation.')
			break;	
		

	}