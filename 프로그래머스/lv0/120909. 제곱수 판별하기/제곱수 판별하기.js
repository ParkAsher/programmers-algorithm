function solution(n) {
    var answer = 2;
    
    for (let i = 1; i <= n; i++) {
        if (n%i === 0 && Math.floor(n / i) === i) return answer = 1
        
    }
    
    return answer;
}