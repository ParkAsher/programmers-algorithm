function solution(arr) {
    var answer = [];
    
    const min = Math.min.apply(null, arr) 

    answer = arr.filter((v) => v !== min)
    
    if (!answer.length) answer.push(-1)
    
    return answer;
}