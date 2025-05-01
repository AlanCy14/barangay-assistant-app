'use client';

import React, { useState, useEffect } from 'react';
import ResidentProfile from '../../components/ResidentProfile';

interface ResidentProfileProps {
  name: string;
  role: string;
  address: string;
  contact: string;
  household: number;
  memberSince: string;
}

// Mock resident data (you can replace this with actual data from an API)
const mockResidentData: ResidentProfileProps = {
  name: "John Dela Cruz",
  role: "Resident",
  address: "123 F. Bautista St.",
  contact: "06171234567",
  household: 3,
  memberSince: "March 2020",
};

const ResidentPage = () => {
  const [residentData, setResidentData] = useState<ResidentProfileProps | null>(null);

  // Simulate fetching resident data (replace with actual API call)
  useEffect(() => {
    setResidentData(mockResidentData); // Replace with API call
  }, []);

  if (!residentData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-8">
      <ResidentProfile {...residentData} />
    </div>
  );
};

export default ResidentPage;
