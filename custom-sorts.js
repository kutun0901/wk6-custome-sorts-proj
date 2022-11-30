function ageSort(users) {
  // Your code here
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return 1;
    if (b % 2 === 0 && a % 2 !== 0) return -1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === t.split('').sort().join('');

}

function reverseBaseSort(arr) {
  // Your code here
return arr.sort((a, b) => {
  let Ba = Math.floor(Math.log10(a));
  let Bb = Math.floor(Math.log10(b));
  if (Ba === Bb) return a - b;
  else return Bb - Ba;
})

}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
