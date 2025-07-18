import type { ReactNode } from 'react';

export default function Container({ children }: { children?: ReactNode }) {
  return <div className="h-full w-fuul md:w-[768px] lg:w-[1024px] xl:w-[1280px] mx-auto">{children}</div>;
}
