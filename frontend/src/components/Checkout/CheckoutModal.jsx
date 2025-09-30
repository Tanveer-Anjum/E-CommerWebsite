import React, { useState, useEffect } from "react";

export default function CheckoutModal({
  open,
  onClose,
  product,
  selectedColor,
  quantity = 1,
  onPlaced,
  onSaved, // new prop for save
}) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });
  const [qty, setQty] = useState(Math.max(1, Number(quantity) || 1));

  useEffect(() => {
    if (!open) {
      setForm({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        notes: "",
      });
      setQty(Math.max(1, Number(quantity) || 1));
    }
  }, [open, quantity]);

  if (!open) return null;

  // ✅ Save order
  const handleSave = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address || !form.city) {
      alert("Please fill in required fields: Name, Phone, Address, City.");
      return;
    }
    onSaved?.({ form, product, selectedColor, quantity: qty });
    alert("Order details saved!");
  };

  // ✅ Proceed to Pay
  const handleProceed = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address || !form.city) {
      alert("Please fill in required fields: Name, Phone, Address, City.");
      return;
    }
    onPlaced?.({ form, product, selectedColor, quantity: qty });
    onClose();
  };

  const unitPrice = product ? Number(product.price) : 0;
  const subTotal = unitPrice * qty;
  const delivery = 0;
  const total = subTotal + delivery;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal container */}
      <div className="relative bg-white w-11/12 md:w-4/5 lg:w-3/4 max-h-[90vh] rounded-lg shadow-xl flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b">
          <h3 className="text-lg font-semibold">Checkout</h3>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="flex-1 overflow-auto flex flex-col md:flex-row">
          
          {/* Left: Contact & Address */}
          <form className="flex-1 p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full border rounded-md p-2"
                placeholder="03XXXXXXXXX"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                className="w-full border rounded-md p-2"
                rows={3}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={form.postalCode}
                  onChange={(e) =>
                    setForm({ ...form, postalCode: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Notes (optional)
              </label>
              <textarea
                className="w-full border rounded-md p-2"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
          </form>

          {/* Right: Order Summary */}
          <aside className="md:w-80 w-full border-t md:border-t-0 md:border-l p-5 space-y-4 bg-gray-50">
            <h4 className="text-base font-semibold">Order Summary</h4>
            <div className="flex items-center gap-3">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-medium text-gray-800 line-clamp-2">
                  {product?.name}
                </p>
                <p className="text-sm text-gray-600">
                  {selectedColor ? `Color: ${selectedColor}` : null}
                </p>
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Quantity</span>
              <div className="inline-flex items-center border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() =>
                    setQty((q) => Math.max(1, Number(q || 1) - 1))
                  }
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, Number(e.target.value) || 1))
                  }
                  className="w-16 text-center outline-none py-2"
                />
                <button
                  type="button"
                  onClick={() =>
                    setQty((q) => Math.max(1, Number(q || 1) + 1))
                  }
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span>Unit Price</span>
                <span>Rs {unitPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Rs {delivery}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
                <span>Total</span>
                <span>Rs {total.toLocaleString()}</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Buttons */}
        <div className="border-t px-5 py-3 flex gap-3 bg-white">
          <button
            type="button"
            onClick={handleSave}
            className="w-full md:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleProceed}
            className="w-full md:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
