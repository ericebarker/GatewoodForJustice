var globalScript = (function(){
    function setUpNavigation() {
        window.dataLayer = window.dataLayer || [];

        [].slice.call($('.nav-button')).map(function(button){
            $(button).on('click', function(){
                var targetId = $(this).data('target');
                
                window.dataLayer.push({
                    'event': 'PageView-' + targetId
                  });
                var target = $('#' + targetId);
                [].slice.call($('article.page')).map(function(page){
                    if (page.id !== targetId){
                        $(page).addClass('hidden');
                    }else{
                        $(target).removeClass('hidden');
                    }
                });
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
            });
        }
    }

    return {
        init: function () {
        setUpNavigation();    
        }
    }
})();

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    globalScript.init();
} else {
    document.addEventListener('DOMContentLoaded', globalScript.init);
} 
