import React, { useContext, useState } from "react";
import { ProfileContext } from './ProfileContext';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAlert from "./ModalAlertProfile";

const Profile = () => {
    const { profileData, setProfileData } = useContext(ProfileContext);
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [tempProfileData, setTempProfileData] = useState(profileData);

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setTempProfileData({ ...tempProfileData, profilePicture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setProfileData(tempProfileData);
        setIsEditing(false);
        setShowModal(true);
    };

    const handleCancel = () => {
        setTempProfileData(profileData);
        setIsEditing(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const formatDateOfBirth = () => `${tempProfileData.dobDay}/${tempProfileData.dobMonth}/${tempProfileData.dobYear}`;

    const handleMobileChange = (e) => {
        setTempProfileData({ ...tempProfileData, mobile: e.target.value });
    };

    return (
        <div className="container">
            {isEditing ? <div></div> : (<h2>User Profile</h2>)}
            {isEditing ? (
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={tempProfileData.profilePicture} alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{tempProfileData.fullName}</h4>
                                            <p className="text-secondary mb-1">{tempProfileData.address}</p>
                                            <p className="textmuted font-size-sm">{tempProfileData.email}</p>
                                        </div>
                                        <div className="bio">
                                            <h6>Bio:</h6>
                                            <p>{tempProfileData.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Profile Picture</h6>
                                        </div>
                                        <div className="col-sm-9">
                                        <input type="file" className="form-control-file" onChange={handleProfilePictureChange} />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                value={tempProfileData.fullName}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, fullName: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date of Birth</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="d-flex">
                                                <select value={tempProfileData.dobDay} onChange={(e) => setTempProfileData({ ...tempProfileData, dobDay: e.target.value })} className="form-control mr-2">
                                                    {Array.from({ length: 31 }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                                                    ))}
                                                </select>
                                                <select value={tempProfileData.dobMonth} onChange={(e) => setTempProfileData({ ...tempProfileData, dobMonth: e.target.value })} className="form-control mr-2">
                                                    {Array.from({ length: 12 }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                                                    ))}
                                                </select>
                                                <select value={tempProfileData.dobYear} onChange={(e) => setTempProfileData({ ...tempProfileData, dobYear: e.target.value })} className="form-control">
                                                    {Array.from({ length: 100 }, (_, i) => (
                                                        <option key={i + 1924} value={i + 1924}>{i + 1924}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <select value={tempProfileData.gender} onChange={(e) => setTempProfileData({ ...tempProfileData, gender: e.target.value })} className="form-control">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Username</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                value={tempProfileData.username}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, username: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="email"
                                                value={tempProfileData.email}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, email: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                value={tempProfileData.mobile}
                                                onChange={handleMobileChange}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Institution</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                value={tempProfileData.institution}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, institution: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                value={tempProfileData.address}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, address: e.target.value })}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Bio</h6>
                                        </div>
                                        <div className="col-sm-9">
                                            <textarea
                                                value={tempProfileData.bio}
                                                onChange={(e) => setTempProfileData({ ...tempProfileData, bio: e.target.value })}
                                                className="form-control"
                                                rows="4"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn btn-success mr-2" style={{marginRight: '15px'}} onClick={handleSave}>Save</button>
                                            <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src={profileData.profilePicture} alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{profileData.fullName}</h4>
                                            <p className="text-secondary mb-1">{profileData.address}</p>
                                            <p className="textmuted font-size-sm">{profileData.email}</p>
                                        </div>
                                        <div className="bio">
                                            <h6>Bio:</h6>
                                            <p>{profileData.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.fullName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date of Birth</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {formatDateOfBirth()}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.gender}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Username</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.username}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.mobile}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Institution</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.institution}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {profileData.address}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Update Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ModalAlert show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Profile;