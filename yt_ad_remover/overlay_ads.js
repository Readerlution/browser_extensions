var is_youtube = document.location.host === "www.youtube.com";

if (is_youtube) {

		// full screen ads with skip button
		var check_skipbtn_exist = setInterval(function() {
			var skip_button = document.getElementsByClassName("ytp-ad-skip-button"); // grab skip_button during ads
			if ( skip_button.length)  {
				skip_button[0].click(); // skip the ad instantly
			}
		}, 100);

		// small ads that are overlayed on top of youtube screens
		var check_smallAd_exist = setInterval(function() {
			var small_ad = document.getElementsByClassName("ytp-ad-overlay-close-button"); // grab ad element
			if ( small_ad.length ) {
				small_ad[0].click(); // delete ad element
			}
		}, 100);

		// text ads overlayed on top of screen
		var check_textAd_exist = setInterval(function() {
			var textAd = document.getElementsByClassName("ytp-ad-overlay-slot"); // grab ad element
			if ( textAd.length ) {
				document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click(); // delete ad element
			}
		}, 100);
}