'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//<=============Ajax==============================>//

//  Now we'll discuss that whta is "Ajax" ?
//  Ajax is Asynchronous javascript AND XML .With Ajax calls we can request the data from the web-server .For example we have created an application and in that application we want to use some data from the other web-server .This can be done by using "Ajax".As this is asynchronous so the behaviour is non-blocking.

// Here we want to get data of different countries .So we'll use "Ajax" calls here .There are multiple ways of "Ajax" calls but we'll use most old school one which is XML HTTP request function.
const getCountryData = function (country) {
  const data = new XMLHttpRequest(); //==> We have called this function and stored it in variable
  data.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  data.send();
  //=> WE will send the request to the above url in open section. We cannot store this in any of the variable in order to get the result, because here we have not received the request(data).So we will take a call-back function on the data(variable) for the load event.As we get the data so ut will be keep loading in the background and the rest of the code will be keep running .Here we are sending the request to fetching the data and once that data has been fetch in the background and this will emit the "load" event and the callback function will be called in the event function below .

  data.addEventListener('load', function () {
    //   console.log(this.responseText); //the property of response is "Text" and this will only be set once the data has arrived.This data is in "JSON" format which is "big string of text" so we will convert it into object.
    const [format] = JSON.parse(this.responseText); //In this way we get the data in a nice format of an object
    console.log(format);

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
            <span>💰</span>${format.currencies.name}
          </p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('pakistan');
getCountryData('japan');
