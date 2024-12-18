import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto max-w-lg p-4">
      <h1 className="text-2xl font-bold mb-3">
        Server Actions and Data Mutations
      </h1>
      <div className="flex space-y-4 flex-col text-blue-700 text-lg">
        <Link href="/only-server" className="hover:underline" prefetch>
          Only Server Forms
        </Link>
        <Link
          href="/server-with-useformstatus"
          className="hover:underline"
          prefetch
        >
          Server With useFormStatus Hook
        </Link>
        <Link
          href="/client-with-useactionstate"
          className="hover:underline"
          prefetch
        >
          Client With useActionState Hook
        </Link>
        <Link
          href="/client-with-usetransition"
          className="hover:underline"
          prefetch
        >
          Client With useTransition Hook
        </Link>
        <Link
          href="/client-with-useoptimistic"
          className="hover:underline"
          prefetch
        >
          Client With useOptimistic Hook
        </Link>
        <Link
          href="/complex-server-form-with-zod-validation"
          className="hover:underline"
          prefetch>
          Server Complex form validation with zod
        </Link>
        <Link
          href="/complex-client-form-with-zod-form-data"
          className="hover:underline"
          prefetch
        >
          Client Complex form validation with zod-form-data
        </Link>
      </div>
    </div>
  );
}
