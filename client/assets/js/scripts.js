function readImage(input) {
    if ( input.files && input.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
             $('#imgValue').val(e.target.result );
        };       
        FR.readAsDataURL( input.files[0] );
    }
};

$(document).ready(function(){
	$("#imageBase").change(function(){
	    readImage( this );
	});  
});