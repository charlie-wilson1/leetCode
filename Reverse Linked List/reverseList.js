//reverse a linked list
/* {val: 2, next {val: 1, next: null}}

I: a linked list
O:the inpued linked list reversed
E: 
C: O(n) -> time O(1) -> space


val = 2 val = 3 val = 1
{val: 1, next: {val: 2, next: {val: 3, next: null}}}

last undefined,
current node.value 1, 
next 2,


*/

var reverseList = function(head) {
    let prev = null
    let nextNode = null

    while (head !== null) {
        nextNode = head.next
        head.next = prev
        prev = head
        head = nextNode
    }
    
    return prev
};