// Hama kerakli elementlarni topib olamiz

var elContactsForm = document.querySelector('.contacts-form');
var elContactsBtn  = elContactsForm.querySelector('.form-btn');
var elContactsList = elContactsForm.querySelector('.contacts-list');
    elContactsList.innerHTML = '';

    elContactsForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    // htmldagi qiymat olish uchun kerakli elemenlarni topib olamiz !

    var elContactName  = elContactsForm.querySelector('#userName').value;
    var elContactSurName = elContactsForm.querySelector('#userSurName').value;
    var elContactTel = elContactsForm.querySelector('#userTel').value;

// qiymat ushlash uchun arraylar

    var aboutContact = [
      {
        name: elContactName,
        surName: elContactSurName,
        tel: elContactTel
      }
    ]

    console.log(aboutContact);


  var elContactsList = elContactsForm.querySelector('.contacts-list');

  var oneContactLi = document.createElement('li');
      oneContactLi.classList.add('mt-3')

  var oneContactA = document.createElement('a');
  oneContactA.classList.add('card-link', 'd-block', 'm-auto');

  var oneContactH5 = document.createElement('h5');
      oneContactH5.classList.add('h6','m-0')
      oneContactH5.textContent = `${aboutContact[0].name} ${aboutContact[0].surName}`;

  var oneContactSpan = document.createElement('span');
      oneContactSpan.classList.add('text-white-50');

  oneContactSpan.textContent = aboutContact[0].tel;

  elContactsList.appendChild(oneContactLi);


  oneContactLi.appendChild(oneContactA);
  oneContactA.appendChild(oneContactH5);
  oneContactA.appendChild(oneContactSpan);


})
