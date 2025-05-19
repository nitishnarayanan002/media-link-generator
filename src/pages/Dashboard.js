import React, { useState } from 'react';

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('https://your-backend.com/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      alert(`File uploaded: ${result.link}`);
    } catch (err) {
      console.error('Upload failed', err);
      alert('Upload failed');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Upload
      </button>
    </div>
  );
}
