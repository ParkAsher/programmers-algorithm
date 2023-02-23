function solution(balls, share) {
    var answer = 0;
    
    let n = 1;
    let nm = 1;
    let m = 1;
    
    for(let i = 1; i<=balls; i++) {
        n *= i
    }
    
    for(let i = 1; i<=(balls-share); i++) {
        nm *= i;    
    }
    
    for (let i = 1; i<=share; i++) {
        m *= i;
    }
    
    answer = n / (nm * m)    
    
    return Math.round(answer);
}