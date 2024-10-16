function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    progresses.forEach((progress, i) => {
        const spare = 100 - progress;
        const day = Math.ceil(spare / speeds[i]);
        days.push(day);
    });

    let maxDay = days[0];
    let cnt = 1;
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            cnt++;
        } else {
            maxDay = days[i];
            answer.push(cnt);
            cnt = 1;
        }
    }

    answer.push(cnt);
    return answer;
}
