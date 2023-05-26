// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROJECT 1: Quote Generator/ Beginner
//  KEY CONCEPTS FOR PROJECT
    // - document.querySelector()
    // - addEventListener()
    // - Math Object()
    // - innerText

// ------------------------------------------------------------------------------------------------------------------------------

// VARIABLES
// ------------------------------------------------------------

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [{
    quote : `"God created philosophy for all the intellects that got bored of hearing the same bible stories every Sunday."`,
    person : ` John F. Kennedy`
},  {
    quote : `"Eighty percent of success is showing up."`,
    person : ` Woody Allen`
}, {
    quote : `"All the world’s a stage, and all the men and women merely players."`,
    person : ` William Shakespeare`
}, {
    quote : `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person : ` Thomas Alba Edison`
}, {
    quote : `"I think therefore I am."`,
    person : ` Rene Descartes`
}, {
    quote : `"If you are going through hell, keep going."`,
    person : ` Winston Churchill`
}, {
    quote : `"If you want something said, ask a man; if you want something done, ask a woman."`,
    person : ` Margaret Thachter`
}, {
    quote : `"Knowledge is power"`,
    person : ` Sir Francis Bacon`
}, {
    quote : `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person : ` Albert Einstein`
}, {
    quote : `"The only thing we have to fear is fear itself."`,
    person : ` Franklin Delano Roosevelt`
}, ];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
