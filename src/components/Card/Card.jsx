import cardImg from "../../../public/fff.png";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {/* Card with Image Cover */}
      <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={cardImg}
          alt="Card Cover"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Image Cover Card</h3>
          <p className="line-clamp-3">
            This is an example of a card with an image that covers the top area. The text will wrap within the defined limits.
          </p>
        </div>
      </div>

      {/* Card with Image Contain */}
      <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={cardImg}
          alt="Card Contain"
          className="w-full h-40 object-contain"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Image Contain Card</h3>
          <p className="line-clamp-3">
            This card features an image that fits within the box. The text will also be clamped to a maximum of 3 lines for better readability.
          </p>
        </div>
      </div>

      {/* Card with Image Fill */}
      <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={cardImg}
          alt="Card Fill"
          className="w-full h-40 object-fill"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Image Fill Card</h3>
          <p className="line-clamp-3">
            This card uses the `object-fill` property, which can stretch the image to fill the entire area. Text is still clamped.
          </p>
        </div>
      </div>

      {/* Card with Text Clamping */}
      <div className="w-full max-w-xs bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={cardImg}
          alt="Card Clamping"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Text Clamping Card</h3>
          <p className="line-clamp-2">
            Here’s an example with a text clamping to 2 lines, ensuring it does not overflow and maintains a tidy appearance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
