package _46_LRU_Cache

import (
	"container/list"
)

type LRUElement struct {
	key   int
	value int
}

type LRUCache struct {
	capacity int
	usage    *list.List
	cache    map[int]*list.Element
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		usage:    list.New(),
		cache:    make(map[int]*list.Element, capacity),
	}
}

func (this *LRUCache) Get(key int) int {
	if ele, ok := this.cache[key]; ok {
		this.usage.MoveToFront(ele)
		return ele.Value.(LRUElement).value
	}
	return -1
}

func (this *LRUCache) Put(key int, value int) {
	if ele, ok := this.cache[key]; ok {
		ele.Value = LRUElement{
			key:   key,
			value: value,
		}
		this.usage.MoveToFront(ele)
		return
	} else if this.capacity == this.usage.Len() {
		toEvict := this.usage.Back()
		delete(this.cache, toEvict.Value.(LRUElement).key)
		this.usage.Remove(toEvict)
	}
	newNode := LRUElement{
		key:   key,
		value: value,
	}
	this.cache[key] = this.usage.PushFront(newNode)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */
