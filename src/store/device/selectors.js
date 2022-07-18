export const deviceSelector = (reduxState) => reduxState.device.devices;

export const categoryWithDeviceSelector = (reduxState) =>
  reduxState.device.categoriesWithDevices;

export const deviceDetailSelector = (reduxState) =>
  reduxState.device.deviceDetails;

// export const deviceRatingSelector = (reduxState) =>
//   reduxState.device.categoriesWithDevices.map((device) => device.ratings);
