package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

func freshIDs(ranges [][]int) int {
	answer := 0

	sort.Slice(ranges, func(i, j int) bool {
		return ranges[i][0] < ranges[j][0]
	})

	curr := []int{0, -1}
	for _, ran := range ranges {
		begin, end := ran[0], ran[1]
		if begin > curr[1]+1 {
			answer += curr[1] - curr[0] + 1
			curr[0] = begin
			curr[1] = end
		} else if end > curr[1] {
			curr[1] = end
		}
	}
	answer += curr[1] - curr[0] + 1

	return answer
}

func main() {
	file, err := os.Open("input_25-5")
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error opening file:", err)
		return
	}
	defer file.Close()

	ranges := [][]int{}

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			break
		}
		var begin, end int
		_, err := fmt.Sscanf(line, "%d-%d", &begin, &end)
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error parsing line:", err)
			continue
		}

		ranges = append(ranges, []int{begin, end})
	}
	//fmt.Println(ranges)

	fmt.Println("Number of fresh ingredient IDs:", freshIDs(ranges))
}
