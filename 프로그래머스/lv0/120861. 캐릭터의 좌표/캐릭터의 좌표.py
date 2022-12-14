def solution(keyinput, board):
    answer = [0,0]
    
    for key in keyinput:
        if key == 'left' and -(board[0]//2) < answer[0]:
            answer[0] = answer[0] - 1
            continue
        if key == 'right' and answer[0] < board[0]//2:
            answer[0] = answer[0] + 1
            continue
        if key == 'up' and answer[1] < board[1]//2:
            answer[1] = answer[1] + 1
            continue
        if key == 'down' and -(board[1]//2) < answer[1] :
            answer[1] = answer[1] - 1
            continue         

    return answer