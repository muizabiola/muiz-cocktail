const input = document.getElementById('search-input');
const submitButton = document.getElementById("submit")
const container = document.querySelector('.cocktail-list');
const cocktailData = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const fetchData = (e)=>{
  // prevent the default form submission
  e.preventDefault()

  // get the value from the input field
  const inputValue = input.value

  container.innerHTML = '';
  // fetch the cocktail data using the input value
  fetch(`${cocktailData}${inputValue || 'a'}`)

  .then(
     (response)=>{
        return response.json()
     }
  )
  .then(
    (data)=>{
          console.log(data.drinks[4].strDrink)
      const cocktails = data.drinks;
      for (let index = 0; index < cocktails.length; index++) {
        const singleDrinks = cocktails[index];
        console.log(singleDrinks);


        // for (let index = 0; index < array.length; index++) {
        //   const element = array[index];
          
        // }

        // create an article element to display the cocktail
        const article = document.createElement('article');

        // set the innerHTML of the article with the cocktail data
        article.innerHTML =
        `
        <div class="image">
          <img src='${singleDrinks.strDrinkThumb}' alt='${singleDrinks.trDrink}' >
        </div>

        <div class="description">
       <h2>${singleDrinks.strDrink}</h2>
      <div class="sub">
       <p> category :</> <p>${singleDrinks.strCategory}</>
      </div>
      <div class="sub">
       <p>serving glass :</p> <p>${ singleDrinks.strGlass }</p>
       </div>

      <a href='details.html'>
      <button>
       more Details
       </button>
     </a>
      </div>

     <article key={id}>
     <div class="image"
    <img src
      
       </div>
         
        `
        input.value = ' ';
        container.appendChild(article);
        
      }
      
      
      
    }
  )
 
 
  
  
}
submitButton.addEventListener('click',fetchData)