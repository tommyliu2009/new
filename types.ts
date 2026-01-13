export enum NavigationPage {
  HOME = 'HOME',
  NEWS = 'NEWS',
  PRODUCTS = 'PRODUCTS',
  RESOURCES = 'RESOURCES',
  COURSES = 'COURSES',
  ABOUT = 'ABOUT'
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
}

export interface CourseItem {
  id: number;
  title: string;
  date: string;
  location: string;
  instructor: string;
  status: 'Open' | 'Closed' | 'Upcoming';
}

export interface ResourceItem {
  id: number;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  description: string;
}