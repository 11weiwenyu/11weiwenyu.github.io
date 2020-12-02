	jQuery(document).ready(function($){
		var slidesWrapper = $('.cd-hero-slider');
	

		//check if a .cd-hero-slider exists in the DOM 
		if ( slidesWrapper.length > 0 ) {
				var sliderNav = $('.cd-slider-nav'),
				navigationMarker = $('.cd-marker'),
				slidesNumber = slidesWrapper.children('section').length,
				visibleSlidePosition = 0;
			//change visible slide
			sliderNav.on('click', 'li', function(event){
				event.preventDefault();
				var selectedItem = $(this);
				if(!selectedItem.hasClass('selected')) {
					// if it's not already selected
					var selectedPosition = selectedItem.index(),
						activePosition = slidesWrapper.find('li.selected').index();
					
					if( activePosition < selectedPosition) {
						nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
					} else {
						prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, selectedPosition);
					}

		function nextSlide(visibleSlide, container, pagination, n){
			visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				visibleSlide.removeClass('is-moving');
			});
	

			container.children('section').eq(n).addClass('selected from-right').prevAll().addClass('move-left');
			checkVideo(visibleSlide, container, n);
		}
	

		function prevSlide(visibleSlide, container, pagination, n){
			visibleSlide.removeClass('selected from-left from-right').addClass('is-moving').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				visibleSlide.removeClass('is-moving');
			});
	

			container.children('li').eq(n).addClass('selected from-left').removeClass('move-left').nextAll().removeClass('move-left');
			checkVideo(visibleSlide, container, n);
		}
	

		function updateSliderNavigation(pagination, n) {
			var navigationDot = pagination.find('.selected');
			navigationDot.removeClass('selected');
			pagination.find('li').eq(n).addClass('selected');
		}
	

