type InputProps = {
  type: string;
  className?: string;
  id?: string;
  placeholder?: string;
};

function InputField({ type, className, id, placeholder }: InputProps) {
  return (
    <input
      type={type}
      className={`border-[1px] outline-none rounded indent-4 ${className} ipt`}
      id={id}
      name={id}
      placeholder={placeholder}
    />
  );
}

export { InputField };
