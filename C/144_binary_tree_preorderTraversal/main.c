#include <stdlib.h>
#include <stdio.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
 };

struct stack {
    struct stack_element* head;
};

struct stack_element {
    struct TreeNode* path;
    struct stack_element* next;
};

struct TreeNode* stack_pop(struct stack* st) {
    struct stack_element* element = st->head;
    if(element == NULL) return NULL;

    st->head = element->next;
    struct TreeNode* out = element->path;

    free(element);
    return out;
}

void stack_push(struct stack* st, struct TreeNode* path) {
    struct stack_element* element = malloc(sizeof(struct stack_element));
    element->path = path;
    element->next = st->head;
    st->head = element;
}

int* preorderTraversal(struct TreeNode* root, int* returnSize){
    struct stack* st = malloc(sizeof(struct stack));
    st->head = NULL;

    struct stack* result = malloc(sizeof(struct stack));
    *returnSize = 0;

    struct TreeNode* pNode = root;
    while(st->head || pNode) {
        if(pNode) {
            stack_push(result, pNode);
            (*returnSize)++;

            stack_push(st, pNode);
            pNode = pNode->left;
        } else {
            struct TreeNode* node = stack_pop(st);
            pNode = node->right;
        }
    }

    int* path = malloc(sizeof(int) * (*returnSize));
    for(int i = *returnSize - 1; i >=0; i--) {
        path[i] = stack_pop(result)->val;
    }

    return path;
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
    int size = 3;
    path = preorderTraversal(root, &size);
    for(int i = 0; i < size; i++) {
        printf("%d, ", path[i]);
    }
    printf("\n");

    return 0;
}