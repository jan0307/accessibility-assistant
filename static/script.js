const largeTextButton = document.getElementById("large-text-btn");

largeTextButton.addEventListener("click", function() {
    document.body.style.fontSize = "22px";
});

const highContrastButton = document.getElementById("high-contrast-btn");

highContrastButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    document.querySelector(".demo-content").style.backgroundColor = "black";
    document.querySelector(".demo-content").style.color = "white";
    document.querySelector(".demo-content").style.border = "1px solid white";
});

const colorVisionButton = document.getElementById("color-vision-btn");

colorVisionButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "#fff4cc";
    document.body.style.color = "#003366";
});

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
    document.body.style.fontSize = "";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";

    document.querySelector(".demo-content").style.backgroundColor = "";
    document.querySelector(".demo-content").style.color = "";
    document.querySelector(".demo-content").style.border = "";
});

const askAiButton = document.getElementById("ask-ai-btn");
const aiQuestion = document.getElementById("ai-question");
const aiResponse = document.getElementById("ai-response");

askAiButton.addEventListener("click", async function() {
    if (aiQuestion.value.trim() === "") {
    aiResponse.textContent = "Please enter a question first.";
    return;
}

    const response = await fetch("/ask-ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: aiQuestion.value
        })
    });

    const data = await response.json();

    aiResponse.textContent = data.answer;
});