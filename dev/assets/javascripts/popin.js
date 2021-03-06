(function($) {
	"use strict";
	var $, Animation, Carousel, Timer;

	$ = jQuery;

	Timer = (function() {
		function Timer() {}

		Timer.every = function(duration, callback) {
			return setInterval(callback, duration);
		};

		Timer.after = function(duration, callback) {
			return setTimeout(callback, duration);
		};

		Timer.clear = function(interval) {
			return clearInterval(interval);
		};

		return Timer;

	})();

	Animation = (function() {
		function Animation() {}

		Animation.transitions = {
			"webkitTransition": "webkitTransitionEnd",
			"mozTransition": "mozTransitionEnd",
			"oTransition": "oTransitionEnd",
			"transition": "transitionend"
		};

		Animation.transition = function($el) {
			var el, result, type, _ref;
			el = $el[0];
			_ref = this.transitions;
			for (type in _ref) {
				result = _ref[type];
				if (el.style[type] != null) {
					return result;
				}
			}
		};

		Animation.execute = function($el, callback) {
			var transition;
			transition = this.transition($el);
			if (transition != null) {
				return $el.one(transition, callback);
			} else {
				return callback();
			}
		};

		return Animation;

	})();
	Carousel = (function() {
		Carousel.defaults = {
			cycle: 5000,
			active: 'active'
		};

		function Carousel($el, settings) {
			if (settings == null) {
				settings = {};
			}
			this.$el = $el;
			this.settings = $.extend({}, Carousel.defaults, settings);
			if (!this.$active().length) {
				this.$pages().first().toggleClass(this.settings.active);
				this.$previews().first().toggleClass(this.settings.active);
			}
			if (settings.cycle != null) {
				this.cycle();
				this.$el.on('mouseenter', $.proxy(this.pause, this));
				this.$el.on('mouseleave', $.proxy(this.cycle, this));
			}
		}

		Carousel.prototype.next = function() {
			return this.go("next");
		};

		Carousel.prototype.prev = function() {
			return this.go("prev");
		};

		Carousel.prototype.$fallback = function(direction) {
			var method;
			method = (function() {
				switch (direction) {
					case "prev":
					return "last";
					case "next":
					return "first";
				}
			})();
			return this.$(".preview")[method]();
		};

		Carousel.prototype.$previews = function() {
			return this.$(".preview");
		};

		Carousel.prototype.$pages = function() {
			return this.$(".pages .page");
		};

		Carousel.prototype.$active = function() {
			return this.$(".preview.active");
		};

		Carousel.prototype.cycle = function() {
			return this.timer != null ? this.timer : this.timer = Timer.every(this.settings.cycle, $.proxy(this.next || this.prev, this));
		};

		Carousel.prototype.pause = function() {
			if (this.timer) {
				Timer.clear(this.timer);
			}
			return delete this.timer;
		};

		Carousel.prototype.swap = function($active, $pending, direction, activated) {
			var $pages, animating, callback, cycling, index;
			if (activated == null) {
				activated = this.settings.active;
			}
			cycling = this.interval;
			animating = "" + direction + "ing";
			index = this.$previews().index($pending);
			$pages = this.$pages();
			$pending.addClass(direction);
			$pending.offset().position;
			$active.addClass(animating);
			$pending.addClass(animating);
			$pages.removeClass(activated);
			$($pages.get(index)).addClass(activated);
			callback = function() {
				$active.removeClass(activated).removeClass(animating);
				return $pending.addClass(activated).removeClass(animating).removeClass(direction);
			};
			return Animation.execute($active, callback);
		};

		Carousel.prototype.page = function(index) {
			var $active, $pending, direction, existing;
			this.pause();
			$active = this.$active();
			$pending = this.$previews().eq(index);
			existing = this.$previews().index($active);
			direction = existing > index ? 'prev' : 'next';
			if ($pending.is($active)) {
				return;
			}
			return this.swap($active, $pending, direction);
		};

		Carousel.prototype.go = function(direction) {
			var $active, $pending;
			$active = this.$active();
			$pending = $active[direction]();
			if (!$pending.length) {
				$pending = this.$fallback(direction);
			}
			if ($pending.is($active)) {
				return;
			}
			return this.swap($active, $pending, direction);
		};

		Carousel.prototype.$ = function(selector) {
			return this.$el.find(selector);
		};

		return Carousel;

	})();

	$.fn.extend({
		carousel: function(option) {
			if (option == null) {
				option = {};
			}
			return this.each(function() {
				var $this, action, data, options, page;
				$this = $(this);
				data = $this.data("carousel");
				options = $.extend({}, $.fn.carousel.defaults, typeof option === "object" && option);
				action = typeof option === "string" ? option : option.action;
				if (typeof options !== "string") {
					page = option.page;
				}
				if (data == null) {
					$this.data("carousel", data = new Carousel($this, options));
				}
				if (action != null) {
					data[action]();
				}
				if (page != null) {
					return data.page(options.page);
				}
			});
		}
	});

	$(document).on("click.carousel", "[data-action],[data-page]", function(event) {
		var $target, $this, options;
		$this = $(this);
		$target = $this.closest(".carousel");
		if (!$target.length) {
			return;
		}
		event.preventDefault();
		event.stopPropagation();
		options = $.extend({}, $target.data(), $this.data());
		return $target.carousel(options);
	});

	$.fn.popin=function(options) {

		// Fusion entre les propriétées par défauts et les options mises par le développeur
		var param = $.extend({
			"show" : 400,
			"hide" : 400,
			"bgcolor" : 'white'
		}, options);

		// Pour chaque élément qui appelle le plugin
		return this.each(function() {

			// Lorsqu'on clique sur l'élément
			$(this).click(function() {

				// Si l'élément a bien l'attribut nécessaire au plugin
				if(/\d+/.test($(this).attr('data-popin-projet'))) {

					// Récupération du numero de l'élément
					var projet = $(this).attr('data-popin-projet');

					if(projet !== undefined && projet !== '') {
						$.post('controllers/carousel.php', {'projet': projet}).done(function(res) {
							var heightWindow = window.innerHeight;
							var heightPopin = $('.popin').height();

							$('.popin-bg').html(res);
							$('.popin-bg').css('top', ((heightWindow - heightPopin) / 6 + $(window).scrollTop()));
							$('.popin-bg').fadeIn(param.show);
							$('.bg').fadeIn(param.show);
							//$('body').css('overflow', 'hidden');

							var imgMaxHeight = ($('.popin').height() - parseInt($('.popin').css('padding-top')) - $('.popin .title').height() - parseInt($('.popin .title').css('padding-bottom')) - parseInt($('.popin .title').css('margin-top')) - parseInt($('.popin .title').css('margin-bottom')));
							$('.carousel .img').css('max-height', imgMaxHeight);
							$('.popin').find('.close').click(function() {
								$('.popin-bg').fadeOut(param.hide);
								$('.bg').fadeOut(param.hide);
							});
						});
					}
				}
			});
		});
	};

	$('.cell').popin();

}).call(this);
