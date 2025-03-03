interface IKeyProps {
  value: string;
}

export function Key({ value }: IKeyProps) {
  return <div className="key select">{value}</div>;
}
