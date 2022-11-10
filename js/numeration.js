

let numbers = {
    numeration : function () {

        let findListItems = document.querySelector('.table-items')
        // let lengthListItems = findListItems.childNodes.length
        let j = 0
        for (let item of findListItems.childNodes) {
            if (item.getAttribute('alt') == '0') {
                j++
            }
            // console.log(item.getAttribute('alt') == '1')
        }
        // console.log(j)
        /// чистим список перед новым циклом создания
        // let findNumberItem = document.querySelector('.number-item')
        let numbersList = document.querySelector('.numbers-list')
        if (numbersList.childNodes.length > 0 ) {
            while (numbersList.firstChild) {
                numbersList.removeChild(numbersList.firstChild)
            }
            
        }
        // numbersList.removeChild(findNumberItem)
        

        for (let i = 1; i <= j; i++) {
            const numberItem = document.createElement('li')
            numberItem.classList.add('number-item')
            numberItem.textContent = Number(i)  
            numbersList.append(numberItem)
        }
    }
}

export let numeration = numbers.numeration