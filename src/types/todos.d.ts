export interface TodoItemType {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoItemProps extends TodoItemType {
  onToggle?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export interface ButtonProps {
  text: string;
  type?: string;
  id: number;
  onClick?: (id: number) => void;
}

export interface InputProps {
  placeholder: string;
  onChange: (e: Event) => void;
}
