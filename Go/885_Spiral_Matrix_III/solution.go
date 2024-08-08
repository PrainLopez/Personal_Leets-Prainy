package _885_Spiral_Matrix_III

func spiralMatrixIII(rows int, cols int, rStart int, cStart int) [][]int {
	directions := [][]int{{1, 0}, {0, 1}, {-1, 0}, {0, -1}}
	res := append([][]int{}, []int{rStart, cStart})

	step := 0
	for len(res) < rows*cols {
		for i := 0; i < step/2+1; i++ {
			cStart += directions[step%4][0]
			rStart += directions[step%4][1]

			if cStart >= 0 && cStart < cols && rStart >= 0 && rStart < rows {
				res = append(res, []int{rStart, cStart})
			}
		}
		step++
	}

	return res
}
