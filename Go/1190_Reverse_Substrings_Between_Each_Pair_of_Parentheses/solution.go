package _1190_Reverse_Substrings_Between_Each_Pair_of_Parentheses

func reverseParentheses(s string) string {
	var stack []int
	bracketsIndexMap := make(map[int]int)
	for i, ch := range s {
		switch ch {
		case '(':
			stack = append(stack, i)
		case ')':
			iLeft := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			bracketsIndexMap[iLeft] = i
			bracketsIndexMap[i] = iLeft
		}
	}

	index, direction := 0, 1
	var res string
	for index < len(s) {
		if s[index] == '(' || s[index] == ')' {
			direction = 0 - direction
			index = bracketsIndexMap[index]
		} else {
			res = res + string(s[index])
		}

		index += direction
	}

	return res
}
