/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    
};

let test = () => {
    let list = new ListNode(2);
    let node2 = list.next = new ListNode(3);
    node2.next = new ListNode(4);
    let list2 = new ListNode(4);
    let l2n2 = list2.next = new ListNode(5);
    l2n2.next = new ListNode(6);
}
test()