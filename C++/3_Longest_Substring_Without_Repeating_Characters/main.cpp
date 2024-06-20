#define HASH_SIZE 128

struct hashtable {
    struct hashtable_element** hashtable_elements;
};

struct hashtable_element {
    int frequency;
};

int hashtable_dup(struct hashtable* ht) {
    for(int i = 0; i < HASH_SIZE; i++) {
        if(ht->hashtable_elements[i]->frequency > 1) return 1;
    }
    return -1;
}

void hashtable_add(struct hashtable* ht, char c) {
    int index = (int)(c);
    ++ht->hashtable_elements[index]->frequency;
}

void hashtable_del(struct hashtable* ht, char c) {
    uint index = (uint)(c);
    --ht->hashtable_elements[index]->frequency;
}

int lengthOfLongestSubstring(char * s){
    if(*s == NULL) return 0;
    char* start = s;
    char* end = s + 1;
    struct hashtable* ht = malloc(sizeof(struct hashtable));
    ht->hashtable_elements = malloc(sizeof(struct hashtable_element*) * HASH_SIZE);
    for(int i = 0; i < HASH_SIZE; i++) {
        struct hashtable_element* element = malloc(sizeof(struct hashtable_element));
        element->frequency = 0;
        ht->hashtable_elements[i] = element;
    }

    for(char* i = start; i < end; i++) {
        hashtable_add(ht, *i);
    }

    while(*end) {
        hashtable_add(ht, *end);

        if(hashtable_dup(ht) > 0){
            hashtable_del(ht, *start);
            start++;
        }

        end++;
    }

    return end - start;
}