var globalScript = (function(){
    function setUpNavigation() {
        [].slice.call($('.nav-button')).map(function(button){
            $(button).on('click', function(){
                var targetId = $(this).data('target');
                console.log(targetId);
                var target = $('#' + targetId);
                console.log(target);
                [].slice.call($('article.page')).map(function(page){
                    if (page.id !== targetId){
                        $(page).addClass('hidden');
                    }else{
                        $(target).removeClass('hidden');
                    }
                });
            });

        });
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
