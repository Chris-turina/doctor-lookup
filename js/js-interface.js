import { Doctor } from "./../js/form-input.js";

let showData = function(response) {
  if (response.data.length > 0 ){
    for (let i = 0; i < response.data.length; i++){
      $('.doctor-output').append(`<div class='new-doc-info'> <img src="${response.data[i].profile.image_url}" alt="image of ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}"> <p class='doc-name'>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p></div>`);
      for (let j =0; j < response.data[i].practices.length; j++) {
        $('.doctor-output').append(`${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state} ${response.data[i].practices[j].visit_address.street} ${response.data[i].practices[j].visit_address.zip}`);
        $('.doctor-output').append(`<p class='doc-phone'>${response.data[i].practices[j].phones[0].number}</p>`);
        if(response.data[i].practices[j].website != undefined) {
          $('.doctor-output').append(`<p>${response.data[i].practices[j].website}</p>`);
        } else {
          $('.doctor-output').append(`<p>No website Availible</p>`)
        };
        if(response.data[i].practices[j].accepts_new_patients === true) {
          $('.doctor-output').append(`<p>Currently Accepting New Patients </p>`);
        } else {
          $('.doctor-output').append(`<p>Not Currently Accepting New Patients</p>`)
        }
      }
    }
  } else {
    $('.doctor-output').append(`<p>No Doctor Exists with that Name</p>`)
  };
}

let showDataSymptom = function(response) {
  if (response.data.length > 0 ){
    for (let i = 0; i < response.data.length; i++){
      $('.doctor-output').append(`<div class='new-doc-info'> <img src="${response.data[i].profile.image_url}" alt="image of ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}"> <p class='doc-name'>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</p></div>`);
      for (let j =0; j < response.data[i].practices.length; j++) {
        $('.doctor-output').append(`${response.data[i].practices[j].visit_address.city}, ${response.data[i].practices[j].visit_address.state} ${response.data[i].practices[j].visit_address.street} ${response.data[i].practices[j].visit_address.zip}`);
        $('.doctor-output').append(`<p class='doc-phone'>${response.data[i].practices[j].phones[0].number}</p>`);
        if(response.data[i].practices[j].website != undefined) {
          $('.doctor-output').append(`<p>${response.data[i].practices[j].website}</p>`);
        } else {
          $('.doctor-output').append(`<p>No website Availible</p>`)
        };
        if(response.data[i].practices[j].accepts_new_patients === true) {
          $('.doctor-output').append(`<p>Currently Accepting New Patients </p>`);
        } else {
          $('.doctor-output').append(`<p>Not Currently Accepting New Patients</p>`)
        }
      }

    }

  } else {
    $('.doctor-output').append(`<p>No Doctor Exists with that Name</p>`)

  };
}

  let error = function(error) {
    alert('There was an error on our part try again');
  }


$(document).ready(function() {
  let doctorName = new Doctor();
  $("#button").click(function(event) {
    event.preventDefault();
    let nameInput = $('#input').val();
    doctorName.getName(nameInput, showData, error);



});




  $("#symptom-button").click(function(event) {
    event.preventDefault();
    let symptomInput = $('#input-symptom').val();
    doctorName.getSymptom(symptomInput, showDataSymptom, error);
  });
});
