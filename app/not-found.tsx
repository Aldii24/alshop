import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-color-secondary">
      <Image
        src="/global-notfound.gif"
        alt="global-notfound"
        width={400}
        height={400}
      />
      <p className="md:text-2xl text-xl mt-5 font-bold uppercase">Halaman tidak ditemukan !</p>
    </div>
  );
};

export default NotFoundPage;
