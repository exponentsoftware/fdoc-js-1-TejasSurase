function reverseArray(arr) {
    let a = 0;
    if (arr.length % 2 === 0)
        a = 0;
        a = 1;
    for (let i = 0; i <= arr.length/2-a; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}