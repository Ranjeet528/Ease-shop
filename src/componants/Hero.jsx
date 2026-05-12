export default function Hero({
  title,
  subtitle,
  image,
  showButton = false,
  buttonText = "Shop Now",
  onButtonClick,
  overlay = true,
}) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50"></div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-sm md:text-lg text-gray-200 max-w-xl">
            {subtitle}
          </p>
        )}

        {showButton && (
          <button
            onClick={onButtonClick}
            className="mt-5 bg-yellow-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}