#define HASH_SIZE 10

struct hashtable {
    struct hashtable_element** hashtable_elements;
};

struct hashtable_element {
    int index;
    int value;
    struct hashtable_element* next;
};

int hash_func(int value) {
    return abs(value % HASH_SIZE);
}

int hashtable_find(struct hashtable *ht, int value) {
    int key = hash_func(value);
    struct hashtable_element *element = ht->hashtable_elements[key];
    while(element) {
        if(element->value == value) {
            return element->index;
        }
        element = element->next;
    }
    return -1;
}

void hashtable_add(struct hashtable *ht, int value, int index) {
    int key = hash_func(value);
    struct hashtable_element *element = malloc(sizeof(struct hashtable_element));
    element->value = value;
    element->index = index;
    element->next = NULL;

    struct hashtable_element *appendix = ht->hashtable_elements[key];
    if(appendix) {
        while(appendix->next) {
            appendix = appendix->next;
        }
        appendix->next = element;
    }else {
        ht->hashtable_elements[key] = element;
    }
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    struct hashtable *ht = malloc(sizeof(struct hashtable));
    ht->hashtable_elements = malloc(sizeof(struct hashtable_element)*HASH_SIZE);
    for(int i = 0; i < HASH_SIZE; i++) {
        ht->hashtable_elements[i] = NULL;
    }

    int *answer = malloc(sizeof(int)*2);
    for(int i = 0; i < numsSize; i++) {
        int complement = target - nums[i];
        int index = hashtable_find(ht, complement);
        if(index >= 0 && index != i) {
            *returnSize = 2;
            answer[0] = i;
            answer[1] = index;
            return answer;
        }
        hashtable_add(ht, nums[i], i);
    }
    return NULL;
}