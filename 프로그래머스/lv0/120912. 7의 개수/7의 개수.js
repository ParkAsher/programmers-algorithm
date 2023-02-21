function solution(array) {
    var answer = 0;
    
    array.join("").split("").map((el) => {
        if (el === String(7)) answer += 1
    })
    return answer;
}