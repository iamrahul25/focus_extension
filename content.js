// content.js
try {
    const element = document.getElementById("voyager-feed");
    
    //Make it Hidden
    element.style.display = "none";
    console.log("Feed Element Hidden!");

} catch (error) {
    console.error('Error removing element:', error);
}