#include <stdlib.h>
#include <stdio.h>
//Definition for a binary tree node.
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
struct stack {
    struct stack_element* top;
};

struct stack_element {
    struct TreeNode* value;
    struct stack_element* next;
};

struct TreeNode* stack_pop(struct stack* st) {
    struct stack_element* element = st->top;
    if (element == NULL) { return NULL; }

    st->top = element->next;
    struct TreeNode* out = element->value;

    free(element);
    return out;
}

void stack_push(struct stack* st, struct TreeNode* value) {
    struct stack_element* element = malloc(sizeof (struct stack_element));
    element->value = value;
    element->next = st->top;
    st->top = element;
}

int* inorderTraversal(struct TreeNode* root, int* returnSize){
    struct stack* st = malloc(sizeof (struct stack));
    st->top = NULL;
    struct stack* path = malloc(sizeof (struct stack));
    path->top = NULL;

    while (st->top || root) {
        if (root) {
            stack_push(st, root);
            ++*returnSize;
            root = root->left;
        } else {
            root = stack_pop(st);
            stack_push(path, root);
            root = root->right;
        }
    }

    int* result = malloc(sizeof (int) * (*returnSize));
    for (int i = *returnSize - 1; i >= 0; --i) {
        struct TreeNode* node = stack_pop(path);
        result[i] = node->val;
    }
    return result;
}

int main(void) {
    struct TreeNode* root = malloc(sizeof (struct TreeNode));
    root->val = 1;
    root->left = NULL;
    root->right = malloc(sizeof (struct TreeNode));

    root->right->val = 2;
    root->right->left = malloc(sizeof (struct TreeNode));
    root->right->right = NULL;

    root->right->left->val = 3;
    root->right->left->left = NULL;
    root->right->left->right = NULL;

    int* path;
    int size = 0;
    path = inorderTraversal(root, &size);
    for(int i = 0; i < size; i++) {
        printf("%d, ", path[i]);
    }
    printf("\n");

    return 0;
}