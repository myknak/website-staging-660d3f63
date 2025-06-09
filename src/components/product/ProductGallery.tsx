import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4 aspect-square overflow-hidden">
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`aspect-square overflow-hidden cursor-pointer ${
              mainImage === image ? "ring-2 ring-accent" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
