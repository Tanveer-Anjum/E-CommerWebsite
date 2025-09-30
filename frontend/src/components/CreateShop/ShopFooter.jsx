export default function ShopFooter() {
  return (
    <div className="px-6 py-4 border-t bg-gray-50 rounded-b-2xl text-center">
      <p className="text-sm text-gray-600">
        Already have a shop?{" "}
        <a href="/signin" className="text-green-600 hover:underline">Go to Dashboard</a>
      </p>
    </div>
  );
}
