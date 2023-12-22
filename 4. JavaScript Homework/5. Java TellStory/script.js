

let name = prompt("Enter Your Name")
let mood = prompt("Enter Your Mood")
let activity = prompt("Enter Your Activity")



function tellstory() {

    let story = `Once upon a time little Mister ${name} was ${mood} out for ${activity}, `;
    story +=    `When he saw a Horse on a Balcony and remembered, `;
    story +=    `Right, It is Balkan afterall.`;

    return story;
}
console.log(tellstory());

alert(tellstory())


document.getElementById("yourStory").innerText = tellstory();



