var apiKey = require('./../.env').apiKey;


export class Doctor {
  constructor() {

  }

  getName(name) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name&query=&location=45.5231, -122.6765, 100`).then(function(responce) {
      for (let i = 0; i < 10; i++){
        $('.doctor-output').append(`<img src="${responce.data[i].profile.image_url}" alt="image of ${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}"> <div class='new-doc-info'><p class='doc-name'>${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}</p> <p class='doc-adress'>${responce.data[i].practices[i].visit_address.city}, ${responce.data[i].practices[i].visit_address.state} ${responce.data[i].practices[i].visit_address.street} ${responce.data[i].practices[i].visit_address.zip}</p> <p class='doc-phone'>${responce.data[i].practices[i].phones[i].number}</p> <p class='doc-website'>${responce.data[i].practices[i].website}</p></div></div>`);


      };
    }).fail(function(error) {
      alert('try again');
    });

  }

  // getName(name) {
  //   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name&query=&location=45.5231, -122.6765, 100`).then(function(responce) {
  //     for (let i = 0; i < 10; i++){
  //       $('.doctor-output').append(`<img src="${responce.data[i].profile.image_url}" alt="image of ${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}"> <div class='new-doc-info'><p class='doc-name'>${responce.data[i].profile.first_name} ${responce.data[i].profile.last_name}</p> </div></div>`);
  //
  //
  //     };
  //   }).fail(function(error) {
  //     alert('try again');
  //   });
  //
  // }

//   getAdress(name) {
//     $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name&query=&location=45.5231, -122.6765, 100`).then(function(responce) {
//       for (let i = 0; i < 10; i++){
//         $('.doctor-output').append(`<p class='doc-adress'>${responce.data[i].practices[i].visit_address.city}, ${responce.data[i].practices[i].visit_address.state} ${responce.data[i].practices[i].visit_address.street} ${responce.data[i].practices[i].visit_address.zip}</p>`);
//       };
//     }).fail(function(error) {
//       alert('no address');
//     });
//   }
// }

// getPhone(name) {
//   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?limit=10&user_key=92eabac06f3099882483789a6b1b7ad9&name&query=&location=45.5231, -122.6765, 100`).then(function(responce) {
//     for (let i = 0; i < 10; i++){
//       $('.doctor-output').append(`<p class='doc-phone'>${responce.data[i].practices[i].phones[i].number}</p> <p class='doc-website'>${responce.data[i].practices[i].website}</p></div></div>`);
//     };
//   }).fail(function(error) {
//     alert('try again');
//   });
// }
}
