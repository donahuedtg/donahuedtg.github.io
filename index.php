<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>DtgStudio / Home</title>

    <!-- Bootstrap core CSS -->
    <link href="Bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="marka/Bootstrap/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="Bootstrap/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="Style/carousel.css" rel="stylesheet">
    <link href="Style/style.css" rel="stylesheet">

    <!--Script of mine -->
    <script src="Scripts/jquery.js"></script>

    
  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <!--header and menu part
    ==============================================-->

        <?php require_once('Page/header-main.php');?>

    <!--end of header and menu part
    ==============================================-->


    <!-- Carousel
    ================================================== -->

        <?php require_once('Page/slider-main.php');?>

    <!--end of Carousel part
    ===================================================-->    

    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <!-- FOOTER -->

         <?php //require_once('Page/footer-main.php'); ?>

      <!-- end of FOOTER -->
    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <script src="Bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
