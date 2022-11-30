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
  const count = {};
  debugger

  for (let i = 0; i < arr.length; i++) {
    debugger
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else{
      count[arr[i]] = 1;
    }
  }

  return arr.sort((fi, se) => {
    debugger
    if (count[fi] === count[se]) {
       return se - fi;
       debugger
    } else if (count[fi] > count[se]){
      return 1;
      debugger
    } else{
      return -1;
    }

  })

}

const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
frequencySort(arr2);        // => [1, 3, 3, 2, 2]
frequencySort(arr3);        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
