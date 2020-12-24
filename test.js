console.log("cookie-test-window.document.cookie:" + window.document.cookie)
var cookieString = window.document.cookie
var cookieArray = cookieString.split(/\s*;\s*/);
var cookieObject = {};
for (var i = 0; i < cookieArray.length; i++) {
  var cookiePair = cookieArray[i].split('=');
  cookieObject[cookiePair[0]] = decodeURIComponent(cookiePair[1]);
}
console.log("cookieObject" + cookieObject)
