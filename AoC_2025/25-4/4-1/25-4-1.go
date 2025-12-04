package main

import (
	"bufio"
	"fmt"
	"os"
)

func checkBoundaries(i int, j int, sideLen int) [][]int {
	left := j-1 >= 0
	right := j+1 < sideLen
	up := i-1 >= 0
	down := i+1 < sideLen

	neighbors := [][]int{}
	if left && up {
		neighbors = append(neighbors, []int{i - 1, j - 1})
	}
	if up {
		neighbors = append(neighbors, []int{i - 1, j})
	}
	if right && up {
		neighbors = append(neighbors, []int{i - 1, j + 1})
	}
	if left {
		neighbors = append(neighbors, []int{i, j - 1})
	}
	if right {
		neighbors = append(neighbors, []int{i, j + 1})
	}
	if left && down {
		neighbors = append(neighbors, []int{i + 1, j - 1})
	}
	if down {
		neighbors = append(neighbors, []int{i + 1, j})
	}
	if right && down {
		neighbors = append(neighbors, []int{i + 1, j + 1})
	}

	return neighbors
}

func main() {
	file, err := os.Open("input_25-4")
	if err != nil {
		fmt.Println("opening file error:", err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	rolls := [][]bool{}
	for scanner.Scan() {
		line := scanner.Text()
		lineMap := []bool{}
		for _, c := range line {
			switch c {
			case '@':
				lineMap = append(lineMap, true)
			case '.':
				lineMap = append(lineMap, false)
			}
		}
		rolls = append(rolls, lineMap)
	}

	//fmt.Println("Total rolls read:", len(rolls)*len(rolls[0]))
	res := 0
	for i, line := range rolls {
		for j, place := range line {
			if !place {
				continue
			}
			neighbors := 0
			for _, n := range checkBoundaries(i, j, len(rolls)) {
				if rolls[n[0]][n[1]] {
					neighbors++
				}
			}

			if neighbors < 4 {
				res++
			}
		}
	}

	fmt.Println("Accessible rolls:", res)
}
