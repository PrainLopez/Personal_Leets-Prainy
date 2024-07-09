package solution

func findTheWinner(n int, k int) int {
	var friends []int
	for i := 1; i <= n; i++ {
		friends = append(friends, i)
	}

	for len(friends) > 1 {
		for i := 0; i < k-1; i++ {
			temp := friends[0]
			friends = append(friends[1:], temp)
		}

		friends = friends[1:]
	}

	return friends[0]
}
