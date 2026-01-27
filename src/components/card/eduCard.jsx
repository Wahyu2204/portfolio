export default function EduCard({ items }) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-4 border-2 border-black p-4 bg-white hover:bg-slate-50 transition-all 
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <div className="flex items-center justify-between">
            {/* Text Info */}
            <div>
              <h4 className="font-bold font-mono text-lg leading-none">
                {item.name}
              </h4>
              <div className="flex gap-4">
                <p className="text-xs text-gray-600 font-mono mt-2">
                  {item.major}
                </p>
                {item.GPA && (
                  <p className="text-xs text-gray-600 font-mono mt-2">
                    GPA : {item.GPA}
                  </p>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-600 font-mono text-right">
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
