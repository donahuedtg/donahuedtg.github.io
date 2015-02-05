jQuery().ready(function () {
    $('.tabs a').click(function () {
        $this = $(this);
        $('.panel').hide();
        $('.tabs a.active').removeClass('active');
        $this.addClass('active').blur();
        var panel = $this.attr('href');
        $(panel).fadeIn(1500);
        return false;
    });

    $('.tabs li:first a').click();

// za Contact Pan
    $('.blurText').blur(function () {
        $(this).val($(this).val().toUpperCase());
        
        

    });


    //$('#btnContactSubmit').click(function () {
    //    var firstName = $('#firstName').val();
    //    var lastName = $('#lastName').val();
    //    var phone = $('#phone').val();
    //    var email = $('#email').val();


    //    $('#contactDetails').append('<legend>' + "Contact Details of " + firstName + '</legend>')
        
    //    $('#contactDetails').append('<li>' + firstName + '</li>')
    //    $('#contactDetails').append('<li>' + lastName + '</li>')
    //    $('#contactDetails').append('<li>' + phone + '</li>')
    //    $('#contactDetails').append('<li>' + email + '</li>')

    //});


    $('#btnContactSubmit').click(function (data) {
        $('#contactDetails').append('<legend>' + "Contact Details " + '</legend>')
        
        /* za prepisvane
        for ( var i = 0, l = arr.length; i < l; i++ ) {
        sum += arr[ i ];
            }

        */

        var details = [];

        details.push( $('#firstName').val());
        details.push( $('#lastName').val());
        details.push( $('#phone').val());
        details.push( $('#email').val());

        console.log(details);

        $.each(details, function (key, value) {

            $('#contactDetails').append('<p>' + value + '</p>');
            
        });
        
    });
    

    $('#letter-a').click(function () {
        $.getScript('ScriptJson.js');
        return false;
    });


});
