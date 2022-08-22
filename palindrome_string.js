// palindrome_string

let s = "a man nam a"
let ss = "a man nam asd dasdsa ds"

function palindrome_string(s) {
    let string = s.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false
        }
        left++
        right--
    }
    return true
}


// console.log(palindrome_string(s));