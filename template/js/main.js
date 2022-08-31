document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = document.querySelector('input').value
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.meals)
        // document.querySelector('#nameOfFood').innerHTML = data.results[0].title
        // document.querySelector('img').src = data.results[0].image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}