let quote = document.getElementById('quote');
let author = document.getElementById('author');
let newQuote = document.getElementById('newQuote')

// GET Random Api 
function getQuote() {
  let request = new XMLHttpRequest(); 
  request.open('GET', 'https://api.quotable.io/random'); 
  request.send();


  request.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(request.responseText);
      quote.innerHTML = data.content
      author.innerHTML = data.author
    } 
  }
}

getQuote()

newQuote.addEventListener('click', getQuote);

