import { useState, useEffect, useRef } from 'react';

function Startup_Page_Section3() {
  const [activeTab, setActiveTab] = useState<null | 'Expansion Plan' | 'Key Metrics' | 'Founding Team'>(null);
  
  // Use a ref to track the button area, so we know if the click was outside
  const buttonAreaRef = useRef<HTMLDivElement>(null);

  // Effect to detect clicks outside of the button area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonAreaRef.current && !buttonAreaRef.current.contains(event.target as Node)) {
        setActiveTab(null); // Reset active tab when clicking outside
      }
    };

    // Add the event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderContent = () => {
    if (!activeTab) return null;

    switch (activeTab) {
      case 'Expansion Plan':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>Current Markets:</strong> Operating in over 60 countries and 900 cities.
            </p>
            <p className="text-2xl mb-5">
              <strong>Future Expansion:</strong> Greater penetration in emerging markets and expansion of product offerings (like Uber Air or autonomous vehicle development).
            </p>
            <p className="text-2xl mb-5">
              <strong>Technological Innovation:</strong> Investments in artificial intelligence, autonomous vehicles, and electric vehicles to lead the future of mobility.
            </p>
          </div>
        );
      case 'Key Metrics':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>Active Users:</strong> Over 100 million monthly active users worldwide.
            </p>
            <p className="text-2xl mb-5">
              <strong>Annual Growth:</strong> 35% annual growth rate in ride numbers.
            </p>
            <p className="text-2xl mb-5">
              <strong>Annual Revenue:</strong> USD 11 billion in 2023.
            </p>
            <p className="text-2xl mb-5">
              <strong>Profit Margins:</strong> 15% net profit margin in mature markets.
            </p>
          </div>
        );
      case 'Founding Team':
        return (
          <div>
            <p className="text-2xl mb-5">
              <strong>Travis Kalanick:</strong> Founder of Uber and a serial entrepreneur with experience in tech startups.
            </p>
            <p className="text-2xl mb-5">
              <strong>Garrett Camp:</strong> Co-founder and software developer, also known for his work on StumbleUpon.
            </p>
            <p className="text-2xl mb-5">
              <strong>Executive Team:</strong> Experienced in technology, mobility, and the sharing economy.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full b p-10 text-white pt-[200px]">
      <div className="grid grid-cols-3 gap-10 mb-10">
        <div className="col-span-3">
          {/* Button Area */}
          <div className="flex space-x-4 mb-5 flex items-center justify-center" ref={buttonAreaRef}>
            <button
              className={`px-10 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Expansion Plan' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Expansion Plan')}
            >
              <h2 className="text-2xl mb-3">Expansion Plan</h2>
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Key Metrics' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Key Metrics')}
            >
              <h2 className="text-2xl mb-3">Key Metrics</h2>
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center justify-center ${
                activeTab === 'Founding Team' ? 'bg-white text-black' : 'border border-white text-white hover:bg-white hover:text-black'
              }`}
              onClick={() => setActiveTab('Founding Team')}
            >
              <h2 className="text-2xl mb-3">Founding Team</h2>
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="p-5 bg-black bg-opacity-5 rounded-lg flex items-center justify-center">
            {renderContent()}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Startup_Page_Section3;
