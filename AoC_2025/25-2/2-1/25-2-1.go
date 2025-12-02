package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func splitCommas(data []byte, atEOF bool) (advance int, token []byte, err error) {
	if len(data) == 0 {
		if atEOF {
			return 0, nil, bufio.ErrFinalToken
		}
		return 0, nil, nil
	}

	for i := 0; i < len(data); i++ {
		if data[i] == ',' {
			tok := data[:i]
			return i + 1, tok, nil
		}
	}

	if atEOF {
		return len(data), data, nil
	}

	return 0, nil, nil
}

func main() {
	file, err := os.Open("input_25-2")
	if err != nil {
		fmt.Fprintln(os.Stderr, "Error opening file:", err)
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(splitCommas)
	sum := 0

	for scanner.Scan() {
		rangeText := scanner.Text()
		var start, end int

		n, err := fmt.Sscanf(rangeText, "%d-%d", &start, &end)
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error parsing range:", err)
		}
		if n != 2 {
			fmt.Fprintln(os.Stderr, "Invalid range format:", rangeText)
			continue
		}
		fmt.Println("Checking range:", start, "to", end)

		for i := start; i <= end; i++ {
			str := strconv.Itoa(i)
			if len(str)%2 == 0 {
				//fmt.Println("Checking ID:", str, "/r")
				mid := len(str) / 2
				if str[:mid] == str[mid:] {
					sum += i
				}
			}
		}
	}

	fmt.Println("Sum of all invalid IDs:", sum)
}
