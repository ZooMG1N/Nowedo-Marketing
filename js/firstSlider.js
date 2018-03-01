let staffBlock = document.querySelector('.staff-for-kids');
let whyBlock = document.querySelector('.why-block');
let biasTop = 0;

//------------------------TOP SLIDER----------------------------//
$(document).ready(() => {
    $('.prev').click(() => {
        biasTop += staffBlock.clientHeight;
        if ( biasTop > 0) {
            biasTop = -staffBlock.clientHeight * 2;
        }
        $('.staff-slider').css('top', biasTop + 'px');
    });

    $('.next').click(() => {
        biasTop -= staffBlock.clientHeight;
        if ( biasTop < -staffBlock.clientHeight * 2) {
            biasTop = 0;
        }
        $('.staff-slider').css('top', biasTop + 'px');
    });
});

//------------------------BOTTOM SLIDER----------------------------//
$(document).ready(() => {
    $('.why-btn').addClass('active');

    $('.why-btn'). click(() => {
        $('.parent-block-slider').css('top','0');
    });

    $('.what-btn'). click(() => {
        biasTop += whyBlock.clientHeight;
        if (biasTop > whyBlock.clientHeight) {
            biasTop = whyBlock.clientHeight * 1;
        }
        $('.parent-block-slider').css('top', -biasTop + 'px');
    });

    $('.how-btn'). click(() => {
        biasTop += whyBlock.clientHeight;
        if (biasTop > whyBlock.clientHeight) {
            biasTop = whyBlock.clientHeight * 2;
        }
        $('.parent-block-slider').css('top', -biasTop + 'px');
    });
});

//----------------------ACTIVE LINK--------------------------------//
$(document).ready(() => {
    $('.test-class').click(()=> {
        $('.test-class').removeClass('active');
        $(this).addClass('active');
    });
});

//----------------------VISIBLE BURGER-MENU--------------------------------//
$(document).ready(() => {
    if (window.innerWidth > 900) {
        $('.burger-menu').css('display','none')
    }
});

$(document).ready(() => {
   $('.burger-menu').click(() => {
       $('.main-nav').toggle(1000)
   })
});