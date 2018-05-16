$(document).ready(function () {
    $('#video').get(0).play();
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    $(".popup__close").click(function () {
        window.location.href = 'index.html';
    });
    $("#inscrever").click(function () {
        var emailV = $('#email').val();
        if (emailV.trim() != '' && emailV.trim() != undefined) {
            var f = document.createElement('form');
            f.action='http://2csistemas.com.br/email/send.php';
            f.method='POST';
            //f.target='_blank';
            //f.enctype="multipart/form-data"
            
            var k=document.createElement('input');
            k.type='hidden';k.name='email';
            k.value=emailV;
            f.appendChild(k);
            
            
            
            //var z=document.getElementById("FileNameId")
            //z.setAttribute("name", "IDProof");
            //z.setAttribute("id", "IDProof");
            //f.appendChild(z);
            
            document.body.appendChild(f);
            f.submit()
            // var xhttp = new XMLHttpRequest();
            // xhttp.onreadystatechange = function () {
            //     if (this.readyState == 4 && this.status == 200) {
            //         console.log('ok');
            //     } else {
            //         $('#email').val('');
            //         $('#msgSpam').html('<br /><br /><b class="text-success">Inscrito com sucesso!<b/>');
            //     }
            // };
            // xhttp.open("POST", "http://2csistemas.com.br/email/send.php", true);
            // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // xhttp.send("email=" + emailV);
        }
    });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width');

        $(this).width(windowWidth);

        if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

// Set the date we're counting down to
var countDownDate = new Date("Aug 01, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in Day element
    document.getElementById("day").innerHTML = days;
    // Output the result in hours element
    document.getElementById("hours").innerHTML = hours;
    // Output the result in minutes element
    document.getElementById("minutes").innerHTML = minutes;
    // Output the result in seconds element
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
