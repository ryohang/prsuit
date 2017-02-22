$(document).ready(function() { 
	$("#image-gallery").lightSlider({
        item:1,
        slideMargin:0,
        loop:true,
		auto:true,
		speed:1600,
		pause:3000,
	}); 
});
// $(document).ready(function() {
//     var autoplaySlider = $('#autoplay').lightSlider({
//         auto:true,
//         loop:true,
//         pauseOnHover: true,
//         onBeforeSlide: function (el) {
//             $('#current').text(el.getCurrentSlideCount());
//         }
//     });
//     $('#total').text(autoplaySlider.getTotalSlideCount());
// });