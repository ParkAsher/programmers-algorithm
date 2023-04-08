function solution(s) {
    var answer = '';
    
    const arr = s.split(' ')
    const min = Math.min.apply(null, arr)
    const max = Math.max.apply(null, arr)
    
    answer = min + ' ' + max
    
    return answer;
}