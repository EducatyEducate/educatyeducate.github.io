url = new URL(window.location.href);
url = url.searchParams;
htmlURI = url.get("html");
cssURI = url.get("css");
jsURI = url.get("js");
htmlArea = document.querySelector("#htmlCode");
cssArea = document.querySelector("#cssCode");
jsArea = document.querySelector("#jsCode");
if(htmlURI){
	htmlArea.value = htmlURI;
}
if(cssURI){
	cssArea.value = cssURI;
}
if(jsURI){
	jsArea.value = jsURI;
}
if(htmlURI || cssURI || jsURI){
	showPreview();
}