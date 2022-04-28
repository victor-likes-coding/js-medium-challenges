const filterOutFalsy = (in1, in2) => (in1 ? in2 : in1);

const arrLength = (arr = []) => {
    return arr.length;
};

const lastElem = (arr = []) => {
    return arr[arr.length - 1];
};

module.exports = {
    filterOutFalsy,
    arrLength,
    lastElem,
};
