export interface IProjectProps {
  id: number;
  img: string;
  name: string;
  link: string;
  technology: {
    name: string;
    icon: string;
  };
  type: 'personal' | 'professional';
  filter: () => void
}