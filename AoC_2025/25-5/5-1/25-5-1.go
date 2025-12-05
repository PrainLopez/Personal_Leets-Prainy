package main

import (
	"bufio"
	"fmt"
	"os"
)

func freshIngredients(ranges [][]int, ingredients []int) int {
	answer := 0
	for _, ingredient := range ingredients {
		for _, ran := range ranges {
			begin, end := ran[0], ran[1]
			if ingredient >= begin && ingredient <= end {
				fmt.Println("Ingredient ID", ingredient, "is fresh because it falls into range", begin, "-", end)
				answer++
				break
			}
		}
	}

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
	ingredients := []int{}

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			continue
		}
		var begin, end int
		n, err := fmt.Sscanf(line, "%d-%d", &begin, &end)
		if err != nil && n != 1 {
			fmt.Fprintln(os.Stderr, "Error parsing line:", err)
			continue
		}

		if n == 2 {
			ranges = append(ranges, []int{begin, end})
		} else if n == 1 {
			ingredients = append(ingredients, begin)
		}
	}
	//fmt.Println(ingredients)
	//fmt.Println(ranges)

	fmt.Println("Number of fresh ingredients:", freshIngredients(ranges, ingredients))
}
