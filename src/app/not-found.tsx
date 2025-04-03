import Link from "next/link";

export default function NotFound() {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-center space-y-4 ">
      <h2 className="text-2xl">Not Found | 404</h2>
      <p>Could not find requested resource</p>

      <Link className="underline duration-200 hover:text-primary" href="/">
        Return Home
      </Link>
    </section>
  );
}
