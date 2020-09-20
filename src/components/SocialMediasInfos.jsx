import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialMediasInfos = ({socialMediaList}) =>{
  
   
    return(
        <div className="social-media-infos">
            <h4>Social medias</h4>
            <p>This tools is currently using data coming form</p>
            <FontAwesomeIcon icon="facebook"/>
            <ul>
                {socialMediaList.socialMedias.map((socialMedia) => (
                    <li>
                        <FontAwesomeIcon icon={["fab", socialMedia.icon]} />
                        {socialMedia.name}
                    </li>
                    ))
                }
            </ul>

        </div>
    )

};

export default SocialMediasInfos;