// JavaScript Document
var a, b, c;

var setVariables = function() {
		a = parseInt(document.getElementById('a').value);
		b = parseInt(document.getElementById('b').value);
		c = parseInt(document.getElementById('c').value);
};
var checkRoots = function() {
		
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
 var formula = function() {
		
		document.getElementById('valueDisplay').innerHTML = (((-1 * b) + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2*a));
		document.getElementById('valueDisplay2').innerHTML = (((-1 * b) - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2*a));
};