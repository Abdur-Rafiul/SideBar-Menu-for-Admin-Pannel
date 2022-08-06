
(function ($) {
	$.fn.ssMenu = function (options) {

		var setting = $.extend({
			theme: "default",       
			hideOnScroll: false, 
			additionalCSS: ({
				'background': '', 
				'color': '', 
				'boxShadow': '', 
				'textShadow': '', 
			}),

		}, options);

		return this.each(function () {

			var target = $(this);

			var ssMenu = $(".ss-menu");

			var Triggers = $(ssMenu).find("li");


			

			$(target).addClass(setting.theme);

			$(target).css(setting.additionalCSS);

			$(ssMenu).addClass("open");
			$(Triggers).mouseenter(function () {


				
				if ($(ssMenu).hasClass("open")) {

					return;
				}

			


			});


			$(Window).click(function (e) {

				if ($(e.target).closest(Triggers).length) {

					return;

				}

				//$(ssMenu).removeClass("open");
				


			});

			if (setting.hideOnScroll == true) {
				$(window).scroll(function () {


					if ($(this).scrollTop() > 50) {

						$(ssMenu).removeClass("show").addClass("hide");


					} else {

						$(ssMenu).removeClass("hide").addClass("show");


					}


				});

			}


		});
	};

})(jQuery);

