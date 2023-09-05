import ImageChainItem from "./image-chain-item";

export default function ImageChain() {
  return (
    <div className="flex mt-32 mb-24 items-center space-x-16">
      <ImageChainItem
        image="/images/mountain_peak.png"
        className="transform rotate-6"
      />
      <ImageChainItem
        image="/images/king_vedant.jpg"
        className="transform rotate-2"
      />
      <ImageChainItem image="/images/vedant_on_a_mountain.png" />
      <ImageChainItem
        image="/images/vedant_drums.png"
        className="transform -rotate-2"
      />
      <ImageChainItem
        image="/images/vedant_in_the_sun.png"
        className="transform -rotate-6"
      />
    </div>
  );
}
