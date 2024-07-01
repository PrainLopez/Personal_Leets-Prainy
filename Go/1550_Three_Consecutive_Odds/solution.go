package solution

func threeConsecutiveOdds(arr []int) bool {
	for i := 0; i < len(arr)-2; i++ {
		if arr[i]*arr[i+1]*arr[i+2]%2 == 1 {
			return true
		}
	}

	return false
}
