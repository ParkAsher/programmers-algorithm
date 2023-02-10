function solution(my_string) {
    var answer = 0;
    
    const arr = [...my_string]
    
    arr.map((str) => {
        return answer += !isNaN(str) ? parseInt(str) : 0  
    })
    
    return answer;
}