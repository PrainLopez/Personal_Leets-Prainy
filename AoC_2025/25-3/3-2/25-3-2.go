package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

func maxJoltage(bank string, batteryCount int) int {
	//fmt.Println(bank)
	if batteryCount < 1 {
		return 0
	}

	bankWidth := len(bank)
	if bankWidth == batteryCount {
		i, err := strconv.Atoi(bank)
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error converting string to int:", err)
			return 0
		}
		return i
	}
	if bankWidth < batteryCount {
		panic("too few batteries")
	}
	battery := 0
	digit := -1
	//fmt.Println("bankWidth:", bankWidth, "batteryCount:", batteryCount)

	for i := 0; i < bankWidth-batteryCount+1; i++ {
		s, err := strconv.Atoi(string(bank[i]))
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error converting string to int:", err)
			continue
		}
		if s > battery {
			battery = s
			digit = i
		}
	}

	return battery*int(math.Pow10(batteryCount-1)) + maxJoltage(bank[digit+1:], batteryCount-1)
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
		joltage := maxJoltage(line, 12)
		//fmt.Println(line, "->", joltage)
		res += joltage
	}

	fmt.Println("Total max joltage from all banks:", res)
}
