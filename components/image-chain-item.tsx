interface ItemProps {
  image: string;
  className?: string;
}

export default function ImageChainItem({ className, image }: ItemProps) {
  return (
    <div
      className={
        "transform transition-transform duration-500 ease-in-out hover:scale-150 flex items-center justify-center w-48 h-48 bg-gray-300 " +
        className
      }
    >
      <div
        className="w-64 h-64 rounded-3xl"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
