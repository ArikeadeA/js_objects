// Question 1
function instagramPost(handle, content, link, numberOfViews, numberOfLikes){
    this.handle = handle;
    this.content = content;
    this.link = link;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}



// Question 2
let japanwalker = new instagramPost("japan_walker_", "lifestyle", "https://www.instagram.com/p/CpJ6igeve3a/?utm_source=ig_web_copy_link", 13802804, 1648713);
let foodiechina = new instagramPost("foodiechina888", "food", "hhttps://www.instagram.com/reel/CpAVSmagaYf/?utm_source=ig_web_copy_link", 576292, 21052);



// Question 3a

function createPerson(name, age, location){
    return {
        name: name,
        age: age,
        location: location,
    };
}
let Musa = createPerson("Musa", 19, "Lekki");

// Question 3b

function createJambScores(eng, govt, lit, crk){
    return {
        English: eng,
        Government: govt,
        Literature: lit,
        CRK: crk,
    }
}
let musaJambScores = createJambScores(70, 85, 82, 94);
Musa.jambscores = musaJambScores;
console.log(Musa);



// Question 4

// 1
// Using the Object.assign method. Example
// const musaFullInfo = Object.assign({}, Musa);

// 2
// Using the spread operator. Example
// const musaFullInfo = {...Musa};

// 3
// Using the JSON.parse(JSON.stringify()) method. Example
// const musaFullInfo = JSON.parse(JSON.stringify(Musa));



// Question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
for (let props in presidentialCandidates) {
    console.log(presidentialCandidates[props] + " is the presidential candidate  of " + props);
}  