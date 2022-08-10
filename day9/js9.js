const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("vibes");
// Interpolated
var comrades = 'werey';
console.log(`hello ${comrades}`)
// Styled
console.log('%c I am a clown', 'font-size:50px; , background:red;')
// warning!
console.warn('You are still broke')

// Error :|
console.error('rest');

// Info
console.info('and i never get money sha , god go help this comrade')

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch') , 'Just vibes')

// clearing
console.clear();
// Viewing DOM Elements
console.log(p)
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('soft')
console.count('soft')
// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
})

console.table(dogs )
