#!/bin/jsc

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        debug( xhr.responseText );
	}
}

xhr.open('GET', 'http://www.google.com', true);
xhr.send(null);


