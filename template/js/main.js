document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = document.querySelector('input').value
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.meals[0].strIngredient1)
        console.log(data.meals[0].strIngredient2)
        // document.querySelector('#nameOfFood').innerHTML = data.meals[0].strMeal
        // document.querySelector('img').src = data.meals[0].strMealThumb
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}