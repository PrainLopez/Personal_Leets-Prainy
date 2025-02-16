package LC2013_Detect_Squares;

import java.util.ArrayList;
import java.util.HashMap;

public class DetectSquares {

    HashMap<Integer, ArrayList<int[]>> points;

    // Initializes the object with an empty data structure.
    public DetectSquares() {
        points = new HashMap<Integer, ArrayList<int[]>>();
    }

    // Adds a new point `point = [x, y]` to the data structure.
    public void add(int[] point) {
        if (!points.containsKey(point[1])) {
            points.put(point[1], new ArrayList<int[]>());
        }
        points.get(point[1]).add(point);
    }

    // Counts the number of ways to form axis-aligned squares with point `point = [x, y]` as described above.
    public int count(int[] point) {
        int output = 0;

        if (!points.containsKey(point[1])) {
            return output;
        }

        for (int[] secondPoint : points.get(point[1])) {
            final var sideLength = Math.abs(secondPoint[0] - point[0]);
            if (sideLength > 0) {
                if (points.containsKey(point[1] + sideLength)) {
                    var arr = points.get(point[1] + sideLength);
                    var contrarySidePoints = new HashMap<Integer, ArrayList<int[]>>();
                    for (int[] contrarySidePoint : arr) {
                        if (!contrarySidePoints.containsKey(contrarySidePoint[0])) {
                            contrarySidePoints.put(contrarySidePoint[0], new ArrayList<int[]>());
                        }
                        contrarySidePoints.get(contrarySidePoint[0]).add(contrarySidePoint);
                    }

                    if (contrarySidePoints.containsKey(point[0]) && contrarySidePoints.containsKey(secondPoint[0])) {
                        output += contrarySidePoints.get(point[0]).size() * contrarySidePoints.get(secondPoint[0]).size();
                    }
                }
                if (points.containsKey(point[1] - sideLength)) {
                    var arr = points.get(point[1] - sideLength);
                    var contrarySidePoints = new HashMap<Integer, ArrayList<int[]>>();
                    for (int[] contrarySidePoint : arr) {
                        if (!contrarySidePoints.containsKey(contrarySidePoint[0])) {
                            contrarySidePoints.put(contrarySidePoint[0], new ArrayList<int[]>());
                        }
                        contrarySidePoints.get(contrarySidePoint[0]).add(contrarySidePoint);
                    }

                    if (contrarySidePoints.containsKey(point[0]) && contrarySidePoints.containsKey(secondPoint[0])) {
                        output += contrarySidePoints.get(point[0]).size() * contrarySidePoints.get(secondPoint[0]).size();
                    }
                }
            }
        }

        return output;
    }
}
