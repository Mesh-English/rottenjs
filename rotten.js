function rotten(selector){
	let prevDisplay='';
	const obj = {
		el: document.querySelector(selector),
		attr: (attr, value) => {
			if (value == undefined){
				return obj.el.getAttribute(attr);
			} else {
				obj.el.setAttribute(attr, value);
			}
		},
		css: (property, value) => {
			let new_value = `;${obj.el.getAttribute('style')};${property}:${value}`
			obj.el.style = new_value;
		},
		hide: (time) => {
			if (time == undefined){
				prevDisplay = obj.el.style.display;
				obj.el.style.display = 'none';
			} else {
				setTimeout(function(){
					obj.el.style.display = 'none';
				},time)
			}
		},
		show: (time) => {
			if (time == undefined){
				obj.el.style.display = prevDisplay;
			} else {
				setTimeout(function(){
					obj.el.style.display = prevDisplay;
				},time)
			}
		},
		text: (value) => {
			if (value == undefined){
				return obj.el.innerHTML;
			} else {
				obj.el.innerHTML=value;
			}
		},
		html: (value) => {
			if (value == undefined){
				return obj.el.outerHTML;
			} else {
				obj.el.outerHTML=value;
			}
		},
		on: (event, callback) => {
			document.addEventListener(event, callback);
		},
		append: (value) => {
			obj.el.innerHTML=`${obj.el.innerHTML}${value}`;
		},
		prepend: (value) => {
			obj.el.innerHTML=`${value}${obj.el.innerHTML}`;
		},
		remove: (value) => {
			obj.el.outerHTML='';
		},
		empty: (value) => {
			obj.el.innerHTML='';
		},
	}
	return obj;
}
const rottenUI = {
	setBGVideo: function (obj){
		let a = document.querySelector("body");
		a.innerHTML = '<video style="position:fixed; right:0; top:0; min-width:100%; min-height:100%; width:auto; height:auto; z-index:-1" autoplay loop class="baceo-vid" muted plays-inline><source src=' + obj.path + ' type=video/' + obj.type + '></video>' + a.innerHTML;
		if (obj.style != undefined){
			let b = document.querySelector(".baceo-vid").style;
			b = b + obj.style;
		}
	},
	setBGImage: function(path){
		let a = document.querySelector("body");
		a.innerHTML = `<img style="position:fixed; right:0; top:0; min-width:100%; min-height:100%; width:auto; height:auto; z-index:-1" src="${path}"></img> ${a.innerHTML}`;
	},
	setTitle: function(title){
		document.querySelector('title').innerHTML=title;
	},
	setLogo: function(path){
		let a = document.querySelector('head');
		a.innerHTML = `<link rel='icon' href='${path}'></link>${a.innerHTML}`;
	},
}