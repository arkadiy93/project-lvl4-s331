const host = '';

export default {
  messagesUrl: id => [host, 'api/v1/channels', id, 'messages'].join('/'),
  addChannelUrl: () => [host, 'api/v1/channels'].join('/'),
};
