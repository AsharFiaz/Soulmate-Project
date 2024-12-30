import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./profiles.css";

const Profiles = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [profiles, setProfiles] = useState([]);

  // Extracting individual query parameters
  const ageForm = queryParams.get("ageForm");
  const ageTo = queryParams.get("ageto");
  const city = queryParams.get("city");
  const gender = queryParams.get("gender");
  const religion = queryParams.get("religion");

  const fetchApi = async () => {
    try {
      const result = await axios.post("http://localhost:3001/profiles", {
        agefrom: ageForm,
        ageto: ageTo,
        city: city,
        gender: gender,
        religion: religion,
      });

      const data = result.data;

      if (Array.isArray(data)) {
        setProfiles(data);
      } else {
        console.warn("API did not return an array. Received:", data);
        setProfiles([]);
      }
    } catch (error) {
      console.error("Error fetching profiles:", error);
      setProfiles([]);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [queryParams]);

  return (
    <div className="page-container">
      <Header />
      <Navbar />
      <div className="profiles-container">
        <h3 className="heading-container">Matched Profiles</h3>
        {profiles && profiles.length === 0 ? (
          <div className="no-profiles">
            No profiles found matching the criteria.
          </div>
        ) : (
          <div className="cards-wrapper">
            {profiles.map((profile) => (
              <div key={profile._id} className="profile-card">
                <div>
                  <span>Name:</span> {profile.name}
                </div>
                <div>
                  <span>Father's Name:</span> {profile.fatherName}
                </div>
                <div>
                  <span>Age:</span> {profile.age}
                </div>
                <div>
                  <span>City:</span> {profile.city}
                </div>
                <div>
                  <span>Siblings:</span> {profile.sibling}
                </div>
                <div>
                  <span>Phone Number:</span> {profile.phoneNo}
                </div>
                <div>
                  <span>Gender:</span> {profile.gender}
                </div>
                <div>
                  <span>Religion:</span> {profile.religion}
                </div>
                <div>
                  <span>Cast:</span> {profile.cast}
                </div>
                <div className="separator"></div>
                <button>View Profile</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
