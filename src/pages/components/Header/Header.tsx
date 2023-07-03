import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="/img/farie_logo.webp"
        height={48}
        width={108}
        alt="farie logo"
      />
      <h1 className="underline">hi</h1>
    </header>
  );
};

export default Header;
