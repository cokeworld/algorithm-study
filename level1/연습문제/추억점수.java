import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = {};
        List<Integer> tempAnswer = new ArrayList<>();

        List<String> arrName = new ArrayList<>();
        for (String tempName : name) {
            arrName.add(tempName);
        }

        for (int i = 0; i < photo.length; i++) {
            int tempScore = 0;

            String[] tempPhoto = photo[i];
            for (String innerName : tempPhoto) {
                int nameIndex = arrName.indexOf(innerName);
                if (nameIndex != -1) {
                    tempScore += yearning[nameIndex];
                }
            }

            tempAnswer.add(tempScore);
        }
        
        if (tempAnswer.size() > 0) {
            answer = tempAnswer.stream().mapToInt(Integer::intValue).toArray();
        }
        return answer;
    }
}