
const book = "THINK AND GROW RICH"; 


let activity = "PLAYING SOCCER"; 


function updateActivitySentence(newActivity) {
    activity = newActivity; 
    render(); 
}


function render() {
    
    document.getElementById("book-answer").innerText = book;
    document.getElementById("activity-answer").innerText = activity;
}


document.getElementById("submission-btn").addEventListener("click", function () {
   
    updateActivitySentence("Reading books");
});


render();
