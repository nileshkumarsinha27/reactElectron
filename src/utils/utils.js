const isDataExists = (arr, num = 0) => arr && arr.length > num;
const checkEmptyString = str => str === '';
const convertNum = any => Number(any);

export { isDataExists, checkEmptyString, convertNum };
