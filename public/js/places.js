const placeSubmit = async (event) => {
  event.preventDefault();
console.log('place javascript loaded')
  // Collect values from the login form
 
	let state="Arizona"

    // Send a POST request to the API endpoint
    document.location.replace(`/search/${state}`)

		

   
  
};

document
  .querySelector('#stateSubmit')
  .addEventListener('click', placeSubmit);