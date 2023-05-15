document.addEventListener('DOMContentLoaded', () => {
 
  async function populate() {
   const requestURL = 'https://semegenkep.github.io/itca/superheroes.json'
   const request = new Request(requestURL)
 
   const response = await fetch(request)
   const superHeroes = await response.json()
    
   populateHeader(superHeroes)
   populateHeries(superHeroes)
  }
 

  function populateHeader(obj) {
    const header = document.querySelector("header")
    const myH1 = document.createElement('h1')
     myH1.textContent = obj.squadName
     header.appendChild(myH1)

    const myP = document.createElement('p')
    myP.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`
    header.appendChild(myP)
  }
  
  function populateHeries(obj) {
    const section = document.querySelector("section");

    const heroes = obj.members;

    for(const hero of heroes) {
      const myArticle = document.createElement('article')
      const myH2 = document.createElement('h2')
      const myP1 = document.createElement('p1')
      const myP2 = document.createElement('p2')
      const myP3 = document.createElement('p3')
      const myList = document.createElement('ul')

      myH2.textContent = hero.name
      myP1.textContent = `Secret identity: ${hero.secretIdentity}`
      myP2.textContent = `Age: ${hero.age}`
      myP3.textContent = 'Superpowers:'

      const SuperPowers = hero.powers

      for (const power of SuperPowers) {
        const listItem = document.createElement('li')
        listItem.textContent = power
        myList.appendChild(listItem) 
      }

      myArticle.appendChild(myH2)
      myArticle.appendChild(myP1)
      myArticle.appendChild(myP2)
      myArticle.appendChild(myP3)
      myArticle.appendChild(myList)

      section.appendChild(myArticle)
    }
  }
  populate()
 })