var globalScript = (function(){
    function setUpNavigation() {
        
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