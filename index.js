// solution 1

let title = document.getElementById("title")
let Team = document.getElementById("team-mate")
const demester = ["Jaybee", "I_Am_DanielIkpe", "Danny", "Spaghettii", "Johnson Francis", "Chidinma", "Smartlify"]
title.textContent = "Team Demester"
title.style.color = "red"
const showModal = document.getElementById("btn")
const modals = document.getElementById("modal")
const hideModal = document.getElementById("exit")


for (i = 0; i < demester.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(demester[i]);
    li.appendChild(text);
    Team.appendChild(li).style.color = "darkRed";
}

showModal.addEventListener("click", () => {
    modals.style.display = "block"

})

hideModal.addEventListener("click", () => {
    modals.style.display = "none"

})

window.addEventListener("click", (e) => {
    if (e.target == modals) {
        modals.style.display = "none"
    }


})



// solution 2
const Demester = ["Jaybee", "I_Am_DanielIkpe", "Danny", "Spaghettii", "Johnson Francis", "Chidinma", "Smartlify"]
console.log(Demester[0])
console.log(Demester[1])
console.log(Demester[2])
console.log(Demester[3])
console.log(Demester[4])
console.log(Demester[5])
console.log(Demester[6])

// solution 3

const person_data = {
    first_name: "Daniel",
    last_name: "Ikpe",
    best_movie: "Into the badlands",
    best_food: "Egusi",
    complexion: "Chocolate",
    birth_month: "June",
    state: "Akwa Ibom",
    group_name: "Team Demester"
}

const { best_movie } = person_data
console.log(`Best movie: ${best_movie}`)

// solution 4

const noun1 = "people"
const verb1 = "attend"
const adjective1 = "local"

const sentence1 = "Many " + noun1 + " " + verb1 + " our " + adjective1 + " art show."
console.log(sentence1)
const sentence2 = "Much of the farming in the poor world has been diverted from producing food for " + adjective1 + " " + noun1 + " to feeding the livestock required to supply richer people with meat."
console.log(sentence2)
const sentence3 = "The wishes of " + adjective1 + " " + noun1 + " were upheld as paramount."
console.log(sentence3)
const sentence4 = "But some " + adjective1 + " " + noun1 + " are in favour of the motorway."
console.log(sentence4)

const sentence5 = "The " + noun1 + " who " + verb1 + " sala are serians."
console.log(sentence5)


// solution 5
const getRemainder = (num1, num2) => {
    if (num1 >= num2) {
        return num1 % num2
    } else if (isNaN(num1) || isNaN(num2)) {
        return "This is not a string operatiion"
    } else {
        return "n1 should be greater than n2"
    }
}
console.log(getRemainder(7, 4))


// solution 6
const quadraticEqn = (a, b, c) => {
    let result = (((-b) + Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));
    let result2 = (((-b) - Math.sqrt(Math.pow(b, 2)) - (4 * a * c)) / (2 * a));

    return `${result},  ${result2}`;
}

console.log(quadraticEqn(2, 3, 5))




// solution 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective + " daddy " + myNoun + " " + myVerb + " " + myAdverb + " to Moma";
console.log(wordBlanks)


// solution 8
const PI = 3.142
let radius = 9

const CalculateArea = () => {
    return (radius * radius * PI);
}
console.log(CalculateArea())



// solution 9

let amount = 8200
let time = 30
let rate = 17.5

const simpleInterest = () => {
    let interest = (amount * time * rate) / 100;
    return interest;
}
console.log("Simple interest: N", simpleInterest());



// csolution 10

const Modulos = 10 % 4
console.log(Modulos)



// solution 11

let meritHigherBM = false

const BMI_Calcutor = (MeritMass, MeritHeight, NutJobMass, NutJobHeight) => {
    const MeritBMI = MeritMass / (MeritHeight * MeritHeight);
    const NutJobBMI = NutJobMass / (NutJobHeight * NutJobHeight);
    if (MeritBMI > NutJobBMI) {
        meritHigherBM = true
    }
    return meritHigherBM
}

console.log("meritHigherBMI: ",BMI_Calcutor(78, 1.69, 92, 1.95))
console.log("meritHigherBMI: ",BMI_Calcutor(95, 1.88, 85, 1.76))


