import { GetInvoiceDto, GetAllInvoicesDto, GetContactDto } from './dtos';

export const INVOICE_ID_MOCK = '4011ef9e-3fad-458b-8491-fb5d422cd296';

const RECIPIENT_MOCK: GetContactDto = {
  id: 'd0806a79-e2e1-4015-82ee-7c9e334af5c8',
  companyName: 'Braun and Sons',
  city: 'Clifton',
  street: 'Legros Street',
  postcode: '45-904',
  nip: '6652380950',
  phone: '390-679-3936 x430',
  email: 'Bobbie75@gmail.com',
  bankAccount: '021695763790794478824824',
};

const SENDER_MOCK: GetContactDto = {
  id: '9e58fd9d-793a-433d-aa58-d5b586a42b8d',
  companyName: 'Schaden, McDermott and Witting',
  city: 'La Habra',
  street: 'Nitzsche Expressway',
  postcode: '43-847',
  nip: '9473082669',
  phone: '(225) 880-4633 x668',
  email: 'Georgiana.Mosciski@hotmail.com',
  bankAccount: '452239408192117126367175',
};

export const INVOICE_MOCK: GetInvoiceDto = {
  id: INVOICE_ID_MOCK,
  name: 'Stoltenberg, Heathcote and Halvorson',
  recipient: RECIPIENT_MOCK,
  sender: SENDER_MOCK,
  createdAt: new Date('2022-04-16'),
  validUntil: new Date('2024-07-13'),
  items: [
    {
      id: 'd1132fda-fc1a-4853-863d-9adc507ed389',
      name: 'Regional',
      amount: 59,
      unit: 'palettes',
      tax: 23,
      price: 600.54,
    },
    {
      id: 'fe30a23b-d8e0-4cf5-82ec-a5eab592cb00',
      name: 'Customer',
      amount: 53,
      unit: 'items',
      tax: 8,
      price: 423.91,
    },
  ],
};

export const INVOICES_MOCK: GetAllInvoicesDto[] = [
  {
    id: 'c6e82d8b-8ad1-421f-83d6-c04ed56c2252',
    name: 'Heidenreich and Sons',
    createdAt: new Date('2021-12-27'),
    validUntil: new Date('2024-05-30'),
    items: [
      {
        id: '41efea70-333f-47e4-9193-34deb79439f3',
        name: 'Global',
        amount: 10,
        unit: 'palettes',
        tax: 23,
        price: 386.62,
      },
      {
        id: '20f9ce11-8eb9-4ad0-ac61-fb0b45da60e8',
        name: 'Regional',
        amount: 63,
        unit: 'items',
        tax: 8,
        price: 95.61,
      },
      {
        id: '593b5f98-1bef-4144-95aa-3b358266c9fc',
        name: 'National',
        amount: 30,
        unit: 'items',
        tax: 23,
        price: 997.19,
      },
      {
        id: 'd038940e-b458-4773-a108-af06d955dd78',
        name: 'Investor',
        amount: 50,
        unit: 'items',
        tax: 23,
        price: 946.91,
      },
      {
        id: '5b37f531-ea19-4bc8-a59e-e3ba518efca6',
        name: 'Investor',
        amount: 98,
        unit: 'palettes',
        tax: 8,
        price: 192.23,
      },
      {
        id: '98b79b9c-d11b-4f37-8ad0-93be404956ca',
        name: 'Central',
        amount: 17,
        unit: 'items',
        tax: 8,
        price: 397.83,
      },
      {
        id: '4b854e0f-e95b-452d-bc89-2fa3edcaf9df',
        name: 'Global',
        amount: 80,
        unit: 'palettes',
        tax: 8,
        price: 869.63,
      },
      {
        id: '5c6f46f3-2ed0-4a36-83ad-2d8cd6a25d29',
        name: 'International',
        amount: 99,
        unit: 'items',
        tax: 23,
        price: 584.18,
      },
      {
        id: 'b36297c3-3cee-49e9-8826-669a63613fbb',
        name: 'District',
        amount: 19,
        unit: 'palettes',
        tax: 8,
        price: 539.88,
      },
    ],
  },
  {
    id: '4011ef9e-3fad-458b-8491-fb5d422cd296',
    name: 'Stoltenberg, Heathcote and Halvorson',
    createdAt: new Date('2022-04-16'),
    validUntil: new Date('2024-07-13'),
    items: [
      {
        id: 'd1132fda-fc1a-4853-863d-9adc507ed389',
        name: 'Regional',
        amount: 59,
        unit: 'palettes',
        tax: 23,
        price: 600.54,
      },
      {
        id: 'fe30a23b-d8e0-4cf5-82ec-a5eab592cb00',
        name: 'Customer',
        amount: 53,
        unit: 'items',
        tax: 8,
        price: 423.91,
      },
    ],
  },
  {
    id: 'ea0819c8-4355-49ba-b979-7f7f4c2c5cb5',
    name: 'Streich - Bode',
    createdAt: new Date('2022-07-14'),
    validUntil: new Date('2023-10-09'),
    items: [
      {
        id: '356fed9e-c74b-4f81-b8a8-6617ac3ee7b2',
        name: 'Regional',
        amount: 52,
        unit: 'palettes',
        tax: 23,
        price: 207.5,
      },
      {
        id: 'b7232c71-54d0-4bbe-9975-62e4aaf283d0',
        name: 'Investor',
        amount: 29,
        unit: 'items',
        tax: 23,
        price: 462.86,
      },
      {
        id: '06c08808-ee8c-486a-ab9f-a935e8112296',
        name: 'Corporate',
        amount: 52,
        unit: 'palettes',
        tax: 8,
        price: 234.63,
      },
      {
        id: 'fda8b0e4-6a25-4253-9a2e-8455091384b4',
        name: 'Customer',
        amount: 6,
        unit: 'palettes',
        tax: 23,
        price: 343.23,
      },
      {
        id: 'c0e9636b-9a44-4b08-b63a-e7c99be6bb79',
        name: 'Legacy',
        amount: 36,
        unit: 'items',
        tax: 8,
        price: 441.86,
      },
      {
        id: '4783a40b-eaee-4c8f-87d7-fb3de33d2036',
        name: 'Lead',
        amount: 2,
        unit: 'palettes',
        tax: 8,
        price: 944.85,
      },
    ],
  },
  {
    id: '41597872-a475-4b78-89d8-3d3dc4781882',
    name: 'Nienow, Boehm and Baumbach',
    createdAt: new Date('2022-09-22'),
    validUntil: new Date('2024-08-08'),
    items: [
      {
        id: 'd1ff482f-0f28-473f-9d43-d013d77a29c7',
        name: 'Direct',
        amount: 55,
        unit: 'items',
        tax: 23,
        price: 737.54,
      },
      {
        id: '8da01a0b-c484-4828-a08d-d3d1c561904b',
        name: 'Future',
        amount: 23,
        unit: 'items',
        tax: 8,
        price: 894.79,
      },
    ],
  },
  {
    id: 'b2f46a2e-b659-4042-8fa7-f2a8b403fe62',
    name: 'Leuschke, Boehm and Conroy',
    createdAt: new Date('2022-10-19'),
    validUntil: new Date('2024-06-21'),
    items: [
      {
        id: '3f8a5d15-8653-4760-ad60-0010f3cf76ed',
        name: 'Global',
        amount: 59,
        unit: 'items',
        tax: 23,
        price: 933.85,
      },
      {
        id: '48c0d7ce-ab41-46c2-9493-98ff6e71b4d7',
        name: 'Regional',
        amount: 53,
        unit: 'palettes',
        tax: 8,
        price: 582.53,
      },
      {
        id: 'b2a79449-eb14-4d12-9c1d-0a2468faf49c',
        name: 'Product',
        amount: 18,
        unit: 'palettes',
        tax: 8,
        price: 765.47,
      },
      {
        id: '772fda7d-aa1d-48d3-a9c7-992b0b5852b4',
        name: 'Global',
        amount: 37,
        unit: 'items',
        tax: 8,
        price: 756.24,
      },
      {
        id: '1cc22d38-d985-4bb3-9d6a-5e22e93d1928',
        name: 'Future',
        amount: 67,
        unit: 'items',
        tax: 8,
        price: 255.58,
      },
    ],
  },
  {
    id: '9d09e149-1f72-4076-ac30-f9d201b2b32c',
    name: 'Haley Inc',
    createdAt: new Date('2021-02-06'),
    validUntil: new Date('2023-12-22'),
    items: [
      {
        id: '5cddfdb8-da2d-42de-bfeb-5995a11ceb05',
        name: 'Investor',
        amount: 45,
        unit: 'palettes',
        tax: 8,
        price: 464.41,
      },
      {
        id: '76cbf68f-2163-468d-8785-5710cf301a7a',
        name: 'National',
        amount: 30,
        unit: 'items',
        tax: 8,
        price: 968.27,
      },
      {
        id: '0b5054fd-5ad5-4aa2-a9a0-eafa60dc672e',
        name: 'Internal',
        amount: 45,
        unit: 'palettes',
        tax: 8,
        price: 877.67,
      },
      {
        id: 'c2e6c442-442b-4a83-a2ea-8f9e39a3dc32',
        name: 'Central',
        amount: 16,
        unit: 'palettes',
        tax: 8,
        price: 286.32,
      },
      {
        id: '04617197-90f8-4950-aa17-7836a00dba31',
        name: 'District',
        amount: 71,
        unit: 'items',
        tax: 8,
        price: 149.75,
      },
      {
        id: '8991667f-8e3d-4c24-a854-bbd8090ab669',
        name: 'Lead',
        amount: 62,
        unit: 'palettes',
        tax: 8,
        price: 457.03,
      },
      {
        id: '908ec015-1259-40a6-8c32-06809260646c',
        name: 'Investor',
        amount: 42,
        unit: 'items',
        tax: 8,
        price: 597.1,
      },
      {
        id: 'e1b4f1bb-717b-4af6-a1b6-d240cbc9449f',
        name: 'Forward',
        amount: 50,
        unit: 'palettes',
        tax: 8,
        price: 235.01,
      },
    ],
  },
  {
    id: 'b100bf9a-4457-48a1-92c0-30ef840bdcca',
    name: 'Douglas, Quigley and Gibson',
    createdAt: new Date('2021-01-31'),
    validUntil: new Date('2024-07-12'),
    items: [
      {
        id: '663d34aa-9483-4d84-a1c9-14be5d9aafd7',
        name: 'Customer',
        amount: 87,
        unit: 'items',
        tax: 8,
        price: 929.62,
      },
      {
        id: '641877cc-13d9-4129-b226-1bf32c5cfc7a',
        name: 'Product',
        amount: 3,
        unit: 'palettes',
        tax: 8,
        price: 26.72,
      },
    ],
  },
  {
    id: 'c0f6965e-6b34-4e7d-8b41-0296385ac165',
    name: 'Cummings - Bergnaum',
    createdAt: new Date('2022-11-30'),
    validUntil: new Date('2023-10-05'),
    items: [
      {
        id: '29a1674d-33dc-4cf9-bc6e-0676bc682a19',
        name: 'Product',
        amount: 48,
        unit: 'items',
        tax: 8,
        price: 700.77,
      },
      {
        id: '3f52ad5a-66b5-47ad-a10b-d488a111e0be',
        name: 'Direct',
        amount: 78,
        unit: 'items',
        tax: 23,
        price: 95.71,
      },
      {
        id: '629976e7-de66-49ad-9738-1d3183716343',
        name: 'International',
        amount: 40,
        unit: 'palettes',
        tax: 8,
        price: 855.14,
      },
      {
        id: '3eceb8c1-c057-474d-9b00-c378ea709147',
        name: 'Internal',
        amount: 41,
        unit: 'palettes',
        tax: 23,
        price: 806.89,
      },
    ],
  },
  {
    id: 'c77c3c2d-e556-4ce5-a015-26f9749cc47f',
    name: 'Mann and Sons',
    createdAt: new Date('2022-01-26'),
    validUntil: new Date('2024-03-27'),
    items: [
      {
        id: 'bb6e6dbb-a097-4802-ae04-159310e903b7',
        name: 'Corporate',
        amount: 79,
        unit: 'palettes',
        tax: 8,
        price: 726.36,
      },
      {
        id: '71416993-1b46-4958-9596-a6d959150639',
        name: 'District',
        amount: 41,
        unit: 'items',
        tax: 23,
        price: 543.22,
      },
      {
        id: '1db4b4bb-f504-48e9-a51e-51dc9e58acd0',
        name: 'Forward',
        amount: 48,
        unit: 'palettes',
        tax: 23,
        price: 288.26,
      },
      {
        id: '6ec3a569-04a9-473c-b16f-33035792e1fd',
        name: 'District',
        amount: 95,
        unit: 'items',
        tax: 23,
        price: 980.82,
      },
    ],
  },
  {
    id: '3240a866-3efa-46aa-838b-f3ecf8b70e41',
    name: 'Kemmer and Sons',
    createdAt: new Date('2021-11-06'),
    validUntil: new Date('2024-07-01'),
    items: [
      {
        id: '327f09e9-af3d-42d7-9eb3-d82de98f502b',
        name: 'Senior',
        amount: 37,
        unit: 'palettes',
        tax: 23,
        price: 515.85,
      },
    ],
  },
];
