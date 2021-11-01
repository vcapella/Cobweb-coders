const commentSubmit = async (event) => {
  event.preventDefault();

  // Collect values from the login form
 
	let review_content=document.querySelector('#commentText').value;


	let place_id=document.location.href.split('http://localhost:3001/listings/')[1]
	
	console.log(place_id)

	const response =await fetch('/api/reviews/',{

		method:'POST',
		body: JSON.stringify({review_content:review_content,place_id:Number(place_id) }),
		headers: { 'Content-Type': 'application/json' },


	})

	if(response.ok){
		document.location.replace(`/listings/${Number(place_id)}`)
	}


    // Send a POST request to the API endpoint
  

		

   
  
};

document
  .querySelector('#commentSubmit')
  .addEventListener('click', commentSubmit);