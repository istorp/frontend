



$(document).ready(function() {

    $('#tryck').on('click', function(){

        
        
            for (var i=0; i<=1000; i++){
                HWdimentions= Math.floor(Math.random() * 11) + 'px';
                div=$('<div/>').css({
                    
                    'width': HWdimentions,
                    'height': HWdimentions, 
                    'left': Math.floor(Math.random() * 100) + '%' ,
                    'animation-duration': (Math.random() *20) + 5 + 's',
                    'animation-delay':(Math.random() * 11) +'s'
                })
                .addClass('snowflakes');
                $('body').append(div);
            }
        
    });
});
