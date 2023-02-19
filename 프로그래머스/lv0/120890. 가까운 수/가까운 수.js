function solution(array, n) {
    var answer = 0;
    
    let arr = array.map((el) => Math.abs(el - n));
    
    let min = Math.min(...arr);
    
    let minArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) minArr.push(array[i]);
    }
    answer = Math.min(...minArr)
    
    return answer;    
}