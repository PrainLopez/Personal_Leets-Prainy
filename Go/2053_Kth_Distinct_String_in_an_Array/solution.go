package _2053_Kth_Distinct_String_in_an_Array

func kthDistinct(arr []string, k int) string {
	distinctStr := make(map[string]int)

	for _, str := range arr {
		freq, err := distinctStr[str]
		if err {
			distinctStr[str] = 0
		} else {
			distinctStr[str] = freq + 1
		}
	}

	for _, str := range arr {
		if distinctStr[str] == 1 {
			k--
		}
		if k == 0 {
			return str
		}
	}

	return ""
}
