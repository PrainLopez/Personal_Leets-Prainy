package solution

func findCenter(edges [][]int) int {
	firstEdge := edges[0]
	secondEdge := edges[1]

	if firstEdge[0] == secondEdge[0] || firstEdge[0] == secondEdge[1] {
		return firstEdge[0]
	} else {
		return firstEdge[1]
	}
}
