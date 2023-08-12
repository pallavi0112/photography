import React, { useEffect, useState } from 'react';
import { BasicDisplay } from 'instagram-basic-display';

const InstagramFeed = () => {
    const [profile, setProfile] = useState(null);
    const [feed, setFeed] = useState([]);
    const accessToken =
        'IGQVJXcVNzTVdMY0EyU096UDAtQlFEcHpaSGpndWEtYWFEZA1J1X05hcWs0NDBoV2RSN2xITDdqRE5aYnpxYWFIaE92TG9MTWtwb3kwdW03elBKY0xBWnVVb2RjRUdDWDRzMVZABV0dKNVY3a2dSMndVVgZDZD';
    const userID = '7065242026837603';

    useEffect(() => {


        fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Extract the Instagram User ID from the response
                const instagramUserId = data.id;
                console.log('Instagram User ID:', instagramUserId);
            })
            .catch((error) => {
                console.error('Error fetching Instagram User ID:', error);
            });
        const fetchData = async () => {
            try {
                const basicDisplay = new BasicDisplay({ accessToken }); // Pass an object with the accessToken property
                const profileData = await basicDisplay.getUserProfile(userID);
                setProfile(profileData);

                const mediaData = await basicDisplay.getMedia(userID);
                setFeed(mediaData);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
            }
        };
        fetchData();
    }, [accessToken, userID]); // Include accessToken and userID in the dependency array to trigger the effect when they change

    if (!profile || feed.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{profile.username}'s Instagram Feed</h2>
            <div>
                {/* Display profile information */}
                <p>Full Name: {profile.full_name}</p>
                <p>Bio: {profile.bio}</p>
                <p>Followers: {profile.followers_count}</p>
                {/* Display feed images */}
                {feed.map((media) => (
                    <img key={media.id} src={media.media_url} alt={media.caption} />
                ))}
            </div>
        </div>
    );
};

export default InstagramFeed;
