const path = require('path'),
  fs = require('fs'),
  dl = require('download');

const filenameIcon = 'icons.zip',
  filenameStyle = '_variables-brandai.scss',
  pathIcons = path.resolve('src', 'assets', 'tmp'),
  pathStyle = path.resolve('src', 'assets', 'scss', 'variables'),
  assets = {
    key: 'rJ2E0pU9Z',
    icons: 'https://assets.brand.ai/projectzero/project-zero/icons.zip',
    style: 'https://assets.brand.ai/projectzero/project-zero/_style-params.scss'
  };

const execDownload = (url, key, dest, filename, extract) => {
  return dl(url + '?key=' + key, dest, { extract: extract, filename: filename })
    .catch(error => {
      throw new Error('Failed to fetch icons, ' + error);
  });
};

const fetchAssets = (icons, styles) => {
  Promise.all([fetchIcons(icons, filenameIcon), fetchStyle(styles, filenameStyle)])
    .then(() => {
    console.log('Assets imported successfully');
  }).catch(error => {
    throw new Error('Failed to fetch assets, ' + error);
  });
};

const fetchIcons = function(path, filename) {
  return execDownload(assets.icons, assets.key, path, filename, true)
    .then(() => {
    console.log('Icon download and extraction complete');
  }).catch(error => {
    throw new Error('Failed to download icons, ' + error);
  });
};

const fetchStyle = function(path, filename) {
  return execDownload(assets.style, assets.key, path, filename, false)
    .then(() => {
    console.log('Style download complete');
  }).catch(error => {
    throw new Error('Failed to download style, ' + error);
  });
};

fetchAssets(pathIcons, pathStyle);
