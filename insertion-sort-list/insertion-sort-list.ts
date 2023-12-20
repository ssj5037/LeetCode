/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertionSortList(head: ListNode | null): ListNode | null {
    let sorted = new ListNode();
    let curr = head;
    
    while (curr) {
        let prev = sorted;
        
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }
        
        const currConti = curr.next;
        const prevNext = new ListNode(curr.val, prev.next);
        
        curr = currConti;
        prev.next = prevNext;
    }
    
    return sorted.next;
};