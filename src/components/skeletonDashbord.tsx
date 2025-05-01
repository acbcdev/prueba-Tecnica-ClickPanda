import { PAGE_SIZE } from "@/config/filters";
import { Skeleton as S } from "@heroui/skeleton";
export function SkeletonDashboard() {
  return (
    <section className="w-full space-y-3">
      <header className="flex items-end justify-between gap-2">
        <S className="w-1/2 h-10 rounded-lg " />
        <div className="flex items-end gap-2">
          <S className="w-32 h-10 rounded-lg " />
          <S className="w-32 h-10 rounded-lg " />
        </div>
      </header>
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: PAGE_SIZE }).map((_, n) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <S className="w-full h-48 rounded-lg " key={n} />
        ))}
      </main>
      <footer className="flex items-center justify-center gap-2">
        <S className="w-1/2 h-10 rounded-lg " />
        <S className="w-1/2 h-10 rounded-lg " />
      </footer>
    </section>
  );
}
