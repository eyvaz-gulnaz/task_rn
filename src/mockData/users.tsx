export interface IUser {
  id: number;
  username: string;
  date_created: string;
  role: string;
  status: string;
}

export const usersData: IUser[] = [
  {
    id: 1,
    username: 'User1',
    date_created: '05.01.2024',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    username: 'User2',
    date_created: '01.02.2024',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 3,
    username: 'User3',
    date_created: '20.12.2023',
    role: 'Moderator',
    status: 'Active',
  },
  {
    id: 4,
    username: 'User4',
    date_created: '30.11.2023',
    role: 'User',
    status: 'Active',
  },
  {
    id: 5,
    username: 'User5',
    date_created: '10.10.2023',
    role: 'User',
    status: 'Banned',
  },
  {
    id: 6,
    username: 'User6',
    date_created: '05.01.2024',
    role: 'User',
    status: 'Active',
  },
  {
    id: 7,
    username: 'User7',
    date_created: '12.09.2023',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 8,
    username: 'User8',
    date_created: '22.08.2023',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 9,
    username: 'User9',
    date_created: '18.07.2023',
    role: 'Moderator',
    status: 'Active',
  },
  {
    id: 10,
    username: 'User10',
    date_created: '02.02.2024',
    role: 'User',
    status: 'Banned',
  },
  {
    id: 11,
    username: 'User11',
    date_created: '11.11.2023',
    role: 'User',
    status: 'Active',
  },
  {
    id: 12,
    username: 'User12',
    date_created: '12.12.2023',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 13,
    username: 'User13',
    date_created: '30.05.2023',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 14,
    username: 'User14',
    date_created: '10.04.2023',
    role: 'User',
    status: 'Banned',
  },
  {
    id: 15,
    username: 'User15',
    date_created: '03.05.2023',
    role: 'User',
    status: 'Active',
  },
  {
    id: 16,
    username: 'User16',
    date_created: '14.02.2023',
    role: 'Moderator',
    status: 'Active',
  },
  {
    id: 17,
    username: 'User17',
    date_created: '20.01.2023',
    role: 'User',
    status: 'Inactive',
  },
];
