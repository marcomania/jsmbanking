import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Marco", lastName: "Untiveros"  }
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} alt="menu" width={32} height={32} className="size-[24px] max-xl:size-14"/>
            <div>
              <MobileNavbar user={loggedIn}/>
            </div>
          </div>
          
          {children}
        </div>
    </main>
  );
}
