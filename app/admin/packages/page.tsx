"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { tourPackages as initialPackages } from "@/data/tour-packages";

export default function Packages() {
  const router = useRouter();
  const [packages, setPackages] = useState(initialPackages);
  const [editedPrices, setEditedPrices] = useState(
    initialPackages.map(pkg => pkg.cost.price)
  );

  // Fetch login status and prices on mount
  useEffect(() => {
    // Check login status
    fetch("http://localhost:8000/check_admin_login.php", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (!data.loggedIn) {
          router.push("/admin/login");
        }
      });

    // Fetch prices from backend
    fetch("http://localhost:8000/get_package_prices.php", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.prices)) {
          // Map prices to the correct package index
          const priceMap: Record<number, string> = {};
          data.prices.forEach((row: { id: number; price: string }) => {
            priceMap[row.id] = row.price;
          });
          // Update prices in packages and editedPrices
          setPackages(pkgs =>
            pkgs.map(pkg =>
              priceMap[pkg.id]
                ? { ...pkg, cost: { ...pkg.cost, price: priceMap[pkg.id] } }
                : pkg
            )
          );
          setEditedPrices(pkgs =>
            pkgs.map((_, idx) =>
              priceMap[initialPackages[idx].id] ?? initialPackages[idx].cost.price
            )
          );
        }
      });
  }, [router]);

  const handlePriceChange = (index: number, newPrice: string) => {
    const edited = [...editedPrices];
    edited[index] = newPrice;
    setEditedPrices(edited);
  };

  const handleEditClick = async (index: number) => {
    const packageId = packages[index].id;
    const newPrice = editedPrices[index];
    // Update price in backend
    const res = await fetch("http://localhost:8000/update_package_price.php", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: packageId, price: newPrice }),
    });
    const data = await res.json();
    if (data.success) {
      const updated = [...packages];
      updated[index] = {
        ...updated[index],
        cost: { ...updated[index].cost, price: newPrice }
      };
      setPackages(updated);
    } else {
      alert(data.message || "Failed to update price");
    }
  };

  const handleLogout = async () => {
    await fetch("http://localhost:8000/admin_logout.php", {
      method: "POST",
      credentials: "include"
    });
    router.push("/admin/login");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Package List</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">Difficulty</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, idx) => (
            <tr key={pkg.slug}>
              <td className="py-2 px-4 border-b font-semibold">{pkg.name}</td>
              <td className="py-2 px-4 border-b">{pkg.location}</td>
              <td className="py-2 px-4 border-b">{pkg.duration}</td>
              <td className="py-2 px-4 border-b">{pkg.difficulty}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="text"
                  value={editedPrices[idx] ?? ""}
                  className="border rounded px-2 py-1 w-24"
                  onChange={e => handlePriceChange(idx, e.target.value)}
                  placeholder="-"
                  style={{ backgroundColor: editedPrices[idx] === undefined || editedPrices[idx] === "" ? "#f3f4f6" : undefined }}
                />
                {(!editedPrices[idx] || editedPrices[idx] === "") && (
                  <span className="absolute left-2 top-1 text-gray-400 pointer-events-none">-</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded disabled:opacity-50"
                  disabled={editedPrices[idx] === pkg.cost.price}
                  onClick={() => handleEditClick(idx)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}