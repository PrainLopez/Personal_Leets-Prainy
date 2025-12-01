package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	file, err := os.Open("input_25-1-1")
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
			dial -= step
			for dial < 0 {
				dial += 100
			}
		case 'R':
			dial += step
			for dial > 99 {
				dial -= 100
			}
		}

		if dial == 0 {
			res++
		}
	}
	fmt.Println("dial points at 0 a total of", res, "times.")
}
