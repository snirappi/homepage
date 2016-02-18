function startDate(){
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var endings = ["st", "nd", "rd", "th"];
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var dw = today.getDay();
	
	//Attach appropriate ending to Day
	switch(dd){
	case 1:
		dd = dd + endings[0];
		break;
	case 21:
		dd = dd + endings[0];
		break;
	case 31:
		dd = dd + endings[0];
		break;
	case 2:
		dd = dd + endings[1];
		break;
	case 22:
		dd = dd + endings[1];
		break;
	case 3:
		dd = dd + endings[2];
		break;
	case 23:
		dd = dd + endings[2];
		break;
	default:
		dd = dd + endings[3];
		break;
	}

	today = days[dw] + ', ' + months[mm] + ' ' + dd;
	document.getElementById("date").innerHTML = today;
}
