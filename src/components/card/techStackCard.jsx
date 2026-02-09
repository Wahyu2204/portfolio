import IconMapper from "@/components/icon-mapper";

export default function TechStackCard({ title, items }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-black bg-black text-white inline-block px-4 py-1 mb-6 rotate-1">
        {title}
      </h3>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-2 border-black p-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            <div className="flex items-center gap-4">
              {/* Icon Container */}
              <div className="text-3xl">
                <IconMapper name={item.iconName} />
              </div>

              {/* Text Info */}
              <div>
                <h4 className="font-bold font-mono text-lg leading-none">
                  {item.name}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
