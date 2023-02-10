function solution(price) {
    let answer = price;
    if (price >= 500000) return answer = Math.floor(price * 0.8);
    if (price >= 300000) return answer = Math.floor(price * 0.9);
    if (price >= 100000) return answer = Math.floor(price * 0.95);
    
    return answer
}