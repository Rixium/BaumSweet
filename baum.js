// Challenge by jnazario
//
//  ** Description **
//
//  In mathematics, the Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:
//
//      b_n = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
//      b_n = 0 otherwise;
//
//  for n >= 0.
//
//  For example, b_4 = 1 because the binary representation of 4 is 100,
//  which only contains one block of consecutive 0s of length 2; whereas b_5 = 0
//  because the binary representation of 5 is 101, which contains a block of consecutive 0s of length 1.
//  When n is 19611206, b_n is 0 because:
//
//  19611206 = 1001010110011111001000110 base 2
//              00 0 0  00     00 000  0 runs of 0s
//                 ^ ^            ^^^    odd length sequences
//
//  Because we find an odd length sequence of 0s, b_n is 0.
//
//   ** Challenge Description **
//
//  Your challenge today is to write a program that generates the Baum-Sweet sequence from 0 to some number n.
//  For example, given "20" your program would emit:
//
//  1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0

function baumSweet(number) {
  if(number == 0) {
    return 1;
  }

  var binary = number.toString(2);
  var count = 0;

  for(var i = 0; i < binary.length; i++) {
    if(binary[i] == 0) {
      count++;
    } else {
      if(count % 2 == 1) {
        return 0;
      } else {
        count = 0;
      }
    }
  }

  return (count % 2) ? 0 : 1;
}

var sequence = "";
for(var i = 0; i <= 20; i++) {
 sequence += baumSweet(i) + " ";
}

console.log(sequence);
