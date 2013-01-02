// JavaScript Document
var checkRoots = function(a, b, c) {
		var a = parseInt(document.getElementById('a').value);
		var b = parseInt(document.getElementById('b').value);
		var c = parseInt(document.getElementById('c').value);
		var check = (Math.pow(b, 2)) - (4) * (a) * (c);
if (check > 0) {
	document.getElementById('rootDisplay').innerHTML = "there are two real roots.";
}
else if (check < 0) {
	document.getElementById('rootDisplay').innerHTML = "there are no real roots.";
}
else {
	document.getElementById('rootDisplay').innerHTML = "there is one real root.";
}
};
 var formula = function(a, b, c) {
		var a = parseInt(document.getElementById('a').value);
		var b = parseInt(document.getElementById('b').value);
		var c = parseInt(document.getElementById('c').value);
		document.getElementById('valueDisplay').innerHTML = (((-1 * b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2*a));
		document.getElementById('valueDisplay2').innerHTML = (((-1 * b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2*a));
}