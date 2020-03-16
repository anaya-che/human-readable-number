module.exports = function toReadable (number) {
    arr1 = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    arr2 = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    arr2 = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let numArr = number.toString().split('');
    let len = numArr.length;
    let str1 = '';
    let str2 = '';
    if (number == 0) { return str = 'zero'}
    if (len > 2) {
        let str1 = arr1.filter((v) => arr1.indexOf(v) == numArr[0]) + ' ' + 'hundred';
        (numArr[1] > 1) ? str2 = arr2.filter((v) => arr2.indexOf(v) == numArr[1]) +  ' ' + arr1.filter((v) => arr1.indexOf(v) == numArr[2]) : str2 = arr1.filter((v) => arr1.indexOf(v) == (numArr[1]+numArr[2]));
        return str = (str1 + ' ' + str2).toString().trim();
    } 
    else if (len > 1) {
        (numArr[0] != 1) ? str2 = arr2.filter((v) => arr2.indexOf(v) == numArr[0]) +  ' ' + arr1.filter((v) => arr1.indexOf(v) == numArr[1]) : str2 = arr1.filter((v) => arr1.indexOf(v) == (numArr[0]+numArr[1]));
        return str = str2.toString().trim();
    } else {
        str1 = arr1.filter((v) => arr1.indexOf(v) == numArr[0])
        return str = str1.toString();
    }  
}
