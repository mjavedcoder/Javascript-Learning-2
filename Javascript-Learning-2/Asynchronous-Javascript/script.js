// <=======Asynchronous Javascript=======> //

// <==================Synchronus Code=============>//

// Before discussing the ascynchronus, we'll first discuss the synchronus . The code which we been writing so far is synchronus . Synchronus code is executed line by line .Synchronus code is blocked code which means it stop executing if one of the previous code does not complete it's execution .Each line of code waits for the previous line of code to finish execution so it create problem when one line of code takes long to execute.

const h = document.querySelector("h1");
h1.textContent = "This is synchronus";
alert("Hi");
h1.style.color = "red";

// So in the above code, all the code is synchronus code .Until the "alet" comes .The alert here will produce the pop-up thing whenever the page is been reload so it will stop exected the next line of code until the "ok" been clicked on the "alert" section .As soon "ok" been clicked it will start the next line execution .This is why we say that synchronus code is blocked code as it block the execution .

//<=================================Asynchronus code=====================>//

const h2 = document.querySelector("h1");
setTimeout(function () {
  h1.textContent = "This is Asynchronus";
}, 500);
p.style.color = "yellow";

// The above code is asynchronus code in which we have setTimeout function and this is also a callback function which going to be execute when the time of "500" WILL BE complete in the background . Asynchronus code is NON-BLOCKING CODE AS it keep executing the code after times function and as soon the times is complete the call-back function will be executed too .So this call-back function is asynchronus code .This asynchronus code is executed after the task that runs in the background finishes and in our case it is times (500).
