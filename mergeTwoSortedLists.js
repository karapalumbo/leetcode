function ListNode(val) { // write function that creates a list
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) { 
  let newList = new ListNode(0); // create new list with val = 0
  let head = newList; // save head 


  while (l1 != null && l2 != null) { 
    if (l1.val < l2.val) { 
      newList.next = l1; 
      l1 = l1.next; 
    } else { 
      newList.next = l2;
      l2 = l2.next;
    }
    newList = newList.next; 
  }
  if (l1 == null) { 
    newList.next = l2; 
  } else { 
    newList.next = l1;
  }
  return head.next; 
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
