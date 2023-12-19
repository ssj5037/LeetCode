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
        
        // prev가 들어 갈 자리 찾기
        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }
        // let next = curr.next;
        // curr.next = prev.next;
        // prev.next = curr;
        // curr = next;
        
        let currContinue = curr.next;
        let prevNext = new ListNode(curr.val, prev.next);
        prev.next = prevNext;
        curr = currContinue;
    }
    
    return sorted.next;
};