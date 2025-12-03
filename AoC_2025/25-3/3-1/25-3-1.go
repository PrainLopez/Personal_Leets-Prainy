package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func maxJoltage(bank string) int {
	bankWidth := len(bank)
	battery1 := 0
	battery2 := 0

	for i := 0; i < bankWidth-1; i++ {
		s, err := strconv.Atoi(string(bank[i]))
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error converting string to int:", err)
			continue
		}
		if s > battery1 {
			battery1 = s
			battery2 = 0
			continue
		}
		if battery1 > 0 && s > battery2 {
			battery2 = s
		}
	}

	n, err := strconv.Atoi(string(bank[bankWidth-1]))
	if err != nil {
		fmt.Println("Error converting string to int:", err)
		panic(0)
	}
	if battery2 < n {
		battery2 = n
	}

	return battery1*10 + battery2
}

func main() {
	file, err := os.Open("input_25-3")
	if err != nil {
		fmt.Println("opening file error:", err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	res := 0
	for scanner.Scan() {
		line := scanner.Text()
		res += maxJoltage(line)
	}

	fmt.Println("Total max joltage from all banks:", res)
}
