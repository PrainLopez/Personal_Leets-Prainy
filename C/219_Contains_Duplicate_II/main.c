#define HASH_SIZE 256

struct hash_node {
    int value;
    struct hash_node* next;
};

struct hash_bucket {
    struct hash_node** list;
};

int hash_func(int value) {
    return abs(value % HASH_SIZE);
}

struct hash_bucket* hash_init() {
    struct hash_bucket* ht = calloc(HASH_SIZE, sizeof(struct hash_bucket));
    ht->list = calloc(HASH_SIZE, sizeof(struct hash_bucket));

    return ht;
}

struct hash_bucket* hash_add(struct hash_bucket* ht, int value) {
    struct hash_node* curr = ht->list[hash_func(value)];

    struct hash_node* prev = NULL;
    while (curr) {
        if (curr->value == value) {
            return NULL;
        }

        prev = curr;
        curr = curr->next;
    }

    struct hash_node* node = calloc(1, sizeof(struct hash_node));
    node->value = value;
    node->next = NULL;
    if (prev) {
        prev->next = node;
    } else {
        ht->list[hash_func(value)] = node;
    }

    return ht;
}

struct hash_bucket* hash_remove(struct hash_bucket* ht, int value) {
    struct hash_node* curr = ht->list[hash_func(value)];

    if (curr) {
        struct hash_node* prev = NULL;
        while (curr) {
            if (curr->value == value) {
                if (prev) {
                    prev->next = curr->next;
                } else {
                    ht->list[hash_func(value)] = NULL;
                }
                free(curr);
                return ht;
            }

            curr = curr->next;
        }
    }
    return NULL;
}

bool containsNearbyDuplicate(int* nums, int numsSize, int k) {
    struct hash_bucket* ht = hash_init();

    int left = 0;
    for (int right = 0; right < numsSize; right++) {
        if (right - left > k) {
            hash_remove(ht, nums[left]);
            left++;
        } 
        if (hash_add(ht, nums[right]) == NULL) {
            return true;
        }
    }

    return false;
}