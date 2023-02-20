const dialog = [
  {
    timestamp: '2023-01-02T14:22:22.000Z',
    sender: {
      id: '86a0caef-41ec-49ac-814b-b27da2cea267',
      client_id: 'sk-1376265f-86df-4c49-a0c3-a4816df41af9',
      avatar: 'https:/example.com/users/avatar.png',
      name: 'Example Client',
      phone: '79151112233',
      email: 'example.client@example.com',
    },
    message: {
      id: '1bf6a765-ec6f-4680-8cd5-6f2d31f78ebc',
      client_id: '5f283618af2c8',
      type: 'text',
      text: 'Можно ли оплатить заказ при получении ?',
      media: '',
      thumbnail: '',
      file_name: '',
      file_size: 0,
    },
  },
  {
    timestamp: '2023-02-20T10:40:22.000Z',
    sender: {
      id: 'd8d9f9c4-9611-4794-a136-a253a13e1bb5',
      name: 'Менеджер Василий',
    },
    receiver: {
      id: '86a0caef-41ec-49ac-814b-b27da2cea267',
      client_id: 'sk-1376265f-86df-4c49-a0c3-a4816df41af9',
      avatar: 'https:/example.com/users/avatar.png',
      name: 'Example Client',
      phone: '79151112233',
      email: 'example.client@example.com',
    },
    message: {
      id: '3985523d-78b3-45b7-aeaf-142405bbf1dc',
      client_id: 'skm-5f2836a8ca468',
      type: 'text',
      text: 'Да, конечно. Вы можете оплатить наличными и картой курьеру при получении.',
      media: '',
      thumbnail: '',
      file_name: '',
      file_size: 0,
    },
  },
  {
    timestamp: '2023-02-10T18:22:22.000Z',
    sender: {
      id: 'd8d9f9c4-9611-4794-a136-a253a13e1bb5',
      name: 'Менеджер Василий',
    },
    receiver: {
      id: '86a0caef-41ec-49ac-814b-b27da2cea267',
      client_id: 'sk-1376265f-86df-4c49-a0c3-a4816df41af9',
      avatar: 'https:/example.com/users/avatar.png',
      name: 'Example Client',
      phone: '79151112233',
      email: 'example.client@example.com',
    },
    message: {
      id: '3985523d-78b3-45b7-aeaf-142405bbf112',
      client_id: 'skm-5f2836a8ca468',
      type: 'picture',
      text: '',
      media: 'https://cdn-icons-png.flaticon.com/256/7603/7603200.png',
      thumbnail: '',
      file_name: 'image',
      file_size: 3,
    },
  },
];

export default dialog;
