//Get Median, MEan and Mode in array of numbers 
//Median: The middle number; found by ordering all data points and picking out the one in the middle
// (or if there are two middle numbers, taking the mean of those two numbers).
//Mean: The "average" number; found by adding all data points and dividing by the number of data points.
//Mode: The most frequent number—that is, the number that occurs the highest number of times.
const findMMM = (_arrNum) => {
    console.log(`Input array is ${_arrNum}`)
    const result = { median: null, mean: null, mode: null }

    let tmpArr = _arrNum;
    tmpArr.sort((a, b) => a - b)
    result.median = tmpArr.length % 2 === 0 ?
        ((tmpArr[Math.floor(tmpArr.length / 2)] + tmpArr[Math.floor(tmpArr.length / 2) - 1])) / 2
        :
        (tmpArr[Math.floor(tmpArr.length / 2)])

    result.mean = parseFloat(tmpArr.reduce((acc, curV) => acc + curV) / tmpArr.length).toFixed(2);

    const uVals = [...new Set(tmpArr)]

    let v = tmpArr[0];
    let cnt = 0;

    uVals.forEach((e) => {
        let countArr = tmpArr.filter(num => num === e);
        if (countArr.length > cnt) {
            v = e;
            cnt = countArr.length
        }
    })

    result.mode = v

    console.log(result)

}

// Get highest and lowest value in array of numbers
const findHL = (_arrNum) => {
    const temp = _arrNum.sort((a, b) => a - b)
    return ({
        lowest: temp[0],
        highest: temp[temp.length - 1]
    })
}


findMMM([, 4, 2, 5, 6, 4, 3, 6, 7, 9])