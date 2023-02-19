function solution(order) {
    var answer = 0;
    order.toString().split("").map((value) => value === "3" || value === "6" || value === "9" ? answer+=1 : answer = answer)
    return answer;
}