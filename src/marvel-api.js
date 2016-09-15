import React from 'react';

const api = require('marvel-api');

const marvel = api.createClient({
  publicKey: '0da4ad81cc85813a45808444fab73ce8',
});

export default marvel;
