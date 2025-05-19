import React, { useState } from 'react';
import { supabase } from '../supabase';

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [link, setLink] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `public/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      alert('Upload failed.');
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    setLink(data.publicUrl);
    setUploading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upload a File</h1>
      <input type="file" onChange={handleChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {link && (
        <div className="mt-4">
          <p>File uploaded successfully:</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            {link}
          </a>
        </div>
      )}
    </div>
  );
}
