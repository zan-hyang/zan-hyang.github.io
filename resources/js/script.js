const setEvent = () => {
	AOS.init();
	event();
	scrollVal();
	animated_contents();
	header_textAnimation();
}

const init = () => {
	setEvent();
}

function header_textAnimation() {
	const content = "Hi, I'm Hyanga.\n UI/UX Designer.";
	const text = document.querySelector(".visual__text")
	let i = 0;

	function typing(){
	    let txt = content[i++];
	    text.innerHTML += txt=== "\n" ? "<br/>": txt;
	    if (i > content.length) {
	        text.textContent = "";
	        i = 0;
	    }
	}
	setInterval(typing, 300)
}
function animated_contents() {
    $(".zt-skill-bar > div ").each(function (i) {
        var $this  = $(this),
            skills = $this.data('width');

        $this.css({'width' : skills + '%'});
    });
}

if(jQuery().appear) {
    $('.zt-skill-bar').appear().on('appear', function() {
        animated_contents();
    });
} else {
    animated_contents();
}

$(document).on("click", ".portfolio__box-btn", function(){

	let path = $(this).parents(".portfolio__box").find(".portfolio__box-img img").attr("src");
	
	$(".portfolio__box-bigWrapper").css({
		"top":(($(window).height()-$(".portfolio__box-bigWrapper").outerHeight())/2+$(window).scrollTop())+"px",
		"left":(($(window).width()-$(".portfolio__box-bigWrapper").outerWidth())/2+$(window).scrollLeft())+"px"
	})

	showImage(path);
})

function showImage(fillCallPath) {
	$(".portfolio__box-bigWrapper").css("display", "flex").show();

	$(".portfolio__box-big")
	.html("<img src='"+fillCallPath+"'>")
	.animate({width:'100%', height: '100%'}, 1000);
}

$(document).on("click", ".portfolio__box-bigWrapper", function(e) {
	$(".portfolio__box-big").animate({width:'50%', height:'50%'}, 1000);
	setTimeout(function(){
		$(".portfolio__box-bigWrapper").hide();
	}, 1000);
})

// 메뉴 클릭 시 스크롤
function event() {
	$('.floatingMenu > ul > li > a').click(function(e) {
		let href = $(this).attr('href');
		let targetTop = $(href).offset().top;

		$('html').stop().animate({scrollTop:targetTop}, 600);

		e.preventDefault();
	});
}

function scrollVal() {
	var progressIndicator = '<div id="scrollVal"></div>';
	$('body').append(progressIndicator);

	$(window).on('scroll', function() {
		var currentPercentage = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
		$('#scrollVal').width(currentPercentage+'%');
	});
}

// 그리기
function draw(max, className, colorName) {
	let i = 1;
	let func1 = setInterval(function() {
		if( i < max ) {
			color1( i, className, colorName );
			i++;
		} else {
				clearInterval(func1);
		}
	}, 10);
}

// 컬러 & 퍼센트
function color1(i, className, colorName ) {
	$(className).css({
		"background" : "conic-gradient("+colorName+" 0% "+i+"%, #fff "+i+"% 100%)"
	});
}



$(() => {
	init();
})