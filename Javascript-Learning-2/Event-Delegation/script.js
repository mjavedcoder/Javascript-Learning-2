//<=============================Event Delegation=============================>

// We'll explain this concept of event delegation with the help of an example .For Example:
// If we see in out html page we have took "ul" and in that "ul" we have "li",there is "ul" with class "sports" and in there,there are four more "li"  with different classes .If we want to add an event in all of these "li" then we have to put some extra efforts by selecting the elements of listing-individuals(li) by writing code "document.querySelector(.Cricket)" .
// For this kinda behaviour the "Event-Delegation" has been introduced . In "event-delegation" we add only one event which is in parent and in our code we'll add an event in "sports" class and then this event will be followed by the rest of elements which are in "ul".So whenever we click on these elements which are in parent("ul") it will just call the event which we added in our parent(ul) element .
// Because of eveent bobbling it will propagate to the parent event and will call

document.querySelector(".sports").addEventListener("click", () => {
  console.log("clicked"); //output => "Clicked"
});

// In the above code we have added an event which is logging "clicked" in our console.So whenever there is a click on any of the sport from the list we'll get that result of "clicked" .
