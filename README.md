Node.js Image Upload Service
=================
Written by Christian 

A fairly basic image upload webservice written in JavaScript for Node.js


Usage
=================
Run node exo.js
The webservice will print start time and date, navigate to 127.0.0.1:3000 (port can be change in exo.js)
A simple form has been implemented, so it's possible to test before implementing it.
As of now, the service will return a HTTP Response code 200 with a JSON object containing the image id (same used for storing the image).

It's possible to change the number of characters in the id by extending the loop in which the id is generated