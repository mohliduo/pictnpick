import Link from "next/link";

/* SPA: arahkan kembali ke halaman utama jika URL tidak dikenal */

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 text-center">
      <h1 className="text-2xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-ink/70">
        Landing page Pict n Pick hanya satu halaman.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
