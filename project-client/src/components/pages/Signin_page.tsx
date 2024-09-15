import React, { useState } from 'react';

function StartupSignupForm() {
  const [formData, setFormData] = useState({
    description: "",
    roi: "",
    market_share: "",
    num_investors: "",
    raised: "",
    minimum_inv: "",
    rounds: "",
    problem: "",
    value_proposition: "",
    model: "",
    research_develop: "",
    link_logo: "",
    category: "",
    name: "",
    currentMarkets: "",
    futureExpansion: "",
    technologicalInnovation: "",
    activeUsers: "",
    annualGrowth: "",
    annualRevenue: "",
    profitMargins: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      console.log(formData);
      const response = await fetch('http://localhost:4000/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Submitted successfully:", responseData);
        alert("Form submitted successfully!");
      } else {
        console.error("Error submitting form:", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <div className="signup-form w-full p-10 text-white">
      <h1 className="text-4xl mb-6">Startup Signup Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Input Fields */}
        

        <div>
          <label className="block text-xl">Description</label>
          <input 
            type="text" 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">ROI</label>
          <input 
            type="number" 
            name="roi" 
            value={formData.roi} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Market Share</label>
          <input 
            type="number" 
            name="market_share" 
            value={formData.market_share} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Number of Investors</label>
          <input 
            type="number" 
            name="num_investors" 
            value={formData.num_investors} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Raised (USD)</label>
          <input 
            type="number" 
            name="raised" 
            value={formData.raised} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Minimum Investment (USD)</label>
          <input 
            type="number" 
            name="minimum_inv" 
            value={formData.minimum_inv} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Rounds</label>
          <input 
            type="number" 
            name="rounds" 
            value={formData.rounds} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Problem</label>
          <input 
            type="text" 
            name="problem" 
            value={formData.problem} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Value Proposition</label>
          <input 
            type="text" 
            name="value_proposition" 
            value={formData.value_proposition} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Model</label>
          <input 
            type="text" 
            name="model" 
            value={formData.model} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Research & Development</label>
          <input 
            type="text" 
            name="research_develop" 
            value={formData.research_develop} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Logo Link</label>
          <input 
            type="text" 
            name="link_logo" 
            value={formData.link_logo} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Category</label>
          <input 
            type="text" 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Current Markets</label>
          <input 
            type="text" 
            name="currentMarkets" 
            value={formData.currentMarkets} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Future Expansion</label>
          <input 
            type="text" 
            name="futureExpansion" 
            value={formData.futureExpansion} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Technological Innovation</label>
          <input 
            type="text" 
            name="technologicalInnovation" 
            value={formData.technologicalInnovation} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Active Users</label>
          <input 
            type="number" 
            name="activeUsers" 
            value={formData.activeUsers} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Annual Growth (%)</label>
          <input 
            type="number" 
            name="annualGrowth" 
            value={formData.annualGrowth} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Annual Revenue (USD)</label>
          <input 
            type="number" 
            name="annualRevenue" 
            value={formData.annualRevenue} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div>
          <label className="block text-xl">Profit Margins (%)</label>
          <input 
            type="number" 
            name="profitMargins" 
            value={formData.profitMargins} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-transparent text-white border border-white" 
          />
        </div>

        <div className="col-span-2 flex justify-center mt-6">
          <button type="submit" className="bg-black text-white py-2 px-8 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StartupSignupForm;
