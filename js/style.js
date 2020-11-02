function plusQuantity(){
	var qty = parseInt($('#quantity').val())+1;
	if(qty > 10){
		return;
	}
	$('#quantity').attr('value',qty);
}
function minusQuantity(){
	var qty = parseInt($('#quantity').val())-1;
	if(qty == 0){
		return;
	}
	$('#quantity').attr('value',qty);
}
function changeUrlImage(e){
	$('#image-detail').attr('src',e.src);
}
$('.delProInCart').click(function(){
	console.log($(this).attr('rel'));
	var idProCart = $(this).attr('rel');
	$("#"+idProCart).remove();
});
