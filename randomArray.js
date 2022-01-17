//write a function which returns array of seven random numbers in a range of 0-9.
// All the numbers must be unique.

function randomUnique() {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

// The Math.floor() method rounds a number DOWNWARDS to the nearest integer
//Math.random() returns a random number

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
   return array.slice(3)
}
console.log(randomUnique());