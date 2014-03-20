$(document).ready(function() {
	if( device.mobile() || device.tablet() ) {
		getAdaptive();
		var cssId = 'mobile.css'; 
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'css/mobile.css';
		link.media = 'screen';
		head.appendChild(link);

	}
	else {
		if ( $(window).width() <= 890 ) {
			getAdaptive();
		}
		var cssId = 'desktop.css'; 
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'css/desktop.css';
		link.media = 'screen';
		head.appendChild(link);
	}
		
		
	$(".list, .top-nav").hover(function() {
		$(".top-nav").css("height", "auto");
	}, function() {
		$(".top-nav").css("height", 0);
	});
	buildGallery(".cat-products");
	buildGallery(".other-products");
	buildGallery(".other-products-img");
});
function getAdaptive() {
	$(".main-nav ul, .left-block ul, .right-block ul, .bottom-nav ul").animate({ height: "toggle" }, 0);
	$(".menu-preview").click(function() {
		$(this).parent().find("ul").animate({
			height: "toggle"
		}, 200);
		if( $(this).hasClass("active") )
			$(this).removeClass("active");
		else
			$(this).addClass("active");
	});
}

function buildGallery(galleryName) {
	var numInt = 0,
		imgLeft = 0,
		maxLeft,
		i,
		offset = 5,
		$images = $(galleryName + ".gallery a"),
		imgWidth = $images.width(),
		imgNum = $images.length,
		$imgContainer = $(galleryName + ".gallery-inner");
	for(i = 0; i < $images.length; i++) {
		$images.eq(i).css('left', imgLeft + 'px');
		imgLeft += imgWidth + offset;
	}
	maxLeft = imgLeft - imgWidth;
	$(galleryName + " .rbtn").click(function(){
		if(numInt === imgNum) 
			numInt = 0;
		for(i = 0; i < $images.length; i++) {
			if(numInt === i) {
				$images.eq(numInt).css('left', maxLeft + 'px');
			}
			else {
				$images.eq(i).css('left', parseInt($images.eq(i).css('left'), 10) - (imgWidth + offset) + 'px');
			}
		}
		numInt++;
	});
	$(galleryName + " .lbtn").click(function(){
		numInt--;
		if(numInt === -1) 
			numInt = imgNum - 1;
		for(i = 0; i < $images.length; i++) {
			if(numInt === i) {
				$images.eq(numInt).css('left', 0);

			}
			else {
				$images.eq(i).css('left', parseFloat($images.eq(i).css('left')) + (imgWidth + offset) + 'px');
			}
		}
	});
}