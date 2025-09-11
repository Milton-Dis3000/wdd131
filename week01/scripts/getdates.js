// Get the current year and display it in the span with id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and display it in the paragraph with id "lastModified"
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
