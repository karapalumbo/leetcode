function linkedList(val) {
  this.val = val;
  this.next = null;
}

function linked(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

let l1 = new linkedList(1);
let l2 = new linkedList(3);
let l3 = new linkedList(3);

l1.next = l2;
l2.next = l3;

console.log(linked(l1));

// linkedList
// val: 1
// next: linkedList
// val: 3
// next: null
