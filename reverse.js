function rev(str){
    let str1=str.split(' ');
    let rev=str1.map(str1=>str1.split('').reverse().join(''));
    return rev.join(' ');
}
let str="This is rainy day";
let str3=rev(str);
console.log(str3);