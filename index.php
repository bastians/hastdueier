<?php
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

require 'lib/answers-store.php';
use hastdueier\AnswersStore;

// Generate an answer set randomly
$answer = AnswersStore::instance()->random();
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="Eier, wir brauchen Eier." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.hastdueier.de/" />
    <meta property="og:image" content="<?php echo $answer['mediaUrl']; ?>" />
    <meta property="og:description" content="Eier, wir brauchen Eier. Hast du Eier? <?php echo $answer['title']; ?>" />

    <meta name="description" content="Eier, wir brauchen Eier. Hast du Eier? <?php echo $answer['title']; ?>">
    <meta name="keywords" content="Eier, Olli Kahn, Titan, dicke Eier, Brust, breite Brust, brauchen, wir brauchen Eier, keine Eier, Mut, Stärke, Männlichkeit">
    <meta name="author" content="Der Eiermann.">

    <title>Hast du Eier?</title>

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Bootstrap Core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="assets/css/custom.css" rel="stylesheet">


    <!-- Custom Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700' rel='stylesheet' type='text/css'>
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
                <h1><?php echo $answer['title']; ?></h1>
                <p><?php echo $answer['description']; ?></p>
                <p><?php echo $answer['mediaEmbed']; ?></p>
            </div>
            <br><br><br>
            <p>
                <span>
                    <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.hastdueier.de" data-text="Eier, wir brauchen Eier. Hast du Eier? <?php echo $answer['title']; ?>" data-hashtags="eier,wirbraucheneier">Tweet</a>
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
