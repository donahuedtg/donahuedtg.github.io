jQuery().ready(function () {
	
	$('#addValuta').val('Add Currency (XXX)');
	$('#addFiks').val('Add Fixing');
	$('#fixsing').val('1.95583');
	
    //var Answer = $('.answer');

    //Answer.hide();

    //var Qestion = $('#main h2');
    
    //Qestion.click(function () {
    
      //  $(this).next().toggle('slow')
      //  $('#login').show();
    //});
	
    //Qestion.toggle(
    //function () {
    //    $(this).next().fadeIn('slow')
    //},
    //function () {
    //    $(this).next().fadeOut('slow')
    //});

    $('#show').hover(
    function()
    {
        $(this).stop().animate({
            
            width: '150px'
        },5000)
        
    },
    function ()
    {
        $(this).stop().animate({
            
            width:'800px'
        },8000)
    });
	

		//Answer.click(function (){
			//$(this).animate(
			//{
				//width: '250px',
				//height:'250px'
				
			//},
			//1000,'ease');
		
    //});

    
    
    

    //$('section img').each(
    //    function () {
    //var loading = ['Pics/IMG_1426.JPG',
    //             'Pics/IMG_1427.JPG',
    //             'Pics/IMG_1428.JPG',
    //             'Pics/IMG_1429.JPG'];
    //var imgS = [];
    //for(var i=0; i<loading.lenght; i++ )
    //{
    //    imgS[i] = new Image();
    //    imgS[i] = src.loading[i];
    //}
      
    //    });

    $('#show').click(function () {
        $('#gallery').toggle('slow');
    });
    
    $('#gallery img').each(function () {
        var imgFile = $(this).attr('src');
        console.log(imgFile);
        var preloadImage = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        console.log(imgExt);
        preloadImage.src = imgFile.replace(imgExt, '_h$1');
        console.log(preloadImage)

        $(this).hover(function () {
            $(this).attr('src', preloadImage.src);
        },
        function () {
            $(this).attr('src', imgFile);
        });//end hover


    });//edn each

    $('#galleryNew a').click(function (evt) {
        evt.preventDefault();
        var imgPath = $(this).attr('href');
        console.log(imgPath);
        var oldImage = $('#photo img');
        var newImage = $('<img src="' + imgPath + '">');
        console.log(newImage);
        newImage.hide();
        $('#photo').prepend(newImage);
        newImage.fadeIn(2000);//end fadeIn
        console.log(newImage);
        oldImage.fadeOut(1000, function () {
            $(this).remove();
        });// end fadeOut
        console.log(oldImage);




    });//end click
    
    $('#galleryNew a:first').click();



    // za indexEURandBGL
    var fixsingEUR = 1.95583;
    var fixsingUSD = 1.45450;
    var fixsingGBP = 2.58570;
    var fixsingXXX = null;
    //console.log(fixsingXXX)

    

    function ConvertXXX() {
        var fixsing = fixsingXXX;
        //console.log(fixsing)
        var converNumber = $('#textVal').val();
        var converted = converNumber * fixsing;
        converted = converted.toFixed(2);
        $('#textBGL').val(converted);
    }

    function ConvertEuro() {
        var fixsing = fixsingEUR;
        
        var converNumber = $('#textVal').val();
        var converted = converNumber * fixsing;
        converted = converted.toFixed(2);
        $('#textBGL').val(converted);
    }

    function ConvertDollar() {
        var fixsing = fixsingUSD;
        var converNumber = $('#textVal').val();
        var converted = converNumber * fixsing;
        converted = converted.toFixed(2);
        $('#textBGL').val(converted);
    }

    function ConvertLira() {
        var fixsing = fixsingGBP;
        var converNumber = $('#textVal').val();
        var converted = converNumber * fixsing;
        converted = converted.toFixed(2);
        $('#textBGL').val(converted);
    }

    function ConvertLev() {
        var fixsing = 1.00000;
        var converNumber = $('#textVal').val();
        var converted = converNumber * fixsing;
        converted = converted.toFixed(2);
        $('#textBGL').val(converted);
    }



    $('#select').on('change', function () {
        var $fiksS = $('#addValuta').val();

        if ($('#select').val() == 'EUR') {
            $('#fixsing').val(fixsingEUR);
            $('#hide').show();
        }
        else if ($('#select').val() == 'USD') {
            $('#fixsing').val(fixsingUSD);
            $('#hide').show();
        }
        else if ($('#select').val() == 'BGL') {
            $('#fixsing').val('');
            $('#hide').hide();
        }
        else if ($('#select').val() == $fiksS) {
            $('#fixsing').val(fixsingXXX);
            //console.log(fixsingXXX)
            $('#hide').show();
        }
        else {
            $('#fixsing').val(fixsingGBP);
            $('#hide').show();
        }

    });
    
    


        $('#addValuta').blur(function () {
            $(this).val($(this).val().toUpperCase());

            //if (isNaN(textV)) {
            //    //$('#textVal').append('<p>Въведете число</p>');
            //    alert('Въведете число');
            //}
        

        });

        $('#reset').click(function () {
            $('#submit').val('Convert');
            $('#addFiks').val('');
            $('#addValuta').val('');
        });

    $('#btnValuta').click(function () {
        fixsingXXX = $('#addFiks').val();
        //console.log(fixsingXXX);
        var $fiks = $('#addValuta').val();
        $('#select').append('<option>' + $fiks + '</option>')

        });

    

    $('#submit').click(function (evt) {

        if ($('#select').val() == 'EUR') {
            ConvertEuro()
            
        }
        else if ($('#select').val() == 'USD') {
            ConvertDollar()
        }
        else if ($('#select').val() == 'GBP') {
            ConvertLira()
        }
        else if ($('#select').val() == 'BGL')
            {
            ConvertLev()
        }
        else {
            ConvertXXX()
        }

        

        $('#submit').val('.. converted')

        evt.preventDefault();

    });//end submit
    
    
    
    
    //$('#select').on('change', function () {
    //    if ($(this).val() == 'EUR') {
    //        ConvertEuro();
    //    }
    //});
       


   

});
