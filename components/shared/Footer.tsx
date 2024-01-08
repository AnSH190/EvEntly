import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center flex-between wrapper flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Logo"
          />
        </Link>
        <p>2023 EvEntly. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;