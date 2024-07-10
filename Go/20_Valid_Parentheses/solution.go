package _20_Valid_Parentheses

func isValid(s string) bool {
	var stack []rune
	brackets := make(map[rune]rune)
	brackets['('] = ')'
	brackets['['] = ']'
	brackets['{'] = '}'

	for _, ch := range s {
		switch ch {
		case '(', '[', '{':
			stack = append(stack, brackets[ch])
		case ')', ']', '}':
			if len(stack) == 0 || stack[len(stack)-1] != ch {
				return false
			}
			stack = stack[:len(stack)-1]
		}
	}

	if len(stack) == 0 {
		return true
	} else {
		return false
	}
}
