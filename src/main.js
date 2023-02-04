"use strict";
let printErrors = (str) => {
    let error = 0;
    for (let i = 0; i <= str.length; i++) {
        if (/[n-zN-Z]/.test(str.charAt(i))) {
            error += 1;
        }
    }
    ;
    return `${error}/${str.length}`;
};
// console.log(printErrors("aazz"));
