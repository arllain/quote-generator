// Get Quote from API
async function getQuote() {
  const proxyUrl = 'http://cors-anywhere.herokuapp.com/';
  const apiURL =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log('no quote', error);
  }
}

// On Load
getQuote();
