var displayJson;

function initMessage(string) {
	var app = new Vue({
		el: '#shout_out',
		data: {
			message: string
		}
	});
}

function loadCatigory(Catigory) {
	console.log(Catigory);
	var myurl="https://ghibliapi.herokuapp.com/";
	if (Catigory === 'Films') {
		myurl += "films"
	}
	else if (Catigory === 'Characters') {
		myurl += "people"
	}
	else if (Catigory === 'Locations') {
		myurl += "locations"
	}
	else {
		myurl += Catigory;
	}

	$.ajax({
		url : myurl,
		cataType : "json",
		success : function(json) {
			console.log("here")
			console.log(document.getElementById(Catigory).lastChild.previousElementSibling);
			var id = "#" + Catigory + "_response";
			console.log(id)
			console.log($(id))
			console.log(json);
			$(id).html(parseContent(json));
			/*var html = "";
			console.log(json);
			for(x in json) {
				html += makeAccordion(x["name"]);
				html += makePannel(x);
			}
			console.log(html);
			$(id).html(html);*/
		}
	});
}

function togleAccordion(env) {
	//console.log(env.classList);
	var div = env.nextElementSibling;
	//console.log(div.classList);
	if(env.classList.contains('active')) {
		env.classList.remove('active');
		toggle(div,'visable');
	}
	else {
		var items = document.getElementsByClassName('accordion')
		//items.prototype.forEach(
		//	function(x) {
		for(var i=0;i<items.length;i++) {
			x=items[i];
				if(x.classList.contains('active')) {
					x.classList.remove('active');
					toggle(x.nextElementSibling,'visable');
				}
		//	})
		}
		env.classList.add('active');
		toggle(div,'visable');
	}
}

function toggle(env, trait){
	console.log(env.classList);
	if (typeof env !== 'undefined'){
		console.log(trait);
		console.log(env.style.display);
		if (env.style.display === "block"){
			console.log('display was block');
			env.style.display = "none";
		}
		else{
			console.log('display not block');
			env.style.display = "block";
		}
	}
}

function openTab(evt, Catigory) {
	    var i, tabcontent, tablinks;
	    tabcontent = document.getElementsByClassName('tabcontent');
	    for (i = 0; i < tabcontent.length; i++) {
		            tabcontent[i].style.display = "none";
		        }
	    tablinks = document.getElementsByClassName('tablinks');
	    for (i = 0; i < tablinks.length; i++) {
		            tablinks[i].className = tablinks[i].className.replace(" active", "");
		        }
	    document.getElementById(Catigory).style.display = "block";
	    evt.currentTarget.className += " active";

	    loadCatigory(Catigory);
}

function parseContent(json) {
	console.log(json);
	var html = '';
	for(var x in json) {
		console.log('json is ' + json[x]);
		console.log('button for ' + json[x]["name"]);
		html += makeAccordion(json[x]["name"]);
		html += makePannel(json[x]);
	}
	return html;
}

function PostLocatoin_response(){
	var field = document.getElementById('#Location_response');
	// attach json to field somehow
}

var Character_response = new Vue({
	el: '#Character_response',
	data: {
		response: parseContent("Characters")
	}
});

var Film_response = new Vue({
	el: '#Film_response',
	data: {
		response: parseContent("Films")
	}
});

function makeAccordion(title) {
	var html = '';
	html += '\n\t<button class="accordion" onclick="togleAccordion(this)">' + title + '</button>\n';
	console.log("button html:\n" + html);
	return html;
}

function makePannel(json) {
	console.log(json);
	var html = '';
	html += '\t<div class="panel">\n\t\t<ul>\n';
	var keys = Object.keys(json);
	for(var i=0;i<keys.length;i++) {
		html += '\t\t\t<li>';
		if(JSON.stringify(json[keys[i]]).match(/http/g)) {
			html += '<a href="'+json[keys[i]]+'">'+keys[i]+'</a>';
		}
		else {
 			html += keys[i] + ': ' + json[keys[i]];
		}
		html +=  '</li>\n';
	}
	html += '\t\t</ul>\n\t</div>\n';
	console.log("panal html:\n" + html);
	return html;
}


//on lode html into document, set eventListners on accordion buttons.


