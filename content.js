let currURL = window.location.href;
console.log("Script injected into current URL: ", currURL);

try {

    if (currURL.includes("linkedin.com")) {
        console.log("This is LinkedIn!");

        //Find element by id="voyager-feed" and display none
        let feed = document.getElementById("voyager-feed");
        feed.style.display = "none";

    }
    else if (currURL.includes("instagram.com")) {
        console.log("This is Instagram!");

        //Get main tag and display none
        let main = document.querySelector("main");
        main.style.display = "none";

        //Issue: 
        //When clicking on other pages, and again coming back to explore page, the main tag is displayed again.
        
        //Solution: 

        //Because Intagram uses SPA - Single Page Application!
        //We need to listen for URL changes using -> popstate, hashchange, and pushstate events.

    }
    else if (currURL.includes("youtube.com")) {
        console.log("This is YouTube!");

        let content = document.getElementById("content");

        // content.style.display = "none";

        //Issue: When 
    }
}

catch (error) {
    console.error('Error removing Element:', error);
}