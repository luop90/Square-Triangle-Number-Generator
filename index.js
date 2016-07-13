var square = 1;
var lastWasOdd = false;
var sqrt2 = Math.sqrt(2);

function triangle(m) {
  return (m * (m + 1)) / 2;
}

for (var n = 1; n < 100000; n++) {
  square = n * n;

  // They swap even/odd every time. So no reason to check the evens if the last was even, odd if last was odd.
  if (lastWasOdd && n % 2 != 0) {
    continue;
  } else if (!lastWasOdd && n % 2 == 0) {
    continue;
  }

  for (var m = n; m < n * 2; m++) {
    if (triangle(m) == square) {
      console.log(`${square} = ${n} = ${m}`);
      // console.log(`${square} -> ${m / n}; Difference: ${sqrt2 - m / n}`); // Uncomment this for the difference value.

      if (n % 2 == 0) {
        lastWasOdd = false;
      } else {
        lastWasOdd = true;
      }
      continue;
    }

    if (triangle(m) > square) {
      break;
    }
  }
}
