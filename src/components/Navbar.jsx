import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Navbar() {
  return (
    <div className="w-full flex justify-between">
      <Logo className="bg-blue-100" />

      <nav className="w-full max-w-[300px] justify-around flex">
        <Link href="/products/child">Niños</Link>
        <Link href="/products/men">Hombres</Link>
        <Link href="/products/women">Mujeres</Link>
      </nav>

      <div className="bg-blue-100">Avatar</div>
    </div>
  );
}
