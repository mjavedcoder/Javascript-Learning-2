// <==========================================Sets========================================>//

// Before ES6 there were only two data structure and those were "Arrays" and "Objects" but in ES6 two more data structure been introduced which are "Sets" and "Maps".

// Sets is a combination of unique element . It does not repeat the elements .

const details = new Set(["Qas", "Jaddy", 22, 22, "London", "London"]);
console.log(details); //output => {'Qas', 'Jaddy', 22, 'London'}

// See it does not repeat the elements.

console.log(details.size); //output =>4 (This is to measure the size of set)
console.log(details.has("Qas")); //output =>true (To check if any element belongs to set)
console.log(details.add("Dagenham")); //output =>{'Qas', 'Jaddy', 22, 'London', 'Dagenham'}
details.delete(22); //output =>{'Qas', 'Jaddy','London', 'Dagenham'}
console.log(details);

// The above are some of the use-cases of sets.

// What if we want to retrieve or getting elements out of the sets ?
// There is no way of getting elements out of the sets .If it is needed then use Arras but with sets you can  not retrieve elements .

// "Sets" are iterable just like arrays so we can loop them too .

for (const data of details) console.log(data); //We looped the set "details"

const matchMaking = ["Qas", "Tania", "live-in Relationship", 22];
const matchMakingTogether = new Set(matchMaking);
console.log(matchMakingTogether); //output => Set(4) {'Qas', 'Tania', 'live-in Relationship', 22}

console.log(matchMakingTogether.size); //output => 4

// How can we convert the sets to arrays ?

console.log([...new Set(matchMaking)]); //output => (4) ['Qas', 'Tania', 'live-in Relationship', 22]

// To convert the sets to arrays we need to use spread operator which take out the elements and close it with square-bracket [].
