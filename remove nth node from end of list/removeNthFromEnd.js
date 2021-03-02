/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    //create a counter to determine the lenght of the listElements
    let length = 0;
    let current = head
    //iterate over the list and at each new node increment counter
    while (current) {
        length++;
        current = current.next;
    }
    // create a node to remove varable set to the length - next
    let nodeToRemove = length - n + 1;
    let node = null;
    current = head
    //iterate over list again and when its on the node thats at position nodeToRemove switch its next value to next.next
    while (nodeToRemove-- !== 0) {
        node = current;
        current = current.next;
    }
    if (node !== null) {
        node.next = current.next;
        current.next = null;
    } else {
        return head.next;
    }
    return head
};

let test = () => {
    let head = new ListNode(1);
    let head2 = head.next = new ListNode(2);
    let head3 = head2.next = new ListNode(3);
    let head4 = head3.next = new ListNode(4);
    head4.next = new ListNode(5);
    console.log(removeNthFromEnd(head, 2))
}
test();