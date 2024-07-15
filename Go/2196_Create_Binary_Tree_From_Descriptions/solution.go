package _2196_Create_Binary_Tree_From_Descriptions

// Definition for a binary tree node.
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func createBinaryTree(descriptions [][]int) *TreeNode {
	nodeMap := make(map[int]*TreeNode)
	children := make(map[int]bool)

	for _, val := range descriptions {
		children[val[1]] = true

		if nodeMap[val[0]] == nil {
			nodeMap[val[0]] = new(TreeNode)
			nodeMap[val[0]].Val = val[0]
		}
		if nodeMap[val[1]] == nil {
			nodeMap[val[1]] = new(TreeNode)
			nodeMap[val[1]].Val = val[1]
		}

		if val[2] == 1 {
			nodeMap[val[0]].Left = nodeMap[val[1]]
		} else {
			nodeMap[val[0]].Right = nodeMap[val[1]]
		}
	}

	var res *TreeNode
	for _, val := range descriptions {
		if children[val[0]] != true {
			res = nodeMap[val[0]]
		}
	}

	return res
}
