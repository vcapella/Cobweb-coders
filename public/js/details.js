const detailsSubmit = async (event) => {
  event.preventDefault();
 
	let id = event.target.dataset.placeid

    // Send a POST request to the API endpoint
    document.location.replace(`/listings/${id}`)
  
};

let details=document
  .querySelectorAll('.details')

	details.forEach((detail)=>{
		detail.addEventListener('click', detailsSubmit);
	})