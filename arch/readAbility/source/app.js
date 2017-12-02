(function () {
  if (!document.addEventListener) return

  let options = INSTALL_OPTIONS
  let element

  function updateElement () {

    element = INSTALL.createElement(options.container, element)
    element.setAttribute('app', 'readAbility')

    const size = `${options.size}em`
    element.style.fontSize = `${size}`
  }

  window.INSTALL_SCOPE = {
    ...INSTALL_SCOPE,
    setOptions (nextOptions) {
      options = nextOptions

      updateElement()
    },
    setSize (nextOptions) {
      options = nextOptions
      element.style.fontSize = `${options.size}em`
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
