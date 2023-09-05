import Image from "next/image";

interface ItemProps {
  image: string;
  className?: string;
}

export default function ImageChainItem({ className, image }: ItemProps) {
  return (
    <div
      className={
        "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl transform duration-500 ease-in-out hover:scale-125 " +
        className
      }
    >
      <Image
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={64}
        height={128}
        style={{ color: "transparent" }}
        unoptimized
      />
    </div>
  );
}
