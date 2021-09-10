function ListNode(val) {
  this.val = val;
  this.next = null;
}
// write function that creates a list

var mergeTwoLists = function (l1, l2) {
  // create new list
  let newList = new ListNode(0);
  // set list to a new variable
  let headOfNewList = newList;

  // while each list is null
  while (l1 != null && l2 != null) {
    // if first linked list val is less than second linked list val
    if (l1.val < l2.val) {
      // set the new list's next to the first linked
      newList.next = l1;
      // set the first list to first list's next
      l1 = l1.next;
    } else {
      // else do the opposite
      newList.next = l2;
      l2 = l2.next;
    }
    // set the new list to be the new list's next
    newList = newList.next;
  }
  // if first list is null
  if (l1 == null) {
    // new list's next is second list
    newList.next = l2;
  } else {
    // else opposite
    newList.next = l1;
  }
  // return the second variable's next
  return headOfNewList.next;
};

// CREATE YOUR 2 LINKED LISTS
const l1A = new ListNode(1);
const l1B = new ListNode(2);
const l1C = new ListNode(3);
l1A.next = l1B;
l1B.next = l1C;

const l2A = new ListNode(3);
const l2B = new ListNode(4);
const l2C = new ListNode(6);
l2A.next = l2B;
l2B.next = l2C;

console.log(mergeTwoLists(l1A, l2A));
// [1,2,3,3,4,6]
