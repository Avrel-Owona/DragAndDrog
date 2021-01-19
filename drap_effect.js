const list_items = document.querySelectorAll(".list-item")
const lists = document.querySelectorAll(".list")

// Element déplacé égal à nul car il y'a neuf qui sont actuellement trainées
let draggedItem = null

// Puis je crée une boucle qui parcours chaque élément
for (let i = 0; i < list_items.length; i++) {
    const items = list_items[i]

// Créeons un écouteurs où dragstart permettra à l'utilisateur de glisser un élément ou une sélection de texte.
    items.addEventListener("dragstart", function () {
        draggedItem = items
// Le principe est de pouvoir porté l'elément et le faire disparaitre, pour cela nous déclarons une fonction où nous y ajouterons un display = "none"
        setTimeout(function () {

            draggedItem.style.display = "none"
        }, 0)
        console.log("L'élément est porté")
    })
    
// dragend est déclenché lorsque une opération de glissement est terminée (en relâchant le bouton de la souris ou en appuyant sur la touche Echap)
    items.addEventListener("dragend", function () {

// Il faudrait que lorsque l'élément soit porté, arrete de disparaitre, pour cela nous mettrons un display = "block'
        setTimeout(function () {
            items.style.display = "block"
            draggedItem = null
        }, 0)
        console.log("L'élément est relaché")
    })

    for (let  j = 0; j < lists.length; j++) {
        const list = lists[j]

//  dragover est déclenché lorsqu'un élément ou une sélection de texte est glissé jusqu'à une cible de dépôt valide (toutes les 100ms)
        list.addEventListener("dragover", function (e) {
            e.preventDefault()
            this.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        })

// dragleave est déclenché lorsqu'un élément glissé ou une sélection de texte "quitte" une cible de dépôt valide.
        list.addEventListener("dragleave", function () {
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
        })
// dragenter est déclenché lorsqu'un élément glissé ou une sélection de texte "entre dans une cible de drop valide.
        list.addEventListener("dragenter", function (e){
            e.preventDefault()
            this.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        })

// drop est déclenché lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide.
        list.addEventListener("drop", function (e) {
            this.append(draggedItem)
            console.log("L'élément est déposé à destination")

// Lorsque nous le déposons, il prendra ce background
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
        })

    }
}