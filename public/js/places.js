const placeSubmit = async (event) => {
  event.preventDefault();
  let state = document.querySelector("#state-input").value;

  if (state) {
    document.location.replace(`/search/${state}`);
  } else {
    alert("Please choose a state!");
  }
};

document.querySelector("#stateSubmit").addEventListener("click", placeSubmit);
