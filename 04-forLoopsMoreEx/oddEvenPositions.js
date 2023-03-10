function oddEvenPositions(input) {
    let numCount = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    let oddMax = -1000000.0;
    let oddMin = 1000000.0;
    let evenMax = -1000000.0;
    let evenMin = 1000000.0;
    for (let i = 1; i <= numCount; i++) {
        let currNum = Number(input[i]);
        if (i % 2 != 0) {
            oddSum += currNum;
            if (currNum > oddMax) {
                oddMax = currNum;
            }
            if (currNum < oddMin) {
                oddMin = currNum;
            }
        } else {
            evenSum += currNum;
            if (currNum > evenMax) {
                evenMax = currNum;
            }
            if (currNum < evenMin) {
                evenMin = currNum;
            }
        }    
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (oddMin === 1000000.0) {
        console.log(`OddMin=No,`);
    } else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }
    if (oddMax === -1000000.0) {
        console.log(`OddMax=No,`);
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (evenMin === 1000000.0) {
        console.log(`EvenMin=No,`);
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }
    if (evenMax === -1000000.0) {
        console.log(`EvenMax=No`);
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}
oddEvenPositions(["0"])