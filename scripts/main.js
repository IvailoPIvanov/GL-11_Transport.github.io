$(document).ready(function () {
    $('.carousel').slick({
        autoplay : true ,
        autoplaySpeed : 3000,
        speed:1500

    });
});

/*--- this remove all function from slick function ---*/


$("#a").click(function (event) {
    event.stopPropagation();
});

/* first page select */
var paleteSize = 0;

document.getElementById('eur1').onclick = function replaceContentInContainer(eur1, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur1').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.12;
        return paleteSize;
    }, 100);
};

document.getElementById('eur2').onclick = function replaceContentInContainer(eur2, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur2').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.13;
        return paleteSize;
    }, 100);
};

document.getElementById('eur3').onclick = function replaceContentInContainer(eur3, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur3').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.14;
        return paleteSize;
    }, 100);
};

document.getElementById('eur6a').onclick = function replaceContentInContainer(eur6a, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur6a').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.20;
        return paleteSize;
    }, 100);
};

document.getElementById('eur6b').onclick = function replaceContentInContainer(eur6b, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur6b').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.18;
        return paleteSize;
    }, 100);
};

document.getElementById('eur6c').onclick = function replaceContentInContainer(eur6c, dropdown) {
    document.getElementById('dropdown').innerHTML = document.getElementById('eur6c').innerHTML;
    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
        paleteSize = 0.12;
        return paleteSize;
    }, 100);
};


/* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */

document.getElementById('dropdown').onclick = function () {

    setTimeout(function () {
        document.getElementById('my_drop_down').classList.toggle("show");
    }, 100);

};
// Close the dropdown if the user clicks outside of it

/* first page range */

var sliders = document.querySelectorAll('.input_range');

for (var sliderI = 0; sliderI < sliders.length; sliderI++) {
    var sliderValue = sliders[sliderI].querySelector('.range-slider__value');
    var sliderRangeValue = sliders[sliderI].querySelector('.range-slider__range').value;

    sliderValue.innerText = sliderRangeValue;
}

document.getElementById('form').onchange = function (event) {
    var rangeSlider = event.target.parentNode;
    var rangeSliderValue = rangeSlider.querySelector('.range-slider__value');

    rangeSliderValue.innerText = event.target.value;
};

/* calculate price in quick quote */


document.getElementById("secondRange").onchange = function takeRangeValue() {
    var firstRange = document.getElementById("firstRange").value;
    var secondRange = document.getElementById("secondRange").value;
    var firstRangeFloat = parseFloat(firstRange);
    var secondRangeFloat = parseFloat(secondRange);


    secondRangeFloat = secondRangeFloat * 0.08;

    if (firstRangeFloat < 5) {
        firstRangeFloat = firstRangeFloat * 0.04;

    } else if (firstRangeFloat > 6 || firstRangeFloat < 11) {

        firstRangeFloat = Math.round(firstRangeFloat) * 0.03;
    }
    else {
        firstRangeFloat = firstRangeFloat * 0.02;
    }


    var b = firstRangeFloat + secondRangeFloat + paleteSize;

    //noinspection JSValidateTypes
    document.getElementById("priceSum").innerHTML = (b).toFixed(2) + ' $';
};

document.getElementById("firstRange").onchange = function takeRangeValue() {
    var firstRange = document.getElementById("firstRange").value;
    var secondRange = document.getElementById("secondRange").value;
    var firstRangeFloat = parseFloat(firstRange);
    var secondRangeFloat = parseFloat(secondRange);


    secondRangeFloat = secondRangeFloat * 0.08;

    if (firstRangeFloat < 5) {
        firstRangeFloat = firstRangeFloat * 0.04;

    } else if (firstRangeFloat > 6 || firstRangeFloat < 11) {

        firstRangeFloat = Math.round(firstRangeFloat) * 0.03;
    }
    else {
        firstRangeFloat = firstRangeFloat * 0.02;
    }


    var b = firstRangeFloat + secondRangeFloat + paleteSize;

    //noinspection JSValidateTypes
    document.getElementById("priceSum").innerHTML = (b).toFixed(2) + ' $';
};

/*--- This make numbers to roll ---*/

document.addEventListener('scroll', function () {
    if (document.body.scrollHeight <= document.body.scrollTop + window.innerHeight ) {
        rolls(document.querySelector('#packages1'));
        rolls(document.querySelector('#packages3'));
        rolls(document.querySelector('#packages4'));
        rolls(document.querySelector('#packages5'));
    }
});

function rolls() {
    var toNumber = 0 ;
    setTimeout(function () {
        var changeValue = document.getElementById('packages1');

        changeValue.innerHTML = parseInt(changeValue.innerHTML) + 1;

        if (parseInt(changeValue.innerHTML) !== toNumber) {
           document.getElementById('packages1'), toNumber;
        }
    }, 300);

};




/*--- Progress Bar ---*/

document.addEventListener('scroll', function () {
    if (document.body.scrollHeight <= document.body.scrollTop + window.innerHeight + 200) {
        frame(document.querySelector('#first'));
        frame(document.querySelector('#second'));
        frame(document.querySelector('#third'));
        frame(document.querySelector('#fourth'));
    }
});

function frame(element) {
    var animateTo = parseInt(element.getAttribute('data-animate-to'));
    var width = parseInt(element.style.width) || 0;

    if (width <= animateTo) {
        setTimeout(function () {
            width++;
            element.style.width = width + '%';
            frame(element);
        }, 20);
    }
}


// /*--- Map ---*/

function initMap() {
    var uluru = {lat: 42.733755, lng: 23.345286};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: '../images/OrderOnTheWayFilled-100.png'
    });

}

/*--- Smooth go to contact form ---*/

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});
