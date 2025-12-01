package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("input_25-1")
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error opening file:", err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	dial := 50
	res := 0

	for scanner.Scan() {
		line := scanner.Text()

		var direction rune
		var step int
		n, err := fmt.Sscanf(line, "%c%d", &direction, &step)

		if err != nil {
			fmt.Println("Error parsing:", line)
			continue
		}
		if n != 2 {
			fmt.Printf("Could not fully parse '%s'. Parsed %d items.\n", line, n)
			continue
		}

		switch direction {
		case 'L':
			if dial != 0 && step >= dial {
				res += (step-dial)/100 + 1
			} else {
				res += step / 100
			}
			dial = (dial - step) % 100
			if dial < 0 {
				dial += 100
			}
		case 'R':
			res += step / 100
			step = step % 100
			if dial+step > 99 {
				res++
			}
			dial = (dial + step) % 100
		}

	}
	fmt.Println("dial clicks at 0 a total of", res, "times.")
}
