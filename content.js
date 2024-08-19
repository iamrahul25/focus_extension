// content.js
const element = document.getElementById("voyager-feed");
if (element) {
    element.remove();
    console.log("Element with id 'voyager-feed' has been removed.");
} else {
    console.log("Element with id 'voyager-feed' not found.");
}
