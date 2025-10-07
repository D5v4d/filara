// Типы для заголовков таблиц
interface Heading {
  future: string[];
  history: string[];
  applications: string[];
}

interface Seminar {
  id: 1;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
  userId: 1;
  status: string;
  likes?: number;
  isLikes: boolean;
}

interface User {
  id: 1;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  roleId: 3;
  cityId: 1;
  speciality: string;
}

export type TableRow = {
  id: 1;
  title: string;
  date: string;
  likes?: number;
  fullName?: string;
  phone?: string;
  isLiked?: boolean;
};

export interface AppState {
  heading: Heading;
  limit: number;
  limitStart: number;
  limitEnd: number;
  page: number;
  data: {
    seminars: Seminar[];
    users: User[];
  };
  
  isOpenModalWindow: boolean;
  dataEditing: object;
  table: TableRow[];
  originalTable: TableRow[];
  pageLimit: number;
}
