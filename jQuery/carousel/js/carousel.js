(function($){
	$.fn.carouselShow = function(opt) {
		var defaults = {
			'autoPlay': true,
			'time': 2000,
			'eventType': 'click',
			'imgName': 'img',
			'imgSize': 3
		}

		$.extend(defaults, opt);

		return this.each(function() {
			const me = $(this);
			const carouselWidth = me.width();

			let oCarouselInner = $('<div class="carousel-inner"></div>');
			let oCarouselDot = $('<div class="carousel-dot"></div>');
			let oCarouselBtn = $('<div class="carousel-btn-left">&lt;</div><div class="carousel-btn-right">&gt;</div>');
			oCarouselInner.width(carouselWidth * defaults.imgSize);

			for(let  i = 1; i <= defaults.imgSize; i++) {
				let oDiv = $('<div class="carousel-inner-img"><img src="img/' + defaults.imgName + i + '.jpg" /></div>');
				let oLi = i == 1 ? $('<li class="carousel-dot-item active"></li>') : $('<li class="carousel-dot-item"></li>');
				oLi.text(i);
				oCarouselInner.append(oDiv);
				oCarouselDot.append(oLi);
			}
			me.append(oCarouselInner, oCarouselDot, oCarouselBtn);

			let num = 0;
			let timer = null;
			if(defaults.autoPlay) {
				timer = setInterval(moveLeft, defaults.time);
				//鼠标移入移出
				me.hover(function(event) {
					clearInterval(timer);
				}, function() {
					timer = setInterval(moveLeft, defaults.time);
				});
			}

			function move(num) {
				let left = - carouselWidth * num + 'px';
				oCarouselInner.animate({'left': left});
				oCarouselDot.find('li').eq(num).addClass('active').siblings().removeClass('active');
			}

			function moveLeft() {
				num++;
				if(num >= defaults.imgSize) {
					num = 0;
				}
				move(num);
			}

			function moveRight() {
				num--;
				if(num < 0) {
					num = defaults.imgSize - 1;
				}
				move(num);
			}

			//点击原点切换
			me.find('.carousel-dot li').on(defaults.eventType, function() {
				num = $(this).index();
				move(num);
			});

			//点击向左箭头
			me.find('.carousel-btn-left').on('click', function(event) {
				event.preventDefault();
				moveLeft();
			});

			//点击向右箭头
			me.find('.carousel-btn-right').on('click', function(event) {
				moveRight();
			});
		});
	}
})(jQuery);
