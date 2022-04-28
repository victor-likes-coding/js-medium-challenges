const filterOutFalsy = (in1, in2) => (in1 ? in2 : in1);

const arrLength = (arr = []) => {
    return arr.length;
};

const lastElem = (arr = []) => {
    return arr[arr.length - 1];
};

const arrSum = (arr = []) => {
    return arr.reduce((prev, next) => {
        return prev + next;
    }, 0);
};

module.exports = {
    filterOutFalsy,
    arrLength,
    lastElem,
    arrSum,
};
