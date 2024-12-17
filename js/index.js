"use strict";


const bookAnswerEl = document.getElementById("book-answer");
const activityAnswerEl = document.getElementById("activity-answer");
const submissionBtn = document.getElementById("submission-btn");


const book = "The Great Gatsby";  
let activity = "reading";  with your favorite activity

function updateBookSentence() {
    
    bookAnswerEl.innerText = book;
}

function updateActivitySentence() {
    
    activityAnswerEl.innerText = activity;
}

function render() {
    
    updateBookSentence();
    updateActivitySentence();
}

submissionBtn.addEventListener("click", function () {
    render();
});
