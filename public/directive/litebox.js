angular.module('litebox', []).directive('ngGallery', [function ($document) {
	return {
		restrict: 'A',
		link: function (scope, iEle, iAttrs) {
			var div = iEle.find('div');
			var popImg = div.find('img');
			var section = iEle.find('section');
			var img = section.find('img');
			var overlay = iEle.find('aside');
			var close = iEle.find('a');
			var body = document.getElementsByTagName('body');
			var header = iEle.find('header');
			var leftIndicator = header[0];
			var rightIndicator = header[1];
			var imgObjList = {};
			var currentImg;
			angular.extend(imgObjList, img);

			var mapper = function(ci) {
				for(var i = 0; i <= img.length - 1; i++) {
					if(ci == img[i]) {
						return i;
					}
				}
				return null;
			}

			var validator = function() {
				if(mapper(currentImg) < 1) {
					leftIndicator.classList.remove('hide');
					leftIndicator.classList.add('hide');
				} else if(mapper(currentImg) >= img.length - 1) {
					rightIndicator.classList.remove('hide');
					rightIndicator.classList.add('hide');
				}
			}


			img.bind('click', function() {
				currentImg = this;
				validator();
				body[0].classList.add('noscroll');
				overlay.addClass('show');
				popImg[0].src = this.src;
			})
			close.bind('click', function() {
				overlay.removeClass('show');
				body[0].classList.remove('noscroll');
				currentImg = null;
				rightIndicator.classList.remove('hide');
				leftIndicator.classList.remove('hide');
			})
			header.bind('click', function() {
				if(angular.element(this).hasClass('left')) {
					/*left goes here*/
					var prev = img[mapper(currentImg) - 1];
					try {
						popImg[0].src = prev.src;
						currentImg = prev;	
						validator();
						rightIndicator.classList.remove('hide');
					} catch(ex) {

					}
				} else {
					/*right goes here*/
					var next = img[mapper(currentImg) + 1];
					try {
						popImg[0].src = next.src;
						currentImg = next;
						validator();
						leftIndicator.classList.remove('hide');
					} catch(ex) {

					}
					
				}
			})
		}
	};
}])