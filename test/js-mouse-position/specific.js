// window.addEventListener('mousemove', function(e) {
// 	// console.log(`x: ${e.x} | y: ${e.y}`);
// 	this.document.getElementById('x-value').textContent = e.x;
// 	this.document.getElementById('y-value').textContent = e.y;
// });

var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){ 
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.left = x + "px";
	cursor.style.top = y + "px";
})