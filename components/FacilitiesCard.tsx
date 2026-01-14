"use client";

export default function FacilitiesCard() {
  const facilities = [
  { icon: "🧺", label: "Washing Machine", bg: "bg-blue-50" },
  { icon: "📶", label: "WiFi", bg: "bg-indigo-50" },
  { icon: "🔥", label: "Geyser", bg: "bg-orange-50" },
  { icon: "❄️", label: "Refrigerator (Each floor)", bg: "bg-sky-50" },
  { icon: "🚰", label: "Water Dispenser (Each floor)", bg: "bg-teal-50" },
  { icon: "📹", label: "CCTV", bg: "bg-gray-50" },
  { icon: "🆔", label: "Fingerprint Access", bg: "bg-purple-50" },
  { icon: "🗄️", label: "Cupboard & Shoe Rack", bg: "bg-cyan-50" },
  { icon: "⚡", label: "Power Backup", bg: "bg-yellow-50" },
 
];

  return (
    <div className="mt-5">
      <div className="rounded-3xl bg-gradient-to-br from-green-200/40 via-white to-green-100/40 p-[1.5px] shadow-lg">
        <div className="rounded-3xl bg-white/95 backdrop-blur p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              🛠️ Facilities
            </h2>
            <span className="text-xs text-green-600 font-medium">
              Included
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {facilities.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-4 ${item.bg} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-900 leading-tight text-center">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-600">
            All facilities are available for residents
            <p className="mt-3 text-center text-sm font-semibold text-green-700 animate-pulse">
  ⚡ Electricity bill included
</p>

          </div>
        </div>
      </div>
    </div>
  );
}
