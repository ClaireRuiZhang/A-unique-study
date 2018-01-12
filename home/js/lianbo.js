$('.carousel.captions ul').anoSlide({items:1,speed:500,prev:'a.prev[data-prev-caption]',next:'a.next[data-next-caption]',lazy:true,auto:1500,onConstruct:function(instance)
{var paging=$('<div/>').addClass('paging fix').css({position:'absolute',top:1,right:50+'px',width:instance.slides.length*40,marginLeft:-0})
for(i=0,l=instance.slides.length;i<l;i++)
{var a=$('<a/>').data('index',i).appendTo(paging).on({click:function()
{instance.stop().go($(this).data('index'));}});if(i==instance.current)
{a.addClass('current');}}
instance.element.parent().append(paging);},onStart:function(ui)
{var paging=$('.paging');paging.find('a').eq(ui.instance.current).addClass('current').siblings().removeClass('current');ui.slide.element.find('.caption').remove();},onEnd:function(ui)
{}})