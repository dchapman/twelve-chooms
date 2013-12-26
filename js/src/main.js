$(function () {
    $('#page-content').imagesLoaded(function() {

        $(document).snowfall({flakeCount : 40, maxSpeed : 3, minSize: 4, maxSize: 14, round: true});

        var TwelveChooms = (function() {

            // playlist information
            var playlists = {
                'alex': {
                    name: 'Alex',
                    authored: 'maria',
                    author: 'jason'
                },
                'casey': {
                    name: 'Casey',
                    authored: 'jessica',
                    author: 'danielle'
                },
                'danielle': {
                    name: 'Danielle',
                    authored: 'casey',
                    author: 'julia'
                },
                'dj': {
                    name: 'DJ',
                    authored: 'julia',
                    author: 'kathia'
                },
                'jason': {
                    name: 'Jason',
                    authored: 'alex',
                    author: 'suzie'
                },
                'jeff': {
                    name: 'Jeff',
                    authored: 'vicky',
                    author: 'jessica'
                },
                'jessica': {
                    name: 'Jessica',
                    authored: 'jeff',
                    author: 'casey'
                },
                'julia': {
                    name: 'Julia',
                    authored: 'danielle',
                    author: 'dj'
                },
                'kathia': {
                    name: 'Kathia',
                    authored: 'dj',
                    author: 'vicky'
                },
                'maria': {
                    name: 'Maria',
                    authored: 'suzie',
                    author: 'alex'
                },
                'suzie': {
                    name: 'Suzie',
                    authored: 'jason',
                    author: 'maria'
                },
                'vicky': {
                    name: 'Vicky',
                    authored: 'kathia',
                    author: 'jeff'
                }

            };

            // collections of response text
            var responseChoose = [
                    'Choose someone from the list above. Which of those dapper little fuckers do you think made this playlist?'
                ],
                responseEmpty = [
                    'EMPTY You gotta guess somebody, dumdum!'
                ],
                responseTaunt = [
                    'TAUNT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'TAUNT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                    'TAUNT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'],
                responseIncorrect = [
                    'INCORRECT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'INCORRECT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                    'INCORRECT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
                ],
                responseCorrect = [
                    'CORRECT Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'CORRECT Aliquam ultricies ornare lorem ac elementum? Donec odio tellus, ornare eu tempor nec, tincidunt in tellus.',
                    'CORRECT Aenean nec ante sed dolor volutpat mattis. Pellentesque id nisi bibendum, tincidunt ligula quis, ullamcorper sem?'
                ];

            var $main = $( '#page-content' ),
                $pages = $main.children( '.page' ),
                $continue = $( '.btn--continue'),
                correct = 0,
                incorrect = 0,
                pagesCount = $pages.length,
                current = 0,
                isAnimating = false,
                endCurrPage = false,
                endNextPage = false,
                animEndEventNames = {
                    'WebkitAnimation' : 'webkitAnimationEnd',
                    'OAnimation' : 'oAnimationEnd',
                    'msAnimation' : 'MSAnimationEnd',
                    'animation' : 'animationend'
                },
                animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
                support = Modernizr.cssanimations;

            var $btnBegin = $('.btn--begin'),
                $guessSelect = $('.playlist-guess__select'),
                $btnGuess = $('.btn--guess');

            function init() {
                $pages.each( function() {
                    var $page = $(this),
                        isPlaylist = $page.hasClass('playlist');

                    if (isPlaylist) {
                        var $notification = $page.find('.notification'),
                            chooseText = randomResponse('choose');

                        $notification.text(chooseText);
                    }

                    $page.data('originalClassList', $page.attr( 'class' ) );
                });

                $pages.eq( current ).addClass( 'is-current' );

                // begin experience
                $btnBegin.on('click', function() {
                    var $introduction = $('#introduction');

                    $introduction.addClass('is-hidden');
                });

                // change text when playlist selected
                $guessSelect.on('change', function() {
                    var $notification = $(this).closest('.playlist').find('.notification'),
                        taunt = randomResponse('taunt');

                    $notification.text(taunt);
                });

                $btnGuess.on('click', function() {
                    var $currPlaylist = $(this).closest('.playlist');

                    guessCheck($currPlaylist);
                });

                $continue.on( 'click', function() {
                    if( isAnimating ) { return false; }

                    nextPage();

                    return true;
                });
            }

            function nextPage() {
                if( isAnimating ) { return false; }

                isAnimating = true;

                var $currPage = $pages.eq( current );

                if( current < pagesCount - 1 ) {
                    ++current;
                }
                else {
                    current = 0;
                }

                var $nextPage = $pages.eq( current ).addClass( 'is-current' ),
                    outClass = 'move-to-top', inClass = 'move-from-bottom';

                if( $nextPage.attr('id') === 'results' ) {
                    hideScore();
                }

                $currPage.addClass( 'page--' + outClass ).on( animEndEventName, function() {
                    $currPage.off( animEndEventName );

                    endCurrPage = true;

                    if( endNextPage ) { onEndAnimation( $currPage, $nextPage ); }
                } );

                $nextPage.addClass( 'page--' + inClass ).on( animEndEventName, function() {
                    $nextPage.off( animEndEventName );

                    endNextPage = true;

                    if( endCurrPage ) { onEndAnimation( $currPage, $nextPage ); }
                } );

                if( !support ) { onEndAnimation( $currPage, $nextPage ); }

                return true;
            }

            function onEndAnimation( $outpage, $inpage ) {
                endCurrPage = false;
                endNextPage = false;

                resetPage( $outpage, $inpage );

                isAnimating = false;
            }

            function resetPage( $outpage, $inpage ) {
                $outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
                $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' is-current' );
            }

            function randomResponse(responseType) {
                var response;

                switch(responseType) {
                    case 'choose':
                        response = chooseRandom(responseChoose);
                        break;
                    case 'empty':
                        response = chooseRandom(responseEmpty);
                        break;
                    case 'taunt':
                        response = chooseRandom(responseTaunt);
                        break;
                    case 'incorrect':
                        response = chooseRandom(responseIncorrect);
                        break;
                    case 'correct':
                        response = chooseRandom(responseCorrect);
                        break;
                    default:
                        return false;
                }

                return response;
            }

            function guessCheck($currPlaylist) {
                var $notification = $currPlaylist.find('.notification'),
                // owner of playlist
                    playlistOwner = $currPlaylist.attr('id').substring(9),
                // who you guess wrote the playlist
                    guess = $currPlaylist.find('.playlist-guess__select').val(),
                // and who they actually did
                    guessAuthored = playlists[guess].authored;

                if (guess) {
                    var answer = guessAuthored === playlistOwner ? 'correct' : 'incorrect';

                    updatePlaylist($currPlaylist, $notification, playlistOwner, answer);
                    updateScore(answer);
                } else {
                    var response = randomResponse('empty');

                    $notification.text(response);
                }

                return true;
            }

            function updatePlaylist($currPlaylist, $notification, playlistOwner, answer) {
                var response = randomResponse(answer),
                    playlistAuthor = playlists[playlistOwner].author,
                    $playlistAuthor = $currPlaylist.find('.playlist__author');

                $currPlaylist.removeClass('is-unguessed is-correct is-incorrect')
                    .addClass('is-' + answer);

                $notification.text(response);

                $playlistAuthor.text( playlistAuthor === 'dj' ? 'DJ' : capitaliseFirstLetter(playlistAuthor) );
            }

            function updateScore(answer) {
                if(answer === 'correct') {
                    correct++;
                    $('.score--correct').text(correct);
                    $('.tally').text(correct);
                } else if (answer === 'incorrect') {
                    incorrect++;
                    $('.score--incorrect').text(incorrect);
                }
            }

            function hideScore() {
                $('#playlists-scores').addClass('is-hidden');
            }

            function chooseRandom(array) {
                if (!array.length) { return false; }

                var random = array[ Math.floor( Math.random() * array.length ) ];

                random = random === 0 ? 1 : random;

                return random;
            }

            function capitaliseFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            init();

            return { init : init };
        })();
    });
});