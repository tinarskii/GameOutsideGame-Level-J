const num = '0110100100100000001011010100010100100101111000100000010001010000110010011010111101110001';
const nums = num.match(/.{1,4}/g);

const tree = ' wEv1nToLhauSmcd'.split('')

let numberArr = [];
let treeArr = [];

nums.forEach((numbers) => {
    const number = parseInt(numbers, 2);
    numberArr.push(number);
})

if (numberArr.length === nums.length) {
    numberArr.forEach(numbers => {
        treeArr.push(tree[numbers]);
    })
}

if (treeArr.length === numberArr.length) {
    console.log(treeArr.join(''));
}