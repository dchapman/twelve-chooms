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
                authored: 'jeff'
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

        var randomResponse = function(responseType) {
            var response;

            switch(responseType) {
                case 'taunt':
                    response = responseTaunt[Math.floor(Math.random()*responseTaunt.length)];
                    break;
                case 'incorrect':
                    response = responseIncorrect[Math.floor(Math.random()*responseTaunt.length)];
                    break;
                case 'correct':
                    response = responseCorrect[Math.floor(Math.random()*responseTaunt.length)];
                    break;
                default:
                    return false;
            }

            return response;
        };

        var responseTaunt = [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'],
            responseIncorrect = [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
            ],
            responseCorrect = [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                'Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
            ];

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

           $body.scrollTo('#page-content', 1000, {easing: 'easeInOutCirc'});
        });

        // continue experience
        $body.on('click', '.btn--continue', function(e) {
            console.log('advancing to next playlist');

            var $nextPlaylist = $(this).closest('.playlist').next();
            $body.scrollTo($nextPlaylist, 600, {easing: 'easeInOutCirc'});
        });

        // change text when playlist selected
        $body.on('change', '.playlist-guess__select', function(e) {
            var taunt = randomResponse('taunt'),
                $notification = $(this).closest('.playlist').find('.notification');

            $notification.text(taunt);

            console.log(taunt);
        });

        // guess
        $body.on('submit', '.form', function(e) {
            var $currPlaylist = $(this).closest('.playlist');

            var guess = $(this).find('.playlist-guess__select').val(),
                guessCheck = playlists[guess].authored,
                receiver = $currPlaylist.attr('id').substring(9);

            console.log(guessCheck);

            $currPlaylist.removeClass('is-unguessed');

            if(guessCheck === receiver) {
                var correct = randomResponse('correct');
                $(this).closest('.playlist').find('.notification').text(correct);

                $currPlaylist.addClass('is-correct');

                console.log('correct!');
            } else {
                var incorrect = randomResponse('incorrect');
                $(this).closest('.playlist').find('.notification').text(incorrect);

                $currPlaylist.addClass('is-incorrect');

                console.log('incorrect!');
            }

            e.preventDefault();
        });
    });
})(jQuery);