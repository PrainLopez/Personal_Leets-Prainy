package LC210_Course_Schedule_II;

import java.util.*;

class Solution {
    Map<Integer, List<Integer>> adjList;
    List<Integer> output;
    Set<Integer> visit;
    Set<Integer> cycle;

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        adjList = new HashMap<>();
        for (int[] edge : prerequisites) {
            adjList.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
        }

        output = new ArrayList<>();
        visit = new HashSet<>();
        cycle = new HashSet<>();

        for (int course = 0; course < numCourses; course++) {
            if (!dfs(course)) {
                return new int[0];
            }
        }

        return output.stream().mapToInt(Integer::intValue).toArray();
    }

    private boolean dfs(int course) {
        if (cycle.contains(course)) {
            return false;
        }
        if (visit.contains(course)) {
            return true;
        }

        cycle.add(course);
        for (int adj : adjList.getOrDefault(course, Collections.emptyList())) {
            if (!dfs(adj)) {
                return false;
            }
        }

        cycle.remove(course);
        visit.add(course);
        output.add(course);
        return true;
    }
}