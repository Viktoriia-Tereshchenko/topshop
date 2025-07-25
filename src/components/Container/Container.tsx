import type { ReactNode } from 'react';

export default function Container({ children }: { children?: ReactNode }) {
  return <div className="h-full  w-[90vw] mx-auto ">{children}</div>;
}
