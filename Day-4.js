//100Days of code
//Day-4

//Problem-1: You’re working on an invoice management system. 
// You have a list of invoice numbers and you need to format them by adding a prefix "INV-" to each.

//Add "INV-" Prefix to Invoice Numbers
let invoices = [1001, 1002, 1003, 1004];
let formattedInvoices = invoices.map(num => `INV-${num}`);
console.log(formattedInvoices);
//Expected Output: ['INV-1001', 'INV-1002', 'INV-1003', 'INV-1004']

