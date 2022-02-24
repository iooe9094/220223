let timeoutId;
function startInterval() {
    timeoutId = setInterval(printCurrentDate, 2000);
}
function cancelInterval() {
    clearInterval(timeoutId);
}
function printCurrentDate() {
    document.getElementById("date").innerHTML += new Date();
}

// setInterval / clearInterval