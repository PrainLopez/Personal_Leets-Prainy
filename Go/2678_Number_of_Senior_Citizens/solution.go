package _2678_Number_of_Senior_Citizens

func countSeniors(details []string) int {
	count := 0
	for _, str := range details {
		if str[11] > '6' {
			count++
		} else if str[11] == '6' {
			if str[12] > '0' {
				count++
			}
		}
	}

	return count
}
