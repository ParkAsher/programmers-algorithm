function solution(numbers) {
    var answer = 0;
    
    for (let i of [0,1,2,3,4,5,6,7,8,9]) {
        if(!numbers.includes(i)) answer += i
    }

    return answer;
}