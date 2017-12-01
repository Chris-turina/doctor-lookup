var apiKey = require('./../.env').apiKey;


export class Doctor {
  constructor() {
    this.name;
  }

  getName(name) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=1&user_key=${apiKey}&name=${name}`).then(function(responce) {
      $('.doctor-output').append(`<div class="new-doctor"> <img src="${responce.data[0].profile.image_url}" alt="image of ${responce.data[0].profile.first_name} ${responce.data[0].profile.last_name}"> <p class='doc-name'>${responce.data[0].profile.first_name} ${responce.data[0].profile.last_name}</p></div>`);
    }).fail(function(error) {
      alert('try again');
    });

  }
}
