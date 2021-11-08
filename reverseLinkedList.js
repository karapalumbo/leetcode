// reverse a linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseLinkedList = function (head) {
  let node = head;
  let previous = null;

  while (node) { // while node exists 
    let nxt = node.next; // save next or it's lost 
    node.next = previous; // node.next = null
    previous = node; // previous = node 
    node = nxt; // node = node.next
  }
  return previous; // Change the list head
};

const l1A = new ListNode(1);
const l1B = new ListNode(2);
const l1C = new ListNode(3);
l1A.next = l1B;
l1B.next = l1C;

console.log(reverseLinkedList(l1A));
