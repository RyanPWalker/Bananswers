import React from 'react';
import { FacebookAds } from 'expo';

const AdBanner = ({ id, style, online, type }) => online && (
  <FacebookAds.BannerView placementId={id} type={type || 'standard'} style={style} />
);

export default AdBanner;