(function($){

	$.fn.skiSlider = function(options){

		// Defaults
		var settings = $.extend({
			slides: 1,
			complete: null,
		}, options);

		return this.each(function(){
			$(this).wrap('<div class="ski-slider-wrapper"></div>')

			// complete callback				
			if ($.isFunction(settings.complete)) {
				settings.complete.call(this)
			}
		});


	}

}(jQuery));