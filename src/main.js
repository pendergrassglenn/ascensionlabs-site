import './css/base.css'
import './css/layout.css'
import './css/components.css'
import './js/motion.js'

async function loadPartials() {
  try {
    const header = await fetch('../partials/header.html')
    const headerText = await header.text()
    document.getElementById('header').innerHTML = headerText

    const footer = await fetch('../partials/footer.html')
    const footerText = await footer.text()
    document.getElementById('footer').innerHTML = footerText
  } catch (err) {
    console.error("Partial load failed:", err)
  }
}

loadPartials()