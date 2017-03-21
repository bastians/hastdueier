<?php
    // answer set 1
    $answer1 = array(
                'headline' => 'Ja, riesen Kawenzmänner! &#128526;',
                'addText' => '',
                'metaDescription' => 'Ja, riesen Kawenzmänner! &#128526;',
                'metaMedia' => 'http://media3.giphy.com/media/62PP2yEIAZF6g/giphy.gif',
                'media' => '<iframe src="//giphy.com/embed/62PP2yEIAZF6g?html5=true" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
              );

    // answer set 2
    $answer2 = array(
                'headline' => 'Ja, aber schwer zu finden. &#128527',
                'addText' => '',
                'metaDescription' => 'Ja, aber schwer zu finden. &#128527',
                'metaMedia' => 'https://media.giphy.com/media/l3q2PZSVUUEsajBIY/giphy.gif',
                'media' => '<iframe src="//giphy.com/embed/l3q2PZSVUUEsajBIY?html5=true" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>'
              );

    // answer set 3
    $answer3 = array(
                'headline' => 'Ja. &#128515;',
                'addText' => '',
                'metaDescription' => 'Ja! &#128515;',
                'metaMedia' => 'https://media4.giphy.com/media/l0HlvcRyVJeO8Gmju/giphy.gif',
                'media' => '<iframe src="//giphy.com/embed/l0HlvcRyVJeO8Gmju?html5=true" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
              );

    // answer set 4
    $answer4 = array(
                'headline' => 'Nein. &#128532;',
                'addText' => 'Schade! Denn: Eier! Wir brauchen Eier!',
                'metaDescription' => 'Nein. &#128532;',
                'metaMedia' => 'https://img.youtube.com/vi/GMnBOQAxe4c/0.jpg',
                'media' => '<iframe width="533" height="300" src="https://www.youtube.com/embed/GMnBOQAxe4c?autoplay=1&rel=0&amp;controls=0" frameborder="0" allowfullscreen></iframe>
                '
              );

    // Define answer sets for lottery; answer 4 is used more often to increase possibility of this answer
    $random = array($answer1, $answer2, $answer3, $answer4, $answer4, $answer4);

    // Generate an answer set randomly
    $output = $random[array_rand($random)];
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Eier, wir brauchen Eier." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.hastdueier.de/index2.php" />
    <meta property="og:image" content="<?php echo $output[metaMedia]; ?>" />
    <meta property="og:description" content="Hast du Eier? <?php echo $output[metaDescription]; ?>" />

    <meta name="description" content="Eier, wir brauchen Eier. Hast du Eier? <?php echo $output; ?>">
    <meta name="keywords" content="Eier, Olli Kahn, Titan, dicke Eier, Brust, breite Brust, brauchen, wir brauchen Eier, keine Eier, Mut, Stärke, Männlichkeit">
    <meta name="author" content="Der Eiermann.">

    <title>Hast du Eier?</title>

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/custom.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700' rel='stylesheet' type='text/css'>

    <!-- Custom JS -->
    <script type="text/javascript" src="js/spin.min.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
    <!-- Header -->
    <header id="top" class="header">
        <div class="text-vertical-center">
            <div class="question">
                <h3>Hast du Eier?</h3>
                <br>
            </div>
            <div id="loader"></div>
            <div class="answer">
                <h1><?php echo $output[headline]; ?></h1>
                <p><?php echo $output[addText]; ?></p>
                <p><?php echo $output[media]; ?></p>
            </div>
            <br><br><br>
            <p>
                <span>
                    <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.hastdueier.de" data-text="Eier, wir brauchen Eier. Hast du Eier? <?php echo $output[headline]; ?>" data-hashtags="eier,wirbraucheneier">Tweet</a>
                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                </span>
                <span>
                    <iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.hastdueier.de&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21&amp;appId=313614762006562" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px; width:90px;" allowTransparency="true"></iframe>
                </span>
            </p><br><br><br>
            <p>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <!-- 468x60 - Linkanzeige (hastdueier.de) -->
                <ins class="adsbygoogle"
                     style="display:inline-block;width:468px;height:60px"
                     data-ad-client="ca-pub-6782357376691520"
                     data-ad-slot="5274690412"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </p>
        </div>
    </header>
     <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script>
    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-3029030-17', 'auto');
      ga('send', 'pageview');

    </script>
</body>

</html>