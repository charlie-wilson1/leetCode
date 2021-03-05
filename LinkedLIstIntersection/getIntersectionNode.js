/*
Write a program to find the node at which the intersection of two singly linked lists begins.

Example 1:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 
Example 2:
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 
Example 3:
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
 
Notes:
If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Each value on each linked list is in the range [1, 10^9].
Your code should preferably run in O(n) time and use only O(1) memory.
*/
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let findListLength = (list) => {
    let len = 1;

    let loop = list;

    while (loop.next !== null) {
        len++;
        loop = loop.next;
    }

    return len;
}
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    // Find length of each list
    let lenA = findListLength(headA);
    let lenB = findListLength(headB);

    // find if theres a difference in length
    let diff = Math.abs(lenA - lenB);

    // assign loop1 with big list and loop2 with small list
    let loop1 = lenA > lenB ? headA : headB;
    let loop2 = lenA <= lenB ? headA : headB;

    // Skip the bigger list forward so that both lists become equal in length
    while (diff) {
        loop1 = loop1.next;
        diff--;
    }
    
    // traverse both lists and check for intersection node
    while ( loop1 && loop2 ) {
        if (loop1 == loop2) {
            return loop1;
        }
        loop1 = loop1.next;
        loop2 = loop2.next;
    }
    return null;
}

let test = () => {
    let head1 = new ListNode(4)
    let h1Next = head1.next = new ListNode(1)
    h1Next.next = new ListNode(8)
    h1Next.next.next = new ListNode(4)
    h1Next.next.next.next = new ListNode(5)
    let head2 = new ListNode(5)
    let h2Next = head2.next = new ListNode(6)
    let h2Next2 = h2Next.next = new ListNode(1)
    h2Next2.next = h1Next.next
    console.log(getIntersectionNode(head1, head2))
    //8
}
test()

/*
let firstList = [];
    let secondList = [];

    let loop1 = headA;
    let num = 1

    while (loop1.next !== null) {
        firstList.push([JSON.stringify(loop1), num]);
        loop1 = loop1.next;
        num++
    }

    firstList
    let loop2 = headB;

    while (loop2.next !== null) {
        secondList.push(JSON.stringify(loop2));
        loop2 = loop2.next;
    }

    for (let ele of firstList) {
        if (secondList.indexOf(ele) >= 0) {
            return JSON.parse(ele);
        }
    }

    return null;
*/