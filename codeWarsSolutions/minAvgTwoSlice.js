// module.exports = function minAvgTwoSlice(input) {
//   const l = input.length;
//   let sums = [];
//   let avg;

//   for (let i = 0; i < l; i++) {
//     if (i === l - 1) {
//       avg = input.reduce((total, number) => (total = total + number)) / l;
//       sums.push(avg);
//     } else {
//       avg = (input[i] + input[i + 1]) / 2;
//       sums.push(avg);
//     }
//   }

//   const lowestAvg = Math.min(...sums);
//   const lowestIndex = sums.indexOf(lowestAvg);
//   //if 0 starts at 0
//   //if 1 starts at 0 + 1
//   //if 2 starts at prev (0 +1) + 1

//   }
//   console.log(lowestIndex);
//   return sums;
// };

// //[2, 1, 4]
// // 2 1 =  avg 1.5
// // 1 4 = avg 2.5
// //2 1 4 = sum 7 avg 2.333
