 

var makeGrid = function(){
   
    $('tr').remove();
 
   var pixelCanvas = document.getElementById("pixelCanvas");
   var rows = document.getElementById('inputHeight').value;
   var cells = document.getElementById('inputWeight').value;

 for( var x = 1;  x <= rows; x ++){
	  var tr = document.createElement("tr");
	   pixelCanvas.appendChild(tr);
 
   for( var z = 1; z <= cells; z++){
     	var td = document.createElement("td");
     	tr.appendChild(td);
     	console.log(td);
     	 
      
      }
 		   
    }  

 }


 var btn = document.querySelector('#submit');

btn.addEventListener('click', () => {

     event.preventDefault();
     makeGrid();

});
 
$("#pixelCanvas").on("mouseover" , "td", function(){
  
  var colorPicker = $("#colorPicker").val();
 
 
  $( this ).css("background-color",colorPicker );

});




 


