import java.util.HashMap

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counter = new HashMap<>();
        for (int element : nums) {
            counter.put(element, counter.getOrDefault(element, 0) + 1);
        }

        PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(
                (a, b)->Integer.compare(b.getValue(), a.getValue())
        );

        for (Map.Entry<Integer, Integer> entry : counter.entrySet()) {
            heap.offer(entry);
        }

        int[] result = new int[k];
        for(int i = 0; i < k; i++) {
            result[i] = Objects.requireNonNull(heap.poll()).getKey();
        }

        return result;
    }
}