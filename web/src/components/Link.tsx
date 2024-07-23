import { useLocation } from "wouter";

export default function Link(href: string, { children }: { children: React.ReactNode }) {
  const [, setLocation] = useLocation();
  return (<></>
  );
}
