// <========================Maps=====================>//

// As we have studied that there are 4 data-structure which includes "Objects", "Arrays", "Sets" and "Maps" .So here we discussed about Maps .Maps is a data-structure in which data is stored in key-value pairs in maps . The big difference b/w "Objects" and "Maps" is that in "Objects" key has only one type while in "Maps" key has many types .

const details = new Map();

// In the above code we took details "Map" and this map is an empty  and we going to fill this with data.To fill up the map we going to pas two(2) arguements .1st arguement is the key name and other is name of the key

details.set("name", "Qas");
details.set(1, "London,Dagenham");
details.set("Weather", "Cold");
details.set(true, "Weather is cold");

console.log(details); //output => Map(3) {'name' => 'Qas', 1 => 'London,Dagenham', 'Weather' => 'Cold'}

// In order to read the data from a map we use "get" method .

details.get("Weather");
console.log(details.get("Weather")); //output => Cold

// When we get the element ofcourse the data-type key matters .For-example in above code you cannot write Weather instead of string "Weather" as this will change the result.We also can have boolean value in keys .
console.log(details.get(true)); //output => Weather is cold

// <========================Methods is maps================================> //

console.log(details.has("Weather")); //OUTPUT =>True (To check if element belongs to map)
details.delete("name");
console.log(details); //output => {1 => 'London,Dagenham', 'Weather' => 'Cold', true => 'Weather is cold'}
console.log(details.size); //output => 3

// We can also use "Arrays" and "Objects" as map keys :

details.set([1, 2], "Hello");
console.log(details); //output => {1 => 'London,Dagenham', 'Weather' => 'Cold', true => 'Weather is cold', Array(2) => 'Hello'}

// So now to read the data from the array key what we'll do ?For example we used to do like this :
details.get([1, 2]);
console.log(details.get([1, 2])); //output => undefined

// This is because the array of key-value is different from the array which we callind down here for getting the result .

// We can do one thing that is by considering an array separate .For example:
const arr = [1, 2];
details.set(arr, "Hello");
console.log(details.get(arr)); //output => Hello
