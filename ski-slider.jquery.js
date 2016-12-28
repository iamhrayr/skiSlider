(function($){

	$.fn.skiSlider = function(options){

		// Defaults
		var defaults = $.extend({
			// autoplay: false,
			// autoplayDelay: 3000,
			// dots: false,
			slides: 1,
			complete: null,
		}, options);

		this.slides = null;
		

		return this.each(function(){
			$(this).wrap('<div class="ski-slider-wrapper"></div>')

			// complete callback				
			if ($.isFunction(defaults.complete)) {
				defaults.complete.call(this)
			}
		});


	}

}(jQuery));