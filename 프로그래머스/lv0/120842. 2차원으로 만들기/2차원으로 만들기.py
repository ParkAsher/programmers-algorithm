def solution(num_list, n):
    answer = []
    
    temp = []
    for i in range(len(num_list)):
        if i % n == 0 :
            temp = []
        
        if i % n == 1 :
            answer.append(temp)
        
        temp.append(num_list[i])
        
        
        
        
        
        
    
    return answer