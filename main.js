const quotes = document.getElementById('quote');
const authors = document.getElementById('author');
const newQuotes = document.getElementById('newQuote');

let realData = "";
let quotesData = "";


const getNewQuotes = () => {
    let rNum = Math.floor(Math.random() * 20);
    //console.log(realData[rNum].text);
    quotesData = realData[rNum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null
    ? (authors.innerText = `Unknown`)
    : (authors.innerText = `By ${quotesData.author}`);
    
};
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";

    try {
        let data = await fetch (api);
        realData = await data.json();
        getNewQuotes();
      //  console.log(realData[102].text);
      //quotes.innerText = `${realData[rNUm].text)}`
    } catch (error) {}
};

newQuotes.addEventListener('click', getNewQuotes);
getQuotes();