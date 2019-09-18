var globalScript = (function(){
    function setUpNavigation() {
        window.dataLayer = window.dataLayer || [];

        [].slice.call($('.nav-button')).map(function(button){
            $(button).on('click', function(){
                var targetId = $(this).data('target');
                
                window.dataLayer.push({
                    'event': 'PageView-' + targetId
                });
                if ($(this).data('action') == 'donate'){
                    window.dataLayer.push({
                        'event': 'PageView-donate'
                    }); 
                    return true;
                }
                
                var target = $('#' + targetId);
                [].slice.call($('article.page')).map(function(page){
                    if (page.id !== targetId){
                        $(page).addClass('hidden');
                    }else{
                        $(target).removeClass('hidden');
                    }
                });
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            });

        });

        if($('body').innerWidth() < 550){
            $('.nav-menu').addClass('collapsed');
            $('.nav-menu').on('click', function() {
                if ($(this).hasClass('collapsed')){
                    $(this).removeClass('collapsed');
                }else{
                    $(this).addClass('collapsed');

                }
                window.dataLayer.push({
                    'event': 'MobileNavMenu-Clicked'
                  });
            });

            $('.header-slogan').css('top', window.innerHeight - 100);
        }

        $('.header-slogan').on('click', function(){
            window.open("https://www.facebook.com/GatewoodForJustice/");
            window.dataLayer.push({
                'event': 'FacebookLink-Clicked'
              });
        });
    }

function setUpAboutPageNav() {
    [].slice.call($('.about-nav-item')).map(function(nav){
        var targetEl = document.getElementById($(nav).data('target'));
        $(nav).on('click', function(){
            targetEl.scrollIntoView();
        });
    });
    $('.return-to-top-button').on('click', function () {
        $('.about-nav')[0].scrollIntoView();
    });
}

    return {
        init: function () {
        setUpNavigation();    
        setUpAboutPageNav();
        }
    }
})();

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    globalScript.init();
} else {
    document.addEventListener('DOMContentLoaded', globalScript.init);
} 
