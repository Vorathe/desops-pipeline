const path = require('path'),
  dl = require('download');

const filenameIcon = 'icons.zip',
  filenameStyle = '_variables-brandai.scss',
  filenameLogos = 'logos.zip',
  pathIcons = path.resolve('src', 'assets', 'tmp'),
  pathLogos = path.resolve('src', 'assets', 'img', 'logos'),
  pathStyle = path.resolve('src', 'assets', 'scss', 'variables'),
  assets = {
    key: 'rJ2E0pU9Z',
    icons: 'https://assets.brand.ai/projectzero/project-zero/icons.zip',
    logos: 'https://assets.brand.ai/projectzero/project-zero/logos.zip',
    style: 'https://assets.brand.ai/projectzero/project-zero/_style-params.scss'
  };

const execDownload = (url, key, dest, filename, extract) => {
  return dl(url + '?key=' + key, dest, { extract: extract, filename: filename })
    .catch(error => {
      return Promise.reject('Download failed, ' + error);
  });
};

const fetchAssets = (icons, logos, styles) => {
  Promise.all([fetchIcons(icons, filenameIcon), fetchLogos(logos, filenameLogos), fetchStyle(styles, filenameStyle)])
    .then(() => {
    console.log('Assets imported successfully');
  }).catch(error => {
    return Promise.reject('Failed to fetch assets, ' + error);
  });
};

const fetchIcons = function(path, filename) {
  return execDownload(assets.icons, assets.key, path, filename, true)
    .then(() => {
    console.log('Icon download and extraction complete');
  }).catch(error => {
    return Promise.reject('Failed to download icons, ' + error);
  });
};

const fetchLogos = function(path, filename) {
  return execDownload(assets.logos, assets.key, path, filename, true)
    .then(() => {
      console.log('Image download and extraction complete');
    }).catch(error => {
      return Promise.reject('Failed to download images, ' + error);
    });
};

const fetchStyle = function(path, filename) {
  return execDownload(assets.style, assets.key, path, filename, false)
    .then(() => {
    console.log('Style download complete');
  }).catch(error => {
      return Promise.reject('Failed to download style, ' + error);
  });
};

fetchAssets(pathIcons, pathLogos, pathStyle);
