window.onload = function() {
    var spans = document.getElementsByTagName('span');
    for(var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if(('KeyboardKey').match(span.className)) {
            span.onclick = function() {
	            append(this.innerHTML);
            }
        }
        else if(('KeyboardKey clear').match(span.className)) {
            span.onclick = function() {
	            document.getElementById('typearea').value = "";
            }
        }
    }
}

function append(ch){
    document.getElementById('typearea').value = document.getElementById('typearea').value+ch;
}