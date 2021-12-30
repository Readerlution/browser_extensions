// youtube video screen
var skip_button = document.getElementsByClassName("ytp-ad-skip-button"); // grab skip_button during ads
skip_button[0].click(); // skip the ad instantly

// small ads that are overlayed on top of youtube screens
var small_ad = document.getElementsByClassName("ytp-ad-overlay-image"); // grab ad element
small_ad[0].parentNode.removeChild(small_ad[0]); // delete ad element