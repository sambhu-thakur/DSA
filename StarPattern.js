// starPattern.js

/* print star in below format

  ****
  ****
  ****
  ****

 */
let n = 5;

// for (let i = 0; i <n; i++){

//     let row = "";
//     for (let j = 0; j <n; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }


/* print star in below format

  *
  **
  ***
  ****
 */

// for (let i = 0; i < 4; i++){
//     let row = '';
//     for (let j = i; j >= 0; j--){
//         row = row + '*'
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j <= i; j++) {
//         row = row + '*'
//     }
//     console.log(row)
// }


// for (let i = 0; i <n; i++){
//     let row = "";
//     for (let j = 0; j <i+1; j++){
//         row = row + "*"
//     }
//     console.log(row)
// }

/* print pattern in below format

 1
 12
 123
 1234
 12345
 */

// for (let i = 0; i < n; i++){
//     let rows = "";
//     for (let j = 0; j <= i; j++){
//         rows = rows +(j+1)
//     }
//     console.log(rows)
// }

/* print pattern in below format

 1
 22
 333
 4444
 55555
 */


// for (let i = 0; i < n; i++) {
//     let rows = "";
//     for (let j = 0; j <= i; j++) {
//         rows = rows + (i + 1)
//     }
//     console.log(rows)
// }



/* print pattern in below format

12345
1234
123
12
1
 */

// for (let i =0; i<n; i++){
//     let rows = "";
//     for (let j= 0; j <n-i; j++){
//         rows = rows+ (j+1)
//     }
//     console.log(rows)
// }

/* print pattern in below format

*****
****
***
**
*

 */

// for (let i = 0; i < n; i++) {
//     let rows = "";
//     for (let j = 0; j < n - i; j++) {
//         rows = rows + "*"
//     }
//     console.log(rows)
// }


/* print pattern in below format

----*
---**
--***
_****
*****

 */



// for (let i = 0; i < n; i++) {

//     let rows = "";
//     Adding Empty  sapce
//     for (let j = 0; j < n - (i + 1); j++) {
//         rows = rows + "_";
//     }
    // Adding stars 0r dots
//     for (let k = 0; k < i + 1; k++){
//         rows =rows +"*"
//     }
//     console.log(rows)
// }

/* print pattern in below format

1
10
101
1010
10101
101010
 */

// for (let i = 0; i < n; i++){
//     let rows = "";
//     let toggle = 1;
//     for (let j = 0; j <= i; j++) {
//         rows = rows + toggle;
         // swtich Toggle
//         if (toggle == 1) {
//             toggle = 0
//         }
//         else {
//             toggle = 1;
//         }
//     }
//     console.log(rows)
// }

/* print pattern in below format

1
01
010
1010
10101
101010
 */

// let toggle = 1

// for (let i = 0; i < n; i++){
//     let rows = "";
//     for (let j = 0; j <= i; j++){
//         rows = rows + toggle;
//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else {
//             toggle = 1
//         }
//     }
//     console.log(rows)
// }
