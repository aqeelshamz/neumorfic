$(document).ready(
            function () {
                $('.dropbtn').click(
                    function () {
                        $('.list').toggleClass('listtoggle');
                        $('.dropbtn').toggleClass('dropbtn-toggle');
                    }
                )

                $('.d-list').click(
                    function () {
                        $('.dropbtn').attr('value', $(this).attr('value'));
                        $('.list').toggleClass('listtoggle');
                        $('.dropbtn').toggleClass('dropbtn-toggle');
                    }
                )

                $('.progress-bar').hover(
                    function() {
                        $('.pg-text').text(parseFloat(parseInt($('.progress').css('width')) * 100 / parseInt($('.progress-bar').css('width'))).toFixed(0) + "%");
                        $('.percentage').toggleClass('pg-toggle');
                    }
                )

            }
        );