(function ($) {
    $(function () {
        var $body = $('body'),
            lastScrollTop = 0;

        var playlists = {
            'alex': {
                name: 'Alex',
                authored: 'maria'
            },
            'casey': {
                name: 'Casey',
                authored: 'jessica'
            },
            'danielle': {
                name: 'Danielle',
                authored: 'casey'
            },
            'dj': {
                name: 'DJ',
                authored: 'julia'
            },
            'jason': {
                name: 'Jason',
                authored: 'alex'
            },
            'jeff': {
                name: 'Jeff',
                authored: 'vicky'
            },
            'jessica': {
                name: 'Jessica',
                authored: 'jeffrey'
            },
            'julia': {
                name: 'Julia',
                authored: 'danielle'
            },
            'kathia': {
                name: 'Kathia',
                authored: 'dj'
            },
            'maria': {
                name: 'Maria',
                authored: 'suzie'
            },
            'suzie': {
                name: 'Suzie',
                authored: 'jason'
            },
            'vicky': {
                name: 'Vicky',
                authored: 'kathia'
            }
        };

        $(window).on('scroll', function(e) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop){
                console.log('you scrolled down!');
            } else {
                console.log('you scrolled up!');
            }

            lastScrollTop = st;
        });

        // begin experience
        $body.on('click', '.btn--begin', function(e) {
           console.log('begin button clicked');

           $('body').scrollTo('#page-content', 1000, {easing: 'easeInOutCirc'});
        });

        // change text when playlist selected
        $body.on('change', '.playlist-guess__select', function(e) {
            console.log('someone selected something!');
        });

        // guess
        $body.on('submit', '.form', function(e) {
            var guess = $(this).find('.playlist-guess__select').val(),
                guessCheck = playlists[guess].authored,
                receiver = $(this).closest('.playlist').attr('id').substring(9);

            console.log(guessCheck);

            if(actual === receiver) {
                console.log('correct!')
            } else {
                console.log('incorrect!');
            }

            e.preventDefault();
        });
    });
})(jQuery);