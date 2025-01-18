
 (function($) {
                var $dragMe = $(".dragme"),
                $container = $(".sl-container"),
                $viewAfter = $(".view-after");
                $dragMe.draggable({
                    containment: "parent",
                    drag: function() {
                        $viewAfter.css({
                            width : parseFloat($(this).css('left')) + 5
                        });
                    }
                });
                $container.on("click", function(event) {
                    var eventLeft = event.pageX - $container.offset().left - 15;
                    animateTo(eventLeft);
                });
                animateTo("10%");
                function animateTo(_left) {
                    $dragMe.animate({
                        left: _left 
                    }, 'slow', 'linear');
                    $viewAfter.animate({
                        width: _left - 200
                    }, 'slow', 'linear');
                }
            })(jQuery);
            $(".zima").hover(function(){
                animateTo("100%");
            })    
            $(".leto").click(function(){
                animateTo("25%");
            })