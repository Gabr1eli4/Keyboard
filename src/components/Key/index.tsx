interface IKeyProps {
  value: number;
}

export function Key({ value }: IKeyProps) {
  return <div className="key select">{value}</div>;
}
