function solution(arr) {
    if (arr.length === 1) return [-1];

    const minNum = Math.min(...arr);

    const answer = arr.filter((item) => item !== minNum);

    return answer;
}
