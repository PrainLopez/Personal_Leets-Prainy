package _273_Integer_to_English_Words

import (
	"fmt"
	"strings"
)

func numberToWords(num int) string {
	digits := []string{"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"}
	tens := []string{"Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"}
	teens := []string{"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"}
	fragment := []string{"Thousand", "Million", "Billion"}

	if num == 0 {
		return fmt.Sprint(digits[num])
	}

	section := func(num int) string {
		hundred := num / 100
		ten := (num % 100) / 10
		digit := num % 10

		result := ""
		if hundred > 0 {
			result += fmt.Sprintf("%s Hundred ", digits[hundred])
		}
		if ten == 1 && digit > 0 {
			result += fmt.Sprintf("%s ", teens[digit-1])
		} else {
			if ten > 0 {
				result += fmt.Sprintf("%s ", tens[ten-1])
			}
			if digit > 0 {
				result += fmt.Sprintf("%s ", digits[digit])
			}
		}

		return result
	}

	result := ""
	frag := 0
	for num > 0 {
		threeDigits := num % 1000

		readout := section(threeDigits)
		if frag > 0 && len(readout) > 0 {
			readout += fmt.Sprintf("%s ", fragment[frag-1])
		}
		result = readout + result

		num = num / 1000
		frag++
	}

	return strings.TrimSpace(result)
}
