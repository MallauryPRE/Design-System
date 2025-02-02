export default function ColorPalette() {
  const colors = [
    { bg: "bg-[#682424]" }, // Dark red/maroon
    { bg: "bg-white" }, // White
    { bg: "bg-black" }, // Black
    { bg: "bg-[#9E3A3A]" }, // Brighter red/terracotta
    { bg: "bg-[#E6E9F4]" }, // Light blue/lavender
    { bg: "bg-[#F4E6D8]" }, // Beige/cream
    { bg: "bg-[#F7F4D9]" }, // Light yellow
  ];

  return (
    <div className="p-8 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Main Colors</h2>
      <div className="flex gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-16 h-16 ${color.bg} rounded-lg shadow-sm`}
          />
        ))}
      </div>
    </div>
  );
}
