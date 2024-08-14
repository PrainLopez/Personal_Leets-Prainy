package main

import "fmt"

func groupAnagrams(strs []string) [][]string {
	mapping := make(map[string][]string)

	for _, str := range strs {
		hashMap := make(map[rune]int)

		for _, ch := range str {
			hashMap[ch] = hashMap[ch] + 1
		}

		keyStr := fmt.Sprintf("%v", hashMap)

		mapping[keyStr] = append(mapping[keyStr], str)
	}

	var res [][]string
	for _, val := range mapping {
		res = append(res, val)
	}

	return res
}

func main() {
	strs := []string{"ddddddddddg", "dgggggggggg"}
	print(groupAnagrams(strs))
}
