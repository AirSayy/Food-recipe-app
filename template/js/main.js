document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const apikey = '4ba5832eb2774d709a9694c5b6dfc569'
  const choice = document.querySelector('#mealName').value
  
  

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&fillIngredients=true&query=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)
        
        
        // IMPORTANT! GET THE information on the OBJECTS OUT OF THE ARRAY !!!
        
         const title = data.results.map(el =>el.title)
         console.log(title)
         document.querySelector('#title').innerHTML = title[0]
        
          
         document.querySelector('img').src = data.results[0].image
         document.querySelector('img').style = '250px'
         document.querySelector('h4').innerHTML= data.results[0].summary
       

            let recipeInstructions = data.results[0].analyzedInstructions[0].steps.map(el => `<li>${el.step}</li>`).join('')
            document.querySelector('#recipe').innerHTML = recipeInstructions
           
            const ingredients = data.results[0].extendedIngredients.map(el => `<li>${el.name}</li>`).join('')
            document.querySelector('#ingredients').innerHTML =ingredients   
            console.log(ingredients) 
            
             const diet = data.results.map(el => `<li>${el.diets}</li>`)
             document.querySelector('#diet').innerHTML = diet[0]


        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}