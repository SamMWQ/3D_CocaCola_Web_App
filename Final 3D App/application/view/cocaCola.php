<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <!-- <meta charset="utf-8"> -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <!-- X3dom -->
    <link rel='stylesheet' type='text/css' href='../application/css/x3dom.css'>

    <title>3D App (234974) - H7006: Web 3D Applications</title>
    <link rel="stylesheet" href="../application/css/bootstrap.css" />
    <link rel="stylesheet" href="../application/css/custom.css" />
</head>

<body id="body">
    <div class="navbar_footer"></div>
    <!-- Navugation dropdown bar: https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp -->
    <nav id="header" class="navbar navbar_header">
        <!-- CocaCola Logo -->
        <div class="logo">
            <a id="show-home" class="navbar-brand">
                <h1>1</h1>
                <h1>oca</h1>
                <h2>Cola</h2>
                <h3>Journey</h3>
                <p>Refreshing the world, one story at a time</p>
            </a>
        </div>

        <div class="navbar-toggler" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="navbar-menu">
            <li class="nav-item">
                <a id="show-about" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a id="show-models" class="nav-link">Products</a>
            </li>
            <li class="nav-btn">
                <a id="show-contact" class="button" data-toggle="modal" data-target="#contactInfo">Contact</a>
            </li>
        </ul>

        <!-- Modal -->
        <div id="contactInfo" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-header">
                    <h4 class="modal-title">© 2022/23 Web 3D Applications (234974)</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

            </div>
        </div>
    </nav>

    <!-- Home page block element -->
    <div id="home" class="container-fluid main_contents">
        <div class="row">
            <div class="col-sm-12">
                <!-- Carousel/Auto-sliding images: https://www.w3schools.com/bootstrap4/bootstrap_carousel.asp -->
                <div id="upperPreview" class="upper carousel" data-ride="carousel">
                    <!-- Indicators -->
                    <ul class="carousel-indicators">
                        <li data-target="#upperPreview" data-slide-to="0" class="active"></li>
                        <li data-target="#upperPreview" data-slide-to="1"></li>
                        <li data-target="#upperPreview" data-slide-to="2"></li>
                    </ul>

                    <!-- The slideshow -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div id="main_3d_image">
                                <div id="main_text" class="col-xs-12 col-sm-6">
                                    <div id="title_home"></div>
                                    <div id="subtitle_home"></div>
                                    <div id="text_home"></div>
                                    <div id="link_home"></div>
                                </div>
                            </div>
                            <!-- Social Gallery 1 -->
                            <div class="card text-left">
                                <div class="card-header gallery-header">
                                    <div id="social_prompt1" class="card-title"></div>
                                </div>
                                <div class="card-body">
                                    <!-- Dynamically generated image gallery using JS and PHP -->
                                    <div class="gallery" id="gallery_coke"></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div id="main_3d_image2">
                                <div id="main_text" class="col-xs-12 col-sm-6">
                                    <div id="title2_home"></div>
                                    <div id="text2_home"></div>
                                    <div id="link2_home"></div>
                                </div>
                            </div>
                            <!-- Social Gallery 2 -->
                            <div class="card text-left">
                                <div class="card-header gallery-header">
                                    <div id="social_prompt2" class="card-title"></div>
                                </div>
                                <div class="card-body">
                                    <!-- Dynamically generated image gallery using JS and PHP -->
                                    <div class="gallery" id="gallery_appletiser"></div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div id="main_3d_image3">
                                <div id="main_text" class="col-xs-12 col-sm-6">
                                    <div id="title3_home"></div>
                                    <div id="text3_home"></div>
                                    <div id="link3_home"></div>
                                </div>
                            </div>
                            <!-- Social Gallery 3 -->
                            <div class="card text-left">
                                <div class="card-header gallery-header">
                                    <div id="social_prompt3" class="card-title"></div>
                                </div>
                                <div class="card-body">
                                    <!-- Dynamically generated image gallery using JS and PHP -->
                                    <div class="gallery" id="gallery_powerade"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End of home page -->

    <div id="about" class="about-popover" data-toggle="popover" data-placement="bottom" data-trigger="hover"
        data-content="This page provides information about our website.">About this page</div>

    <!-- Models page block element -->
    <div id="models" class="container-fluid main_contents">
        <!-- https://tympanus.net/codrops/2022/01/05/crafting-scroll-based-animations-in-three-js/ -->
        <canvas class="webgl"></canvas>

        <section class="main-model-description">
            <div id="title_cola"></div>
            <div id="title_apple"></div>
            <div id="title_power"></div>
            <p style="color: red;">(No matter how hard I tried, I couldn't load my models instead of the placeholder
                torus. My models are at the bottom.)</p>
            <a class="model-page-link" onClick={handleFindOutMore}>Find out more</a>
        </section>

        <section class="more-model-description">
            <div id="text_cola"></div>
            <div id="text_apple"></div>
            <div id="text_power"></div>
            <a class="go-to-model-button" onClick={handleGoToModel}>Go to model</a>
        </section>

        <section class="model-display">
            <button class="model-show-button">View</button>
            <!-- X3D Models -->
            <div>

                <!-- Place the X3D code here -->
                <div class="model3D">
                    <x3d id="wire">
                        <scene>
                            <Switch whichChoice="0" id='SceneSwitch'>
                                <transform>
                                    <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();"
                                        url="../application/assets/x3d/coke/coke_simplified.x3d"> </inline>
                                </transform>
                                <transform>
                                    <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();"
                                        url="../application/assets/x3d/appletiser/appletiser_simplified.x3d"> </inline>
                                </transform>
                                <transform>
                                    <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();"
                                        url="../application/assets/x3d/powerade/powerade_simplified.x3d"> </inline>
                                </transform>
                            </Switch>
                        </scene>
                    </x3d>
                </div>
                <div id="x3dCreationMethod_coke" class="card-text drinksText"></div>
                <div id="x3dCreationMethod_sprite" class="card-text drinksText"></div>
                <div id="x3dCreationMethod_pepper" class="card-text drinksText"></div>
            </div>

            <!-- Triple column -->
            <div id="tripleColumn" class="row hidden">
                <!-- 1st Cola -->
                <div class="col-sm-4">
                    <div class="card">
                        <h5 class="card-title">Models</h5>
                        <div class="card-body">
                            <button class="btn btn-secondary btn-block" type="button"
                                onMouseUp="cokeScene(); cokeDescription();">Coca-Cola</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onMouseUp="appleScene(); appleDescription();">Appletiser</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onMouseUP="powerScene(); powerDescription();">Powerade</button>
                        </div>
                    </div>
                </div>
                <!-- 2nd Cola -->
                <div class="col-sm-4">
                    <div class="card">
                        <h5 class="card-title">Views</h5>
                        <div class="card-body">
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraFront();">Front</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraBack();">Back</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraLeft();">Left</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraRight();">Right</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraTop();">Top</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraBottom();">Bottom</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="cameraIso();">Iso</button>
                        </div>
                    </div>
                </div>
                <!-- 3rd Cola -->
                <div class="col-sm-4">
                    <div class="card">
                        <h5 class="card-title">Miscellaneous</h5>
                        <div class="card-body">
                            <button class="btn btn-secondary btn-block" type="button" onclick="spin();">Spin</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="stopRotation();">Stop</button>
                            <button class="btn btn-secondary btn-block" type="button"
                                onclick="wireFrame();">Wire</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div> <!-- End of models page -->

    <br> <!-- Temporary break until we style the template -->
    <!-- Footer -->
    <nav id="footer" class="navbar navbar_footer">
        <div class="container-fluid">
            <div class="navbar-text float-left copyright">
                <p>
                    <span class="align-baseline">
                        &copy 2022/23 Web 3D Applications (234974) |
                    </span>
                </p>
            </div>
            <div class="navbar-text float-right social">
                <a href="#"><i class="fab fa-facebook-square fa-2x" style="font: size 20px; color: #BC8A82;"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x" style="font: size 20px; color: #BC8A82;"></i></a>
                <a href="#"><i class="fab fa-google-plus fa-2x" style="font: size 20px; color: #BC8A82;"></i></a>
                <a href="#"><i class="fab fa-github-square fa-2x" style="font: size 20px; color: #BC8A82;"></i></a>
            </div>
        </div>
    </nav>

    <!-- JavaScript: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="../application/js/jquery-3.6.3.js"></script>
    <script src="../application/js/popper.min.js"></script>
    <script type="text/javascript" src="../application/js/bootstrap.js"></script>
    <script src="../application/js/custom.js"></script>

    <!-- Include the x3dom JavaScript -->
    <script type='text/javascript' src='../application/js/x3dom.js'></script>

    <script src="https://kit.fontawesome.com/6c3bb5f3d9.js" crossorigin="anonymous"></script>

    <!-- Gallery -->
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="../application/js/gallery_generator.js"></script>

    <script type="text/javascript" src="../application/js/swap_restyle.js"></script>

    <script src="../application/js/getJsonData.js"></script>

    <script src="../application/js/model_interactions.js"></script>

    <script src="../application/js/three.min.js"></script>
    <script src="../application/js/gsap.min.js"></script>
    <script src="../application/js/model_transitions.js"></script>
</body>

</html>