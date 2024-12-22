const Button = ({ text, type }: { text: string; type?: string }) => {
  return <button type={type}>{text}</button>;
};

export default Button;
