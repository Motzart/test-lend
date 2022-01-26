exports.linkResolver = (doc) => {
  switch (doc.type) {
    case 'homepage': {
      return doc.lang === 'en-us' ? '/' : `/${doc.lang}`
    }

    case 'page': {
      return `/${doc.lang}/${doc.uid}`
    }

    default:
      return '/'
  }
}
