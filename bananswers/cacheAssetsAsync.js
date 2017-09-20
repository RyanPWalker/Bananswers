import { Asset } from 'expo';

export default function cacheAssetsAsync({ images = [] }) {
  return Promise.all([
    ...cacheImages(images),
  ]);
}

const cacheImages = val => val.map(file => Asset.fromModule(file).downloadAsync());