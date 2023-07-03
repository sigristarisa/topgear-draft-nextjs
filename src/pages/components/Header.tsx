import Image from "next/image";

const Header = () => {
  return (
    <header className="shadow-lg">
      <div className="flex items-center justify-between px-5 mx-auto mb-12 h-14 lg:h-24 max-w-[1192px]">
        <Image
          src="/img/farie_logo.webp"
          height={48}
          width={108}
          alt="farie logo"
        />
      </div>
    </header>
  );
};

export default Header;
