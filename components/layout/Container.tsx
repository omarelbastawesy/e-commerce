export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container max-w-[1400px] mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
}
