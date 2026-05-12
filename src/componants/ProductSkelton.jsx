export default function ProductSkeleton() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden animate-pulse">

      {/* Image Skeleton */}
      <div className="w-full h-56 bg-gray-300"></div>

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-5 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-300 rounded-md w-full"></div>
      </div>
    </div>
  );
}