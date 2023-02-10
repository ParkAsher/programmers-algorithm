function solution(array) {
    var answer = 0;
    
    sortedArray = array.sort((a,b) => a-b)
    answer = sortedArray[Math.floor(sortedArray.length / 2)]
    return answer;
}