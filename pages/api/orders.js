// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const orders = [
  {
    id: 1,
    client: {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main St, Anytown, CA 12345",
      profile:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    orderDate: "2021-02-18:00:00:00",
    orderStatus: "Pending",
    packageSize: "Small",
    from: {
      text: "Huacho",
      place_name: "Huacho, Lima, Peru",
      center: [-77.6103, -11.1085],
      geometry: {
        type: "Point",
        coordinates: [-77.6103, -11.1085],
      },
    },
    to: {
      text: "San Antonio",
      place_name: "San Antonio, Lima, Peru",
      center: [-76.7736, -11.8166],
      geometry: {
        type: "Point",
        coordinates: [-76.7736, -11.8166],
      },
    },
  },
  {
    id: 2,
    client: {
      name: "Jane Doe",
      email: "jane@gmail.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main St, Anytown, CA 12345",
      profile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    orderDate: "2022-02-18:00:07:00",
    orderStatus: "Pending",
    packageSize: "Small",
    from: {
      text: "Lima",
      place_name: "Lima, Lima Province, Peru",

      center: [-76.8333, -12],
      geometry: {
        type: "Point",
        coordinates: [-76.8333, -12],
      },
    },
    to: {
      text: "Huacho",
      place_name: "Huacho, Lima, Peru",
      center: [-77.6103, -11.1085],
      geometry: {
        type: "Point",
        coordinates: [-77.6103, -11.1085],
      },
    },
  },
  {
    id: 3,
    client: {
      name: "Anna Doe",
      email: "anna@gmail.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main St, Anytown, CA 12345",
      profile:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    orderDate: "2022-02-18:08:00:00",
    orderStatus: "Completed",
    packageSize: "Small",
    from: {
      text: "Surco",
      place_name: "Surco, Lima, Peru",
      center: [-76.4454, -11.8771],
      geometry: {
        type: "Point",
        coordinates: [-76.4454, -11.8771],
      },
    },
    to: {
      text: "Calango",
      place_name: "Calango, Lima, Peru",
      center: [-76.5438, -12.5263],
      geometry: {
        type: "Point",
        coordinates: [-76.5438, -12.5263],
      },
    },
  },
  {
    id: 4,
    client: {
      name: "Marco Doe",
      email: "marco@gmail.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main St, Anytown, CA 12345",
      profile:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    orderDate: "2022-02-18:00:00:00",
    orderStatus: "Pending",
    packageSize: "Small",
    from: {
      text: "Miraflores",
      place_name: "Miraflores, Lima, Peru",
      matching_text: "Distrito de Miraflores",
      matching_place_name: "Distrito de Miraflores, Lima, Peru",
      center: [-75.8503, -12.2742],
      geometry: {
        type: "Point",
        coordinates: [-75.8503, -12.2742],
      },
    },
    to: {
      text: "Callao",
      place_name: "Callao, Callao, Peru",
      matching_text: "El Callao",
      matching_place_name: "El Callao, Callao, Peru",
      center: [-77.1391, -12.0523],
      geometry: {
        type: "Point",
        coordinates: [-77.1391, -12.0523],
      },
    },
  },
];

export default function handler(req, res) {
  res.status(200).json({ orders });
}
