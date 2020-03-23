$(document).ready(function(){
    $('.emojis-box > img').click(function(e) {
        $(`.${e.target.className}`).css('opacity', 0);
    });
});