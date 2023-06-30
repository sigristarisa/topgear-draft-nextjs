import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="/img/farie_logo.webp"
        height={48}
        width={200}
        alt="farie logo"
      />
    </header>
  );
};

export default Header;
