document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const apikey = '4ba5832eb2774d709a9694c5b6dfc569'
  const choice = document.querySelector('#mealName').value
  const diet = document.querySelector('#dietName').value
  

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&fillIngredients=true&query=${choice}&diet=${diet}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.results[0])
        
        // IMPORTANT! GET THE information on the OBJECTS OUT OF THE ARRAY !!!
        
        
         document.querySelector('#nameOfFood').innerHTML = data.results[0].title
         document.querySelector('img').src = data.results[0].image
         document.querySelector('img').style = '250px'
          document.querySelector('h4').innerHTML= data.results[0].summary
        //  document.querySelector('#diet').innerHTML = data.results[0].diets
        console.log(data.results[0].analyzedInstructions[0].steps)
            let recipeInstructions = data.results[0].analyzedInstructions[0].steps.map(el => `<li>${el.number}: ${el.step}</li>`).join('')
            document.querySelector('#recipe').innerHTML = recipeInstructions
            console.log(data.results[0].extendedIngredients)


        //  for(let title in data){
        //   if(data.hasOwnProperty(title)){
        //       console.log(data[title].title)
        //       console.log(data[title].image)
        //       // created an li and img tag for the title of the meal and image being returned
        //       const li = document.createElement('li')
        //       const img = document.createElement('img')
        //       // Added text and image to the li
        //       li.textContent = data[title].title
        //       img.src = data[title].image
        //       // append to the ul
        //       document.querySelector('ul').appendChild(li)
        //       document.querySelector('ul').appendChild(img)
              // make each object property returned a relative link, so when clicked on, it gives the full information needed from the request.
              
    //       }
    //   }
          
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}