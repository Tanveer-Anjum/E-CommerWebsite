export default function ProgressBar({ step }) {
  return (
    <div className="px-6 py-4">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            step === 1 ? "w-1/3 bg-green-500" :
            step === 2 ? "w-2/3 bg-orange-500" :
            "w-full bg-yellow-500"
          }`}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">Step {step} of 3</p>
    </div>
  );
}
