import React from 'react';
import './infochannel.scss';

export default function InfoChanel({ video }) {
  const channel = video[0];
  const url = process.env.REACT_APP_NGINX_LINK;

  const channelImage = url + channel.image_link;
  return (
    <div className="channel-info">
      <a href={`/channel/${channel.name}`} class='link_channel_video' rel="noopener noreferrer">
        <img
          className="channel-image"
          src={channelImage}
          alt={channel.name}
        />
      </a>
      <div className="channel-details">
        <a href={`/channel/${channel.name}`} class='link_channel_video' rel="noopener noreferrer">
            <p className="channel-name">{channel.name}</p>
        </a>
        <p className="channel-subscribers">
          {channel.subscribers} abonné{channel.subscribers > 1 && 's'}
        </p>
      </div>
    </div>
  );
}
