chrome.webRequest.onHeadersReceived.addListener(details => {
  const responseHeaders = details.responseHeaders.map(item => {
    if (item.name.toLowerCase() === 'access-control-allow-origin') {
      item.value = '*'
    }
  })
  return { responseHeaders };
}, {urls: ['<all_urls>']}, ['blocking', 'responseHeaders', 'extraHeaders'])