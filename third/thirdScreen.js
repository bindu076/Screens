

var dataObject = [
	{name:"john",last:"Mark",Id:"1"},	
	{name:"ron",last:"Mark",Id:"2"},	
	{name:"kithy",last:"Mark",Id:"3"},	
	{name:"kittu",last:"Mark",Id:"4"},	
	{name:"tom",last:"Mark",Id:"5"}
]

function dataDisplay(){
	document.getElementById("addTable").innerHTML = "";
	for(var i = 0;i < 5 ; i++){
	document.getElementsByTagName("a")[i].setAttribute("class","")
	}
	
	event.target.setAttribute('class','active');
	var body = document.getElementById("addTable");
	var tbl = document.createElement("table");
	var tblhead = document.createElement("thead");
	var tblBody = document.createElement("tbody");
	 for(var i = 0;i < dataObject.length ; i++){
		var row = document.createElement("tr");
		for (var j = 0; j < 7; j++) {
		  var cell = document.createElement("td");
		  if(j == 0){
			  var cellText = document.createTextNode(dataObject[i].name);
			  cell.setAttribute("class","tableName");
		  }
		  else if(j == 1){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else if(j == 2){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else if(j == 3){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else if(j == 4){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else if(j == 5){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else if(j == 6){
			  var cellText = document.createTextNode(dataObject[i].last); 
			  cell.setAttribute("class","tableLast");
		  }
		  else{
			  var cellText = document.createTextNode(dataObject[i].Id); 
			  cell.setAttribute("class","tableId");
		  }
		  
		  
		  
		  cell.appendChild(cellText);
		  row.appendChild(cell);
		}
		tblBody.appendChild(row);
	  }
	
	tbl.appendChild(tblBody);
	body.appendChild(tbl);
	tbl.setAttribute("class", "table table-bordered");
	
	 } 
	 