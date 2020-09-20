import React from 'react';

const SocialMediasInfos = ({socialMediaList}) =>{
   
    return(
        <div className="social-media-infos">
            <h4>Social medias</h4>
            <p>This tools is currently using data coming form</p>
            <ul>
                {socialMediaList.socialMedias.map((socialMedia) => (
                    <li>{socialMedia.name}</li>
                    ))
                }
            </ul>

        </div>
    )

};

export default SocialMediasInfos;