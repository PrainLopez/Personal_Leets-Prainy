package solution

func minOperations(logs []string) int {
	result := 0

	for _, operation := range logs {
		switch operation {
		case "../":
			if result > 0 {
				result--
			}
		case "./":
			continue
		default:
			result++
		}
	}

	return result
}
