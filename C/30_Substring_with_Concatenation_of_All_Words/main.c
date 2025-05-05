/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool match(char *head, char *word)
{
    while (*word && *head)
    {
        if (*head != *word)
        {
            return false;
        }
        head++;
        word++;
    }

    return true;
}

bool match_batch(char *head, char **words, int wordsSize, bool *remains)
{
    for (int i = 0; i < wordsSize; i++)
    {
        if (remains[i] && match(head, words[i]))
        {
            remains[i] = false;
            return true;
        }
    }

    return false;
}

bool match_concat(char *head, char **words, int wordsSize)
{
    int wordSize = strlen(words[0]);
    bool *remains = malloc(wordsSize * sizeof(bool));
    for (int i = 0; i < wordsSize; i++)
    {
        remains[i] = true;
    }

    for (char *i = head; i < head + wordsSize * wordSize; i += wordSize)
    {
        if (!match_batch(i, words, wordsSize, remains))
        {
            free(remains);
            return false;
        }
    }

    free(remains);
    return true;
}

int *findSubstring(char *s, char **words, int wordsSize, int *returnSize)
{
    int sSize = strlen(s);
    int wordSize = strlen(words[0]);
    int matchSize = wordsSize * wordSize;

    *returnSize = 0;
    if (sSize - wordSize < 0)
        return malloc(0);
    int *res = malloc((sSize - matchSize + 1) * sizeof(int));

    for (int i = 0; i + matchSize <= sSize; i++)
    {
        if (match_concat(s + i, words, wordsSize))
        {
            res[*returnSize] = i;
            (*returnSize)++;
        }
    }

    return res;
}