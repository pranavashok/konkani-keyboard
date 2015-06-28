window.onload = function() {
	var shift = 0;
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
        else if(('KeyboardKey shiftkey').match(span.className)) {
            span.onclick = function() {
            	if(shift == 0) {
			    	shiftpress();
			    	shift = 1;
			    }
			    else {
			     	shiftrelease();
			     	shift = 0;
			    }
	        }
	    }
    }
    document.onkeydown = (function (ev) {
		  var key;
		  var isShift;
		  if (window.event) {
		    key = window.event.keyCode;
		    alert(key);
		    isShift = !!window.event.shiftKey; // typecast to boolean
		  } else {
		    key = ev.which;
		    isShift = !!ev.shiftKey;
		  }
		  if ( isShift ) {
		    switch (key) {
		      case 16:
		      	if(shift == 0) {
		      		shiftpress();
		      		shift = 1;
		      	}
		      	else {
		      		shiftrelease();
		      		shift = 0;
		      	}
		        break;
		      default:
		        //alert(key);
		        break;
		    }
		  }
		});
}

function shiftpress() {
	var nonshifts = document.getElementsByClassName("nonshift");
    for(var i = 0; i < nonshifts.length; i++) {
    	nonshifts[i].style.display = 'none';
    }
    var shifts = document.getElementsByClassName("shift");
    for(var i = 0; i < nonshifts.length; i++) {
    	shifts[i].style.display = 'block';
    }
}

function shiftrelease() {
	var nonshifts = document.getElementsByClassName("nonshift");
    for(var i = 0; i < nonshifts.length; i++) {
    	nonshifts[i].style.display = 'block';
    }
    var shifts = document.getElementsByClassName("shift");
    for(var i = 0; i < nonshifts.length; i++) {
    	shifts[i].style.display = 'none';
    }
}

function append(ch){
    document.getElementById('typearea').value = document.getElementById('typearea').value+ch;
}