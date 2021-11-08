function LinkedList(val) {
  this.val = val;
  this.next = null;
}

function push(head, newData) {
  var node = new LinkedList();
  node.val = newData;
  node.next = head;
  head = node;
  return head;
}

function printAlternate(node, isOdd) {
  if (node === null) return;
  if (isOdd === true) {
    node.val += " ";
  }
  printAlternate(node.next, !isOdd);
}

var head = null;

head = push(head, 10);
head = push(head, 9);
head = push(head, 8);
head = push(head, 7);
head = push(head, 6);
head = push(head, 5);
head = push(head, 4);
head = push(head, 3);
head = push(head, 2);
head = push(head, 1);

console.log(printAlternate(head, true));
