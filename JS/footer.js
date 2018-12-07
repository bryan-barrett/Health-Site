 //jQuery For Fading in and out of above footer Quotes

 (function() {
    let quotes = $(".quotes");
    let quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length).fadeIn(2000).delay(2000).fadeOut(1500, showNextQuote);
    }

    showNextQuote();

    })();