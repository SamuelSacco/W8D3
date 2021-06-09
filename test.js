function test(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = new Array("_", "_", "_", "_", "_", "_", "_", "_")
    }
    for (let i = 0; i < arr.length; i++){
        row = arr[i]
        console.log(row.join(" "))
    }
    return arr
}

arr = new Array(8) //[,,,,,,,,]
console.log(test(arr))