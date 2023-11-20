/* 《 공통 스크립트 》 */

$(document).ready(function(){
	$('.popup').length && alertPop(); //팝업
	$('.lnb').length && lnbMenu(); //LNB 메뉴
	$('.depth_01 > li.on .depth_02').slideDown(0)
	$('.inpt_txt').length && pwdInput(); //input password

	$(window).on('resize load',function(){//로그인 페이지 placeholder 변경
		var ww = $(window).width();
		if(ww < 768){
			$('.login_box input[type="text"]').attr('placeholder','아이디')
			$('.login_box input[type="Password"]').attr('placeholder','비밀번호')
		}else{
			$('.login_box input[type="text"]').attr('placeholder','ID')
			$('.login_box input[type="Password"]').attr('placeholder','Password')
		}
	})
});

function lnbMenu(){ //LNB 메뉴
	$('.depth_01 > li > a').on('click', function(e){
		e.preventDefault();
		if($(this).parent().hasClass('on')){
			$('.depth_02').slideUp()
			$('.depth_01 > li').removeClass('on')
		}else{
			$('.depth_02').slideUp()
			$('.depth_01 > li').removeClass('on')
			$(this).parent().addClass('on')
			$(this).siblings().slideDown()
		}
	})

	$('.site_btn').on('click', function(){
		$(this).toggleClass('on')
		$('.lnb').toggleClass('on')
	})
}


function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function alertPop(){ //팝업
	$('.set_pop').on('click', function(e){ /* 팝업열기 */
		e.preventDefault();
		var target = $(this).attr('open-pop') || e;
		$('.popup' + '.' + target).fadeIn(200);
		dimShow();
	});

	$('.btn_close').on('click', function(e){ /* 팝업닫기 */
		e.preventDefault();
		var target= $(this).closest('.popup');
		target.fadeOut(200);
		setTimeout(dimHide, 150);
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var popArea = $('.popup');
		if(popArea.has(e.target).length === 0 && $('body').hasClass('dim')){
			popArea.fadeOut(200);
			setTimeout(dimHide, 150);
		}
	});
}

function pwdInput(){ //input 옵션
	$('.ico_hidden').on('click', function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on')
			$('.inpt_pwd').attr('type', 'password')
		}else{
			$(this).addClass('on')
			$('.inpt_pwd').attr('type', 'text')
		}
		$('.inpt_pwd').focus()
	})
}