interface Props {
  text: string;
  role: string;
}

export default function ChatMessage({ text, role }: Props) {
  return (
    <div className="flex dark:text-white space-x-2">
      <p className="font-extrabold">{role}:</p>
      <p>{text}</p>
    </div>
  );
}
