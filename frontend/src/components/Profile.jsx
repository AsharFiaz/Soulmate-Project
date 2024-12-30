import React from 'react';
import './profile.css';
import profile from './3.jpg';
const Profile = () => {
  return (
    <div className="container">
      <div className="column container">
        <div className="container">
          <div className="profile-view">
            <div className='d-flex flex-row'>
            <img src={profile} alt="profile pic" className='profile-pic' />
          <div className='ms-4'>
            <h2>SH1620616490</h2>
            <p>Alexandria, United States of America</p>
            <p>Single</p>
          </div>
          </div>
              <button type='button' className='mt-4'>I'm interested!</button>
          </div>
        </div>
      <div className="d-flex container">
        <div className="col-lg-6 d-flex">
          <div className="profile-view">
            <h3>Ethnicity</h3>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Religion</td>
                    <td>Islam</td>
                  </tr>
                  <tr>
                    <td>Sect</td>
                    <td>Sunni</td>
                  </tr>
                  <tr>
                    <td>Community</td>
                    <td>Punjabi</td>
                  </tr>
                  <tr>
                    <td>Cast</td>
                    <td>Araien - Punjabi</td>
                  </tr>
                  <tr>
                    <td>Origins</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Namaz/Salah</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Fasting in Ramazan</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Pay Zakat</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-flex pe-9">
          <div className="profile-view">
            <h3>Appearance</h3>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Height</td>
                    <td>6'1 - 185 cm</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>Body Type</td>
                    <td>Average</td>
                  </tr>
                  <tr>
                    <td>Skin Tone</td>
                    <td>Fair</td>
                  </tr>
                  <tr>
                    <td>Head Hair</td>
                    <td>full head</td>
                  </tr>
                  <tr>
                    <td>Appearance</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Hair Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Dental</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        <div className="container">
      <div className="d-flex">
        <div className="col-lg-6">
          <div className="profile-view">
            <h3>Education & Career</h3>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Education</td>
                    <td>Bachelors</td>
                  </tr>
                  <tr>
                    <td>Working Sector</td>
                    <td>Job in private company</td>
                  </tr>
                  <tr>
                    <td>Profession</td>
                    <td>Engineering</td>
                  </tr>
                  <tr>
                    <td>Working as</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Annual Income</td>
                    <td>N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="profile-view">
            <h3>Life Style</h3>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Diet</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Drink</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Smoke</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

      </div>
  );
};

export default Profile;
