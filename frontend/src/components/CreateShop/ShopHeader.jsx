import { useNavigate } from "react-router-dom";
import { FaStore } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; 

export default function ShopHeader({ step }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-green-100 via-orange-100 to-yellow-50 rounded-t-2xl">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-green-800">
        <FaStore className="text-orange-500" />
        {step === 1 && "Personal Information"}
        {step === 2 && "Shop Information"}
        {step === 3 && "Business Information"}
      </h2>
      <button 
        onClick={() => navigate("/")} 
        className="text-gray-500 hover:text-orange-500 text-xl"
      >
        <AiOutlineClose/>
      </button>
    </div>
  );
}
