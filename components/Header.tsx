import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image
        src="https://links.papareact.com/c2cdd5"
        alt="Trello Logo"
        width={300}
        height={100}
        className="w-14 md:w-56 pb-10 md:pb-0 object-contain"
      />
    </header>
  );
};

export default Header;
