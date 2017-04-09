function getFirstSelector(selector) {
  const theFirst = document.querySelector(selector)
  return theFirst
}

function nestedTarget() {
  const theTarg = document.getElementById('nested').querySelector('div.target')
  return theTarg
}

function deepestChild() {
  let theChild = document.getElementById('grand-node')
  let nextChild = theChild.children[0]

  while(nextChild) {
    theChild = nextChild 
    nextChild = theChild.children[0]
  }
  return theChild
}

function increaseRankBy(n) {
  let theThing = document.querySelectorAll("ul.ranked-list") 

  for (let i = 0; i < theThing.length; i++) {
    theThing[i].innerHTML = parseInt(theThing[i].innerHTML) + n
  }
}