import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const IDAnalyzer = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const text = await file.text();
      const lines = text.split('\n');
      
      // Parse and count IDs
      const idCounts = {};
      lines.forEach(line => {
        const parts = line.split(' - ');
        if (parts.length >= 3) {
          const id = parts[parts.length - 1].trim();
          idCounts[id] = (idCounts[id] || 0) + 1;
        }
      });

      // Convert to array for sorting
      const countArray = Object.entries(idCounts).map(([id, count]) => ({
        id,
        count
      }));

      setData(countArray);
    }
  };

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    
    const sortedData = [...data].sort((a, b) => {
      return newOrder === 'asc' 
        ? a.count - b.count 
        : b.count - a.count;
    });
    
    setData(sortedData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">ID Analyzer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            Upload File (txt)
          </label>
          <input
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none p-2"
          />
        </div>

        {data.length > 0 && (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">
                    <button
                      onClick={handleSort}
                      className="flex items-center gap-2"
                    >
                      Count
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">{item.id}</td>
                    <td className="px-6 py-4">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IDAnalyzer;