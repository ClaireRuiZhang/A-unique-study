define(function(require) {

	//删除加载页面动画
	$('.page-progress').remove();

	require('smoothscroll');

	if (sessionStorage.getItem('sessuv') !== 'true') {
		$.get('./sessuv', {}, function(bool) {
			if (bool == true) {
				sessionStorage.setItem('sessuv', 'true');
			}
		});
	}
	
	if ($('img[data-src]').length) {
		require(['lazyload'], function(){
			$('img[data-src]').lazyload({
				data_attribute:'src',
				placeholder:'/asset/img/ajax-loader.gif',
				effect: 'fadeIn'
			});
		});
	}
	
	//返回顶部
    if ($('#totop').length) {
    	
        $('#totop').click(function () {
            $('html,body').animate({scrollTop: 0}, 500);
            return false;
        });
		
		if ($(window).scrollTop() == 0) {
			$("#totop").addClass('arrow-down');
		}
		
        $(window).scroll(function(){
	        if($(this).scrollTop() >= 1000){
	            $("#totop").removeClass('arrow-down').addClass('arrow-up').fadeIn();
	        }else{
	            $("#totop").removeClass('arrow-up').fadeOut();
	        }
	    });
	}

	/*$('a[href="#"]').click(function(e) {
		e.preventDefault();
		alert('敬请期待12月1日');
	});*/

});