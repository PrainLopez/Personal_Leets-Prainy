#include <stdbool.h>

bool isAnagram(char *s, char *t) {
    int counter[26];
    for (int i = 0; i < 26; ++i) {
        counter[i] = 0;
    }

    while (*s != '\0') {
        char curr_ch = *s;
        counter[curr_ch - 97]++;

        ++s;
    }

    while (*t != '\0') {
        char curr_ch = *t;
        counter[curr_ch - 97]--;

        ++t;
    }

    for (int i = 0; i < 26; ++i) {
        if (counter[i] != 0) {
            return false;
        }
    }

    return true;
}