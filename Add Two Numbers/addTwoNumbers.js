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

function listValsReversed(list) {
    let listElements = [];
    listElements.push(list.val);
    let nextNode = list.next;
    while (nextNode !== null) {
        listElements.push(nextNode.val);
        nextNode = nextNode.next;
    }
    return Number.parseInt(listElements.reverse().join(''));
}
var addTwoNumbers = function(l1, l2) {
    let list1Num = listValsReversed(l1);
    let list2Num = listValsReversed(l2);
    let sum = list1Num + list2Num;
    let sumArr = JSON.stringify(sum).split('').reverse();

    let sumLinkedList = new ListNode(Number.parseInt(sumArr[0]));
    let next = sumLinkedList;
    let node;

    for (let i = 1; i < sumArr.length; i++) {
        if (i > 1) {
            node.next = new ListNode(Number.parseInt(sumArr[i]));
            node = node.next
        } else {
            next.next = new ListNode(Number.parseInt(sumArr[i]));
            node = next.next;
        }
    }
    return sumLinkedList;
};

let test = () => {
    let list = new ListNode(2);
    let node2 = list.next = new ListNode(3);
    node2.next = new ListNode(4);
    let list2 = new ListNode(4);
    let l2n2 = list2.next = new ListNode(5);
    l2n2.next = new ListNode(6);
    console.log(addTwoNumbers(list, list2))
}
test()