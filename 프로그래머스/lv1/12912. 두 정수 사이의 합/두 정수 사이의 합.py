def solution(a, b):
    answer = 0
    
    num_list = [a, b]
    
    if a == b:
        return a
    
    for i in range(min(num_list), max(num_list)+1):
        answer += i
    
    return answer