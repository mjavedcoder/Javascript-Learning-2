'use strict';

//<================================Consuming-Promises====================>//

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const updatedData = function (format) {
  const html = `
    <article class="country">
      <img class="country__img" src=
      "${format.flags.png}"
       />
      <div class="country__data">
        <h3 class="country__name">${format.name.common}</h3>
        <h4 class="country__region">${format.region}</h4>
        <p class="country__row">
          <span>👫</span>${(+format.population / 1000000).toFixed(1)} people
        </p>
        <p class="country__row">
          <span>🗣️</span>${format.languages.urd}
        </p>
        <p class="country__row">
          <span>💰</span>${format.currencies.PKR.name}
        </p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   const data = new XMLHttpRequest();
//   data.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   data.send();

//   data.addEventListener('load', function () {
//     const [format] = JSON.parse(this.responseText);
//     console.log(format);
//     updatedData(format);
//   });
// };

// getCountryData('pakistan');

//<===========Request Data from Server by using Fetch-Function=================>

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (format) {
//       console.log(format);
//       updatedData(format[0]);
//     });
// };
// getCountryData('pakistan');

//  This will return us a "promise" and this is not going to be fullfill promise but this is going to be consume promise. As soon we use fetch method it didn't return us the requested data straight away but although it return us a "Consume-Promise".So, this promise is till in pendinf because the asynchronus task of getting the data is still in pending and running in the background .This promise is till in pending rather in the rejected form or in fullfill form.
// Let assume if the promise is fullfill then we have used "then" after the fetch function and that will take a call-back function.This call-back function will take an arguemnt which is going to be "response" which we get when the promise got full-filled .To read the data from the console we have used the "json" method in the above code.Json method is a method which is available in every "response" object which is been coming from fetch function above .This "json" is an asynchronus and it also returns a promise so we have used "then" after that too ."then" after the json return us the data which we have requested from the server .
// By calling the "updatedData" we'll get the same "Api"(Pakistani-Flag) result which we got beofre by using the "Ajax" function.Here down below we have simplified that fetch function which we have used above to request the data from the server .

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(format => updatedData(format[0]));
};
getCountryData('pakistan');
