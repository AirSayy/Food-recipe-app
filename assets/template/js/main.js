// Add an event listener to the button
document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('#title').innerHTML = localStorage.getItem('RecipeTitle')
document.querySelector('img').src = localStorage.getItem('RecipeImage')
document.querySelector('h4').innerHTML= localStorage.getItem('RecipeSummary')
document.querySelector('#recipe').innerHTML = localStorage.getItem('RecipeInstructions')
document.querySelector('#ingredients').innerHTML =  localStorage.getItem('RecipeIngredients')
document.querySelector('#diet').innerHTML = localStorage.getItem('Recipediet')
  

// The Event listener grabs the the function
function getFetch(){
  const apikey = '4ba5832eb2774d709a9694c5b6dfc569'
  const choice = document.querySelector('#mealName').value
  
  
    //  API URL 
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&fillIngredients=true&query=${choice}`

    //  Fetches the Url request from the APi and responds as JSON
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data.results) // Returns Results of the data requested for
        
        const title = data.results.map(el =>el.title) //Loops through the result and returns an array of the title name.
        // console.log(title) // logs in the array in the console
        document.querySelector('#title').innerHTML = localStorage.getItem('RecipeTitle') //Title of the meal choses shows in the dom
        
        
          
        document.querySelector('img').src = localStorage.getItem('RecipeImage') // image shows in the dom
        
        document.querySelector('img').style = '250px' // size of the image
        
        document.querySelector('h4').innerHTML= localStorage.getItem('RecipeSummary') //summary from the title of the recipe on the dom
       

        let recipeInstructions = data.results[0].analyzedInstructions[0].steps.map(el => `<li>${el.step}</li>`).join('') // loops through the results, loops again through the analyzed instructions from the object and append it to the dom with the li's
        document.querySelector('#recipe').innerHTML = localStorage.getItem('RecipeInstructions')
          
        const ingredients = data.results[0].extendedIngredients.map(el => `<li>${el.name}</li>`).join('') // loops through the results, loops again through the ingredients from the object and append it to the dom with the li's
        document.querySelector('#ingredients').innerHTML =  localStorage.getItem('RecipeIngredients')
        // console.log(ingredients) 
            
        const diet = data.results.map(el => `<li>${el.diets}</li>`) // loops through the diets from the object and append it to the dom with the li's
        document.querySelector('#diet').innerHTML = localStorage.getItem('Recipediet')

        // saves results in local storage

        localStorage.setItem('RecipeTitle' , title[0])
        localStorage.setItem('RecipeImage' , data.results[0].image )
        localStorage.setItem('RecipeSummary' , data.results[0].summary )
        localStorage.setItem('RecipeInstructions' , recipeInstructions )
        localStorage.setItem('RecipeIngredients' , ingredients )
        localStorage.setItem('Recipediet' , diet[0] )
        


        
    })
    .catch(err => {
        console.log(`can't be found ${err}`)
    });
}

// !!  IMPORTANT!! SAVE RECIPE TO LOCAL STORAGE