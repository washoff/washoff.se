function injectFontFamilies() {
  window.WebFontConfig = {
    google: {families: ['Exo+2::latin']}
  }
  const wf = document.createElement('script')
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  wf.type = 'text/javascript'
  wf.async = 'true'
  const FIRST_ELEMENT = 0
  const script = document.getElementsByTagName('script')[FIRST_ELEMENT]
  script.parentNode.insertBefore(wf, script)
}

function create() {
  injectFontFamilies()
  const theme = {
    normalSpacing: 5,
    largeSpacing: 15,
    primaryColor: '#2f4f4f',
    primaryBackgroundColor: 'white',
    secondaryColor: 'white',
    secondaryBackgroundColor: '#354458',
    secondaryBackgroundGradient:
      'linear-gradient(#354458, #313751)',
    neutralSectionBackgroundColor: 'linear-gradient(#fff, #fff)',
    section1BackgroundColor: 'linear-gradient(#ad9122, #96780d)',
    section2BackgroundColor: 'linear-gradient(#354458, #313751)',
    primaryFontFamily: ['"Exo 2"', 'sans-serif'],
    secondaryFontFamily: ['"Exo 2"', 'sans-serif'],
    normalFontWeight: 400,
    normalFontSize: 16,
    largeFontSize: 24,
    extraLargeFontSize: 32,
    iconMultiplier: 2
  }
  return {
    theme
  }
}

export default {
  create
}
