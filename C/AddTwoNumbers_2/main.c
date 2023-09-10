#define DECIMAL 10

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    int carry = 0;
    int sum = 0;
    int v1, v2;
    struct ListNode* answer = NULL;
    struct ListNode* cur = NULL;
    struct ListNode* prev = NULL;

    while(l1 || l2 || (carry > 0)) {
        if(l1) v1 = l1->val;
        else v1 = 0;
        if(l2) v2 = l2->val;
        else v2 = 0;
        sum = v1 + v2 + carry;
        carry = sum / DECIMAL;
        sum = sum % DECIMAL;

        cur = malloc(sizeof(struct ListNode));
        cur->val = sum;
        cur->next = NULL;
        if(prev) {
            prev->next = cur;
        }

        if(answer == NULL) answer = cur;

        prev = cur;
        if(l1) l1 = l1->next;
        if(l2) l2 = l2->next;
        sum = 0;
    }

    return answer;
}