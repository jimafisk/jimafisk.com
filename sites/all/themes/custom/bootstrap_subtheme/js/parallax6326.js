(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.my_custom_behavior = {
    attach: function(context, settings) {
      $(document).ready(function() {

        //START CUSTOM CODE
        var topStart = 0;
        $('#top').css({ "transform":"translateY(" + topStart + "px) translateZ(0px)" });
        var upperMiddleStart = 600;
        $('#home-upper-middle').css({ "transform":"translateY(" + upperMiddleStart + "px) translateZ(0px)" });
        $('#block-block-4').css({ "transform":"translateY(0px) translateZ(0px)" });
        $('#block-block-6').css({ "transform":"translateY(0px) translateZ(0px)" });
        $('#block-block-7').css({ "transform":"translateY(0px) translateZ(0px)" });
        var middleStart = 1200;
        $('.front #home-middle').css({ "transform":"translateY(" + middleStart + "px) translateZ(0px)" }); // .front fixes login block
        var lowerMiddleStart = 1950;
        $('#home-lower-middle').css({ "transform":"translateY(" + lowerMiddleStart + "px) translateZ(0px)" });

        var prevScrollPos = $(window).scrollTop();
        $(window).scroll(function() {
          var scrollPos = $(window).scrollTop();

          $({countNum: prevScrollPos}).animate({countNum: scrollPos}, {
            duration: 1000,
            easing: 'linear',
            step: function() {
              // What todo on every count

              //Sky
              $('#top').css({ "transform":"translateY(" + (topStart - Math.floor(this.countNum)/3) + "px) translateZ(0px)" });
              $('#block-block-18').css({ "transform":"translateY( -" + Math.floor(this.countNum*2) + "px) translateX(-" + Math.floor(this.countNum*3) + "px)" });
              $('#block-block-19').css({ "transform":"translateY( -" + Math.floor(this.countNum*2) + "px) translateX(" + Math.floor(this.countNum*3) + "px)" });

              //Clouds
              $('#home-upper-middle').css({ "transform":"translateY(" + (upperMiddleStart - Math.floor(this.countNum/3)) + "px) translateZ(0px)" });
              $('#block-block-4').css({ "transform":"translateY( -" + Math.floor(this.countNum/20) + "px) translateZ(0px)" });
              $('#block-block-6').css({ "transform":"translateY( -" + Math.floor(this.countNum/11) + "px) translateZ(0px)" });
              $('#block-block-7').css({ "transform":"translateY( -" + Math.floor(this.countNum/5) + "px) translateZ(0px)" });
              $('#block-block-2').css({ "transform":"translateY( -" + Math.floor(this.countNum/8) + "px) translateZ(0px)" });
              $('#block-block-17').css({ "transform":"translateY( -" + Math.floor(this.countNum/8) + "px) translateZ(0px)" });

              //Mountains
              $('#home-middle').css({ "transform":"translateY(" + (middleStart - Math.floor(this.countNum/3)) + "px) translateZ(0px)" });
              $('#block-block-10').css({ "transform":"translateY( -" + Math.floor(this.countNum/11) + "px) translateZ(0px)" });
              $('#block-block-12').css({ "transform":"translateY( -" + Math.floor(this.countNum/7) + "px) translateZ(0px)" });
              $('#block-block-20').css({ "transform":"translateY( -" + Math.floor(this.countNum/8) + "px) translateZ(0px)" });
              $('#block-block-21').css({ "transform":"translateY( -" + Math.floor(this.countNum/8) + "px) translateZ(0px)" });
              $('#block-block-22').css({ "transform":"translateY( -" + Math.floor(this.countNum/8) + "px) translateZ(0px)" });
	      
              //Ocean
              $('#home-lower-middle').css({ "transform":"translateY(" + (lowerMiddleStart - Math.floor(this.countNum/3)) + "px) translateZ(0px)" });
              $('#block-block-14').css({ "transform":"translateY( -" + Math.floor(this.countNum/13) + "px) translateZ(0px)" });
              $('#block-block-15').css({ "transform":"translateY( -" + Math.floor(this.countNum/6.5) + "px) translateZ(0px)" });
              var bubblePos = (Math.floor(this.countNum) <= 5300) ? Math.floor(this.countNum) : 5300;
              $('#block-block-23').css({ "transform":"translateY( -" + bubblePos  + "px) translateZ(0px)" });
              $('#block-block-25').css({ "transform":"translateY( -" + bubblePos  + "px) translateZ(0px)" });
              var whalePos = (Math.floor(this.countNum) <= 5296) ? Math.floor(this.countNum) : 5296;
              $('#block-block-24').css({ "transform":"translateY( -" + whalePos/2  + "px) translateZ(0px)" });

            },
            complete: function() {
              //console.log('finished');
            }
          });
          prevScrollPos = scrollPos;
          
          if($(window).scrollTop() > 100) {
            $('.audience-call').css({ 'color':'transparent' });
          } else {
            $('.audience-call').css({ 'color':'white' });
          }

          //if($(window).scrollTop() > 300) {
          var whaleWidth = ($(window).scrollTop()/7 <= 200) ? $(window).scrollTop()/7 : 200;
          $('.falling-whale img').css({ 'width': whaleWidth + 'px' });
          $('.falling-whale img').css({ 'transform': 'rotate(' + $(window).scrollTop()/5 + 'deg)' });
          //}

        });
        //END CUSTOM CODE        

      });
    }
  }
})(jQuery, Drupal, this, this.document);
