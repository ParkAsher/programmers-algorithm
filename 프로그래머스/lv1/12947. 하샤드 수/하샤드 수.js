function solution(x) {
    var answer = true;
    
    const result = x.toString().split('').reduce((acc, cur) => {
        return acc += parseInt(cur)
    }, 0)
    
    console.log(result)
    
    return x % result === 0 ? true : false;
}