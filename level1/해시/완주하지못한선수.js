function solution(participant, completion) {
  const map = new Map();
  participant.forEach(p => {
      if (map.get(p)) {
          map.set(p, map.get(p) + 1);            
      } else {
          map.set(p, 1);
      }
  })
  
  completion.forEach(c => {
      if (map.get(c)) {
          map.set(c, map.get(c) - 1);
      }
  })
  
  let answer = '';
  map.forEach((value, key) => {
      if (value !== 0) {
          answer = key;
      }
  })
  
  return answer;
}