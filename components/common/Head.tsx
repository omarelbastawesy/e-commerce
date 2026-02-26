export default function Head({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="max-w-fit self-start text-[34px] font-extrabold uppercase">
      {children}
    </h1>
  );
}
