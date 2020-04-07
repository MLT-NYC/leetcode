// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example:
// Given 1 -> 2 -> 3 -> 4, you should return the list as 2 -> 1 -> 4 -> 3.


// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// This is a helper function that performs the swap.
var swapMove = function (node) {
    // We want to save the next node to a local variable, 
    // because we are going to reassign it. 
    let nextNode = node.next;
    // Reassigning the next node to `nextNode`'s next node.
    node.next = nextNode.next;
    // And now having that node point back to the present node.
    nextNode.next = node;
    // The original next node is now returned as the head.
    return nextNode;
};

var swapPairs = function (head) {
    // This is the base-case; can't make a swap if there isn't a pair.
    if (head == null || head.next == null) return head;

    // We want to save the `head`'s next's node to a local variable, 
    // because after the swap move we are going to lose reference to it.
    // We need that reference because if there is a `headNextNext` then we want to 
    // check if there is another pair to swap and make the recursive call.

    const headNextNext = head.next.next;
    const newHead = swapMove(head);

    // After the swap move `head` is the second in the pair, 
    // so its next must be the return value of the recursive call.
    // And if there might be another pair to swap, we want to now point to that swapped pair.
    if (headNextNext !== null) head.next = swapPairs(head.next);

    // Otherwise, the new swapped pair.
    return newHead;
};
