export default function SteppedCard() {
  return (
    <div className="relative w-full max-w-2xl aspect-[4/3]">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-white rounded-3xl" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-3xl" />
        <div className="absolute bottom-0 right-0 w-2/4 h-2/4 bg-white rounded-3xl" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-white rounded-3xl" />
      </div>
      <div className="relative w-full h-full p-6">
        {/* Add your card content here */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-600">Card Title</h2>
          <p className="mt-2 text-gray-600">Add your content here</p>
        </div>
      </div>
    </div>
  );
}
