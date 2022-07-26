const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hollow');
// Interpolated
console.log('Hello I am a %s string!', '💻');
// Styled
console.log('%cI am a bigger one.', 'font-size:30px');
// warning!
console.warn('Warn!');
// Error :|
console.error('Error!');
// Info
console.info('Just some useful information');
// Testing
console.assert(1 === 1, 'that is false');
// clearing
// console.clear();
// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`It is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd();
});
// counting
console.count('dog');
console.count('dog');
console.count('dog');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/moonydog12')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
