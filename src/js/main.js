(function($){
    $.fn.ibentoSlider = function(interval) {

        var slides;
        var count;
        var amount;

        
        var i;
        
        function runSlider() {

            $(slides[i]).fadeOut(1000);

            i++;

            if (i >= amount) {
                i = 0;
            }

            $(slides[i]).fadeIn(1000);

            // update counter
            count.text(i+1+' / ' + amount);

            // loop slider
            setTimeout(run, interval);
        }
        slides = $('#my_slider').children();
        count = $('#counter');
        amount = slides.length;
        i = 0;

        // update counter
        count.text(i+1+' / ' + amount);
        setTimeout(runSlider, interval);
    };
})(jQuery);


jQuery(window).load(function() {
    $('.ibento_slider').ibentoSlider(2000);
});