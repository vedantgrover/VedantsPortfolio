import ImageChainItem from "./image-chain-item";

export default function ImageChain() {
  return (
    <div className="flex mt-32 mb-24 items-center space-x-16">
      <ImageChainItem
        image="/images/school_vedant.JPEG"
        className="transform rotate-6"
      />
      <ImageChainItem
        image="/images/robotics_vedant.JPG"
        className="transform rotate-2"
      />
      <ImageChainItem image="/images/king_vedant.jpg" />
      <ImageChainItem
        image="/images/vedant_drums.png"
        className="transform -rotate-2"
      />
      <ImageChainItem
        image="/images/airport_vedant.JPG"
        className="transform -rotate-6"
      />
    </div>
  );
}
