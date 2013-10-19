window.onload = function() {    
    $("img").unveil();
    
    emojify.setConfig({
        emoticons_enabled: true,
        people_enabled: true,
        
    });
    emojify.run();
};
