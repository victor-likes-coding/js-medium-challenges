const filterOutFalsy = (in1, in2) => (in1 ? in2 : in1);

const arrLength = (arr = []) => {
    return arr.length;
};

module.exports = {
    filterOutFalsy,
    arrLength,
};
