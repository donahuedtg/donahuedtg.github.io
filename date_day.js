jQuery().ready(function () {

    var d = new Date();

    var dateHP = d.toLocaleDateString();

    var dayHP = '';

    switch (d.getDay()) {
        case 0:
            dayHP = "Sunday";
            break;
        case 1 :
            dayHP = "Monday";
            break;
        case 2:
            dayHP = "Tuesday";
            break;
        case 3:
            dayHP = "Wednesday";
            break;
        case 4:
            dayHP = "Thursday";
            break;
        case 5:
            dayHP = "Friday";
            break;
        case 6:
            dayHP = "Sutarday";
            break;
    }

    $('.clock').append('<p class="dateDay">' + dayHP.toString() + ' ' + dateHP + '</p>');
    /*$('.clock').append('<p class="me">' + "Design by Dobromir DTG" + '</p>');*/     
    

    

    
    // Sunday 0
    // Monday 1
    // Tuesday 2
    // Wednesday 3
    // Thursday 4
    // Friday 5
    // Saturday 6
    
});


