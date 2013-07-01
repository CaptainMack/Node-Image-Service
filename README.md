Node.js Image Webservice
=================
Written by Christian 

A clustered image webservice using redis as database - written for Node.js


Usage
=================
- Setup configuration in exo.js file (local directories and redis info)
- Make sure redis is running
- Run node exo.js through terminal
- The webservice will print start time and date, navigate to 127.0.0.1:3000 (port can be change in exo.js)
- A simple form has been implemented, so it's possible to test before implementing it. As of now, the service will return a HTTP Response code 200 with a JSON object containing the image id (same used for storing the image). It's possible to change the number of characters in the id by extending the loop in which the id is generated.

The service will spawn a cluster with N number of child-process (based on CPU cores), each process will compete for a connection - balancing the load.


API:

	To retrieve an image in a response use GET
	http://ip/view?=uid
	
	To upload an image, use POST
	http://ip/upload
	
	To download an image, use GET
	http://ip/download?=uid
	


TO-DO
=================

- Implementation of more view functions (view specific, view all, view based on date)