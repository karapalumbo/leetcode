// reverse a linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseLinkedList = function (linkedlist) {
  var node = linkedlist; // ListNode
  var previous = null;

  while (node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  return previous; // Change the list head !!!
};

const l1A = new ListNode(1);
const l1B = new ListNode(2);
const l1C = new ListNode(3);
l1A.next = l1B;
l1B.next = l1C;

console.log(reverseLinkedList(l1A));
