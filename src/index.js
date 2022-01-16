module.exports = function reverse(n) {
    let num = n.toString();
    let stringNumSplit = num.split('');
    let numReverse = stringNumSplit.reverse();
    let reverse = numReverse.join('');
    return parseFloat(reverse);

}
