console.log('New Typer!!!!!!!!!!!!');

javascript:(function(){											// wrapper to load jQuery, if necessary
	var v = "2.2.4";												// the minimum version of jQuery we want
	
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) { // check prior inclusion and version
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js"; //Load the version of jquery we specify//
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet(); //once jQuery is loaded, then load our bookmarklet
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet(); //or if jquery is already loaded then load our bookmarklet immediatly
	}
	
	

	function initMyBookmarklet() {
		(window.myBookmarklet = function() { // Your code goes here 
			
			
			$( "p" ).replaceWith( "<h2><span class="typer" id="main" data-words="word, sound, noise" data-colors="white" data-delay="100" data-deleteDelay="1000"></span><span class="cursor" data-owner="main"></span></h2>" );



		})();	// end your code block
	}

})();