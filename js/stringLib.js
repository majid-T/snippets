//get the most used character of string dont'count space
const mostUsed = (_s) => {
    console.log(`Input is ${_s} with length of ${_s.length}`);
    const data = {};

    [..._s].forEach(e => {
        if (e !== ' ') {
            if (data[e]) {
                data[e] = data[e] + 1
            } else {
                data[e] = 1
            }
        }
    });

    let res;
    let val = 0;

    const keys = Object.keys(data);
    keys.forEach(k => {
        console.log(data[k])
        if (data[k] > val) {
            res = k
            val = data[k]
        }
    })
    return { data, res };
}