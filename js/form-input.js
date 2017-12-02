var apiKey = require('./../.env').apiKey;


export class Doctor {
  constructor() {
    this.doc;
  }

  getName(name) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name=${name}&query=&location=45.5231, -122.6765, 200`).then(function(responce) {
      if (responce.data.length > 0 ){
      for (let i = 0; i < responce.data.length; i++){
        $('.doctor-output').append(`<div class='new-doc-info'> <img src="${responce.data[i].profile.image_url}" alt="image of ${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}"> <p class='doc-name'>${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}</p></div>`);
        for (let j =0; j < responce.data[i].practices.length; j++) {
          $('.doctor-output').append(`${responce.data[i].practices[j].visit_address.city}, ${responce.data[i].practices[j].visit_address.state} ${responce.data[i].practices[j].visit_address.street} ${responce.data[i].practices[j].visit_address.zip}`);
          $('.doctor-output').append(`<p class='doc-phone'>${responce.data[i].practices[j].phones[0].number}</p>`);
          if(responce.data[i].practices[j].website != undefined) {
            $('.doctor-output').append(`<p>${responce.data[i].practices[j].website}</p>`);
          } else {
            $('.doctor-output').append(`<p>No website Availible</p>`)
          };
          if(responce.data[i].practices[j].accepts_new_patients === true) {
            $('.doctor-output').append(`<p>Currently Accepting New Patients </p>`);
          } else {
            $('.doctor-output').append(`<p>Not Currently Accepting New Patients</p>`)
          }
        }

      }

    } else {
      console.log('make it');
      $('.doctor-output').append(`<p>No Doctor Exists with that Name</p>`)

      };
    }).fail(function(error) {
      alert('There was an error on our part try again');
    });
  }

  
}
