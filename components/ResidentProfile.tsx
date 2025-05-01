'use client';

import { useState } from 'react';

interface ResidentProfileProps {
  name: string;
  role: string;
  address: string;
  contact: string;
  household: number;
  memberSince: string;
}

const ResidentProfile: React.FC<ResidentProfileProps> = ({
  name,
  role,
  address,
  contact,
  household,
  memberSince,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const image = URL.createObjectURL(event.target.files[0]);
      setProfileImage(image); // Update the profile image
    }
  };

  return (
    <div className="space-y-6">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={profileImage || "/default-profile.png"}
          alt={`${name}'s profile`}
          className="w-24 h-24 rounded-full"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full text-sm text-gray-500 file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2 file:rounded"
      />

      {/* Resident Information */}
      <div className="space-y-2">
        <div>
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            value={name}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Address</label>
          <input
            type="text"
            value={address}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Contact</label>
          <input
            type="text"
            value={contact}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Household</label>
          <input
            type="text"
            value={`${household} members`}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Member Since</label>
          <input
            type="text"
            value={memberSince}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      {/* Edit Profile and Log Out Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Edit Profile
        </button>
        <button className="w-full py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ResidentProfile;
