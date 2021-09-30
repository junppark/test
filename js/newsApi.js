var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://newscatcher.p.rapidapi.com/v1/search_free',
  params: {q: 'apple', lang: 'en', media: 'True'},
  headers: {
    'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
    'x-rapidapi-key': 'b14a382395mshcdb74d3e9748c5ep186b0bjsna80d6190e776'
  }
};

axios
  .request(options)
  .then(function (response) {
    data = response.data.articles
    console.log(data)
    for (let i =0; i<data.length;i++){
      // addElement(data[i].title)
      addAnchor(data[i].title, data[i].link)
      
      
    }
  }).catch(function (error) {
    console.error(error);
  });

function addAnchor(title, titleLink) {
  const myDiv = document.getElementById('articles')
  const newDiv = document.createElement('div')
  const aTag = document.createElement('a');
  aTag.setAttribute('href',`${titleLink}`)
  aTag.innerText = title
  newDiv.appendChild(aTag)
  myDiv.appendChild(newDiv)
}

/*
<div id="news">
  <div id="news1"><a href="1">apple1</a></div>
  <div id="news2"><a href="2">apple1</a></div>
  <div id="news3"><a href="3">apple1</a></div>
  <div id="news4"><a href="4">apple1</a></div>
  <div id="news5"><a href="5">apple1</a></div>
</div>
*/

