import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://northwind.vercel.app/api/suppliers";

function App() {
  const [suppliers, setSuppliers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);


  const [form, setForm] = useState({
    companyName: "",
    city: "",
    country: "",
    phone: "",
    street: "",
  });


  const getSuppliers = async () => {
    const res = await axios.get(BASE_URL);
    setSuppliers(res.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);
  const openCreate = () => {
    setEditMode(false);
    setForm({
      companyName: "",
      city: "",
      country: "",
      phone: "",
      street: "",
    });
    setModalOpen(true);
  };


  const openEdit = (item) => {
    setEditMode(true);
    setEditId(item.id);

    setForm({
      companyName: item.companyName || "",
      city: item.address?.city || "",
      country: item.address?.country || "",
      phone: item.address?.phone || "",
      street: item.address?.street || "",
    });

    setModalOpen(true);
  };

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveSupplier = async () => {
    const payload = {
      companyName: form.companyName,
      address: {
        city: form.city,
        country: form.country,
        phone: form.phone,
        street: form.street,
      },
    };

    if (editMode) {
      await axios.put(`${BASE_URL}/${editId}`, payload);
    } else {
      await axios.post(BASE_URL, payload);
    }

    setModalOpen(false);
    getSuppliers();
  };


  const deleteSupplier = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    getSuppliers();
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-purple-400">
          Suppliers Admin
        </h1>

        <button
          onClick={openCreate}
          className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          + Create Supplier
        </button>
      </div>


      <div className="grid md:grid-cols-2 gap-6">
        {suppliers.map((s) => (
          <div
            key={s.id}
            className="bg-gray-900 p-5 rounded-xl border border-gray-800"
          >
            <h2 className="text-xl font-bold text-purple-300">
              {s.companyName}
            </h2>

            <p className="text-gray-300 mt-2">
               {s.address?.city} |  {s.address?.country}
            </p>

            <p className="text-gray-400 text-sm">
               {s.address?.phone}
            </p>

            <p className="text-gray-400 text-sm">
               {s.address?.street}
            </p>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => openEdit(s)}
                className="bg-yellow-500 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteSupplier(s.id)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

  
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl w-[450px] border border-gray-700">
            <h2 className="text-xl mb-4 text-purple-300">
              {editMode ? "Edit Supplier" : "Create Supplier"}
            </h2>

            <div className="grid gap-3">
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="p-2 rounded bg-black border border-gray-700"
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="p-2 rounded bg-black border border-gray-700"
              />

              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="p-2 rounded bg-black border border-gray-700"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-2 rounded bg-black border border-gray-700"
              />

              <input
                name="street"
                value={form.street}
                onChange={handleChange}
                placeholder="Street"
                className="p-2 rounded bg-black border border-gray-700"
              />
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveSupplier}
                className="px-4 py-2 bg-purple-600 rounded"
              >
                {editMode ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;