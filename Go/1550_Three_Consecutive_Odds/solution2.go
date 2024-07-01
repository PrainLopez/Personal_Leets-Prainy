package solution

func threeConsecutiveOdds(arr []int) bool {
	counter := 0
	for i := 0; i < len(arr); i++ {
		if arr[i]%2 == 1 {
			counter++
		} else {
			counter = 0
		}

		if counter > 2 {
			return true
		}
	}

	return false
}
