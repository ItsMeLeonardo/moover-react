const clients = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, Anytown, CA 12345",
    profile:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, Anytown, CA 12345",
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Anna Doe",
    email: "anna@gmail.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, Anytown, CA 12345",
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Marco Doe",
    email: "marco@gmail.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, Anytown, CA 12345",
    profile:
      "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function getClientsByEmail(req, res) {
  const { email } = req.query;
  const clientsResult = clients.filter((c) =>
    c.email.toLowerCase().includes(email.toLowerCase())
  );
  res.status(200).json({ clients: clientsResult });
}
