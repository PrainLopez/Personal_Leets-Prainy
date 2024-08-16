package main

import "container/heap"

type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func connectSticks(sticks []int) int {
	h := &IntHeap{}
	heap.Init(h)
	for _, stick := range sticks {
		heap.Push(h, stick)
	}
	var result int
	for h.Len() > 1 {
		tmp := heap.Pop(h).(int) + heap.Pop(h).(int)
		result += tmp
		heap.Push(h, tmp)
	}
	return result
}
