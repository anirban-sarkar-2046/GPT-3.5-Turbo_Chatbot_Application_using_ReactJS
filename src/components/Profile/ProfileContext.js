import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        fullName: "Anirban Sarkar",
        dobDay: "01",
        dobMonth: "01",
        dobYear: "2004",
        gender: "Male",
        username: "Anirban2046",
        email: "sarkar.anirban@gmail.com",
        mobile: "+880 017xx-xxxxxx",
        institution: "Rajshahi University of Engineering and Technology",
        address: "Rajshahi",
        bio: "Engineering undergrad on a mission to decode the digital universe! | Passionate about algorithms, data structures, and everything tech! | Always up for a challenge & ready to hack away at problems! | Join me on this journey of innovation and exploration!",
        profilePicture: "https://bootdey.com/img/Content/avatar/avatar5.png",
    });

    return (
        <ProfileContext.Provider value={{ profileData, setProfileData }}>
            {children}
        </ProfileContext.Provider>
    );
};
