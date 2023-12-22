let firstName = ["Jonas", "Marte", "Bob", "Henrik", "Sune" ]
let lastName = ["Nielsen", "Nielsen", "The Russ", "Henriksen", "Slavic" ]

function fullName(){
    let fullName =(`
    \n Full Name: ${firstName[0]} ${lastName[0]}
    \n Full Name: ${firstName[1]} ${lastName[1]}
    \n Full Name: ${firstName[2]} ${lastName[2]}
    \n Full Name: ${firstName[3]} ${lastName[3]}
    \n Full Name: ${firstName[4]} ${lastName[4]}
    `)
    return fullName
}

console.log(fullName())

document.getElementById("p1").innerText = fullName();



