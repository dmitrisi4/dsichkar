$(function(){
	$('.btn-seminars').on('click', function(e){
		e.preventDefault();

		$(this).next('.seminars-modal').fadeToggle();
	})
})