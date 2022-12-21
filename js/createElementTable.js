import {numeration} from './numeration.js'
import {localPush} from './LocalStorage.js'
import {localPull} from './LocalStorage.js'


// test 
// import{localPush} from './LocalStorage.js'

let createElem = {
    createTableItem : function  (i = 0, students) {
        let tableItems = document.querySelector('.table-items')

        const tableItem = document.createElement('li')
        tableItem.classList.add('table-item')
        tableItem.setAttribute('alt', '0')
        tableItems.append(tableItem)
    
        const itemName = document.createElement('div')
        itemName.classList.add('item-sett')
        itemName.textContent = students[i].Names
        tableItem.append(itemName)
    
        const itemFaculty = document.createElement('div')
        itemFaculty.classList.add('item-sett')
        itemFaculty.textContent = students[i].Faculty
        tableItem.append(itemFaculty)
    
    
        const itemBirthday = document.createElement('div')
        itemBirthday.classList.add('item-sett')
        itemBirthday.textContent = students[i].dateBirthday + ' ' + students[i].age
        tableItem.append(itemBirthday)
    
        const itemStudy = document.createElement('div')
        itemStudy.classList.add('item-sett')
        itemStudy.textContent = students[i].studying + ' (' + students[i].status + ')'
        tableItem.append(itemStudy)

        const forId = document.createElement('i')
        forId.style.height = 0
        forId.textContent = students[i].id
        tableItem.append(forId)

        const btnX = document.createElement('button')
        btnX.classList.add('item-dell')
        btnX.textContent = 'X'
        tableItem.append(btnX)

        btnX.addEventListener('click', () => {
            
            let id = btnX.parentNode.childNodes[4].textContent
            dellElemStudents (id)
            // localPull(students)
            
            
            btnX.parentElement.remove()
        
            
            console.log(students)
            console.log(JSON.parse(localStorage.getItem('tableInfo')))
            
            numeration()

        })
        


        /// поиск и удаление елемента из students
        function dellElemStudents (id = 0) {

            let studentsNew = students.filter(item => item.id != id)
            
            localPush(studentsNew)
            location.reload()  /// что-то не выходило и тут я немного поколхозил
        }
                
    }
}


export let createElemTable = createElem.createTableItem