document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const apikey = '4ba5832eb2774d709a9694c5b6dfc569'
  const choice = document.querySelector('input').value
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&includeIngredients=true&query=${choice}&maxFat=25&number=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results[0])
        
        
         document.querySelector('#nameOfFood').innerHTML = data.results[0].title
         document.querySelector('img').src = data.results[0].image
         document.querySelector('img').style = '250px'
         document.querySelector('h4').innerHTML= data.results[0].summary
         document.querySelector('#diet').innerHTML = data.results[0].diets
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}