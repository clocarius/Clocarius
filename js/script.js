// event pada saat lik di klik
/*
$('.page-scroll').on('click', function(e){

	//ambil isi href

	var tujuan = $(this).attr('tujuan');

	//tangkap elemen ybs

	var elemenTujuan = $(tujuan);

	// pindahkan scroll

	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000);

	e.preventDefault();
});
*/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});
