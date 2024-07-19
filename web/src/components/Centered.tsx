export default function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        {children}
      </div>
    </div>
  );
}
