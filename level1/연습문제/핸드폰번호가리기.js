function solution(phone_number) {
    let answer = '';
    const arr = phone_number.split('');
    for (let i = 0; i < arr.length - 4; i++) {
        answer += '*';
    }

    const useNumber = arr.splice(-4);
    useNumber.forEach((num) => {
        answer += num;
    });

    return answer;
}
