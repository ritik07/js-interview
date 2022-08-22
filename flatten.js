// case one flatten an array
const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

//in built
function flatten(arr) {
    return arr.flat(Infinity)
}

// console.log(flatten(numArr))

//Recursion and reduce method
// concat -> to join two arrays

function flattenRecursive(arr) {
    const newArray = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flattenRecursive(item))
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    return newArray
}

// console.log(flattenRecursive(numArr))

//without recursion

const flatenArr = []
function flatten2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten2(arr[i])
        } else {
            flatenArr.push(arr[i])
        }
    }
    return flatenArr
}

// console.log(flatten2(numArr))

// flatten an object
var user = {
    name: "Vishal",
    address: {
        primary: {
            house: "109",
            street: {
                main: "21",
                cross: "32"
            }
        }
    }
};

// output
// {
//     user_name: "Vishal",
//     user_address_primary_house: "109",
//     user_address_primary_street_main: "21",
//     user_address_primary_street_cross: "32",
//   }


const flattenObject = {}
function falttenObjFn(userObj, parentKey) {
    Object.keys(userObj).forEach((key) => {
        let prefix = `${parentKey}_${key}`
        // console.log(prefix)
        if (typeof userObj[key] == 'object') {
            console.log(key)
            falttenObjFn(userObj[key], prefix)
        } else {
            Object.assign(flattenObject, { ...flattenObject, [prefix]: userObj[key] })
        }
    })
    return flattenObject
}

// console.log(falttenObjFn(user, 'user'))