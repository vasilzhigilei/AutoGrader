/**
 * Injects the autograde.js script into the current tab page so that it can run the autograder.
 * Sets the limit percentage by getting input text number
 */
function injectTheScript() {
    var limitCode = "var limit = " + document.getElementById("limitInput").value + ";";
    // query the active tab, which will be only one tab
    // and inject the script in it
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // set code to be run for setting limit
        chrome.tabs.executeScript(tabs[0].id, {code: limitCode}, function(){
            // run autograde.js
            chrome.tabs.executeScript(tabs[0].id,{file: "autograde.js"});
        });
    });
}

// add eventlistener for click on gradeButton to run injectTheScript
document.getElementById("gradeButton").addEventListener("click", injectTheScript);