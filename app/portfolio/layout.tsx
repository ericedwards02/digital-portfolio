export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:max-w-prose lg:w-[80ch] justify-self-center">
      {children}
    </div>
  );
}
