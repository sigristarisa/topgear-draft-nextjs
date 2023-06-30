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
      <nav></nav>
    </header>
  );
};

export default Header;
