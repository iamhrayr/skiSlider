(function($){

	$.fn.skiSlider = function(options){

		// Defaults
		var defaults = $.extend({
			// autoplay: false,
			// autoplayDelay: 3000,
			// dots: false,
			slides: 1,
			complete: null,
			arrows: true,
		}, options);


		this.slides = null;
		this.viewportWidth = $(this).width();
		this.itemsCount = $(this).length;
		this.itemWidth = this.viewportWidth / defaults.slides;
		this.itemsFullWidth = this.itemWidth * this.itemsCount;
		

		return this.each(function(){
			$(this)
				.wrapInner('<div class="ski-slider-items"></div>')
				.addClass('ski-slider-viewport')
				.find('.ski-slider-items').width(this.itemsFullWidth);



			if (defaults.arrows) {
				$(this)
					.append('<div class="ski-arrows"></div>')
					.find('.ski-arrows')
					.append('<button class="ski-prev">Prev</button>')
					.append('<button class="ski-next">Next</button>')
			}




			// complete callback				
			if ($.isFunction(defaults.complete)) {
				defaults.complete.call(this)
			}
		});


	}

}(jQuery));