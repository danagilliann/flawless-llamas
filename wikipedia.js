

$.get( "wikipedia url", function( data ) {
  	console.log(data);
	var div = document.createElement("div");
	div.innerHTML = data;


});