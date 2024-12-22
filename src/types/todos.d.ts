export interface TodoItemType {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoItemProps extends TodoItemType {
  onClick?: (id: number) => void;
}

export interface InputProps {
  placeholder: string;
  onChange: (e: Event) => void;
}
