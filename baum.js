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
