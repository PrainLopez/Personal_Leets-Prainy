package solution

func passThePillow(n int, time int) int {
	cycle := time / (n - 1)
	complement := time % (n - 1)

	if cycle%2 == 1 {
		return n - complement
	} else {
		return 1 + complement
	}
}
