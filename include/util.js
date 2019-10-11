// Idle Listener
var handle;
var idle_time = 30;
function restart() {
	clearTimeout(handle)
	handle = setTimeout(function(){
		window.location.href = 'attract.html';
	}, idle_time * 1000)
}

function add_idle_listener() {
	document.addEventListener('mousemove', restart)
}

// Loading Artifact
function load_artifact() {
	var artifact = new URLSearchParams(window.location.search).get('artifact');
	//console.log(artifact);
	get_info(artifact);
}

// JSON parsing
function get_info(name) {
	fetch('assets/info.json')
		.then((res) => res.json())
		.then((data) => parse_json(data, name));
}

function parse_json(json, name) {
	//console.log(json);
	for (let obj of json) if (obj.name == name) set_object(obj);
}

function set_object(object) {
	//console.log(object);

	// Model src
	document.getElementsByTagName('model-viewer')[0].setAttribute('src', object.model);

	// Object Title
	//document.getElementById('header').innerText = object.title;

	// Object Description
	let h = document.createElement('h1');
	h.innerText = object.title;
	document.getElementById('footer').appendChild(h);
	let p = document.createElement('p');
	p.innerText = object.description;
	document.getElementById('footer').appendChild(p);
}