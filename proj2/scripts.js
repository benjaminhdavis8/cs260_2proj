function openSearch(evt, Catigory) {
	    var i, tabcontent, tablinks;
	    console.log(Catigory);
	    tabcontent = document.getElementsByClassName("tabcontent");
	    for (i = 0; i < tabcontent.length; i++) {
		            tabcontent[i].style.display = "none";
		        }
	    tablinks = document.getElementsByClassName("tablinks");
	    for (i = 0; i < tablinks.length; i++) {
		            tablinks[i].className = tablinks[i].className.replace(" active", "");
		        }
	    document.getElementById(cityName).style.display = "block";
	    evt.currentTarget.className += " active";
}


function openOld(evt, viewName) {
	var i, tabcontent, tablinks;

	// Hide all elements with class="tabcontent"
	tabcontent = document.getElementsByClassName("tabcontent");
	tabcontent.map(	function(view) {
	view.style.display = "none";
	});

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	tablinks.map(function(view) {
		view.className = view.className.replace(" active", "");
	}

	// Show the curent tab and add an "active" class to it's button
	document.getElementById(viewName).style.display = "block";
	evt.currentTarget.className += " active";
}

var app = new Vue({
	el: '#shout_out',
	data: {
		message: 'Click on a tab to get started'
	}
})

var contentLoader = new Vue({
	el: '#content',
	data: {

	}
}
