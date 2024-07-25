import Link from "next/link";

export default function Header() {
    return (
      <>
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <h1 className="font-bold">Fernanda Personal</h1>
            <div className="grow">
                <div className="hidden flex items-center justify-center gap-2 md:gap-8">
                    <Link href="Home">Home</Link>
                    <Link href="about">Sobre Mim</Link>
                    <Link href="priecing">Planos</Link>
                    <Link href="mentory">Mentoria</Link>
                </div>
            </div>
        </div>
      </>
    );
  }