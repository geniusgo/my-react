export interface TodoItemProps {
  title: string;
  isDone: boolean;
}

export interface InputProps {
  placeholder: string;
  onChange: (e: Event) => void;
}
