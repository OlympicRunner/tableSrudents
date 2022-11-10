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
            

            dellElemStudents ()
            
            btnX.parentElement.remove()
            numeration()
            // console.log(students)

        })
        
        /// поиск и удаление елемента из students
        function dellElemStudents () {
            
            let elemX = btnX.parentNode.childNodes[4].textContent
            
            let studentsNew = students.filter(item => item.id != elemX)
            
            localPush (studentsNew)
            // localPull(students)
        }
        
        
            
                 // if (item.Faculty === String(btnX.parentElement.childNodes[1].textContent) && item.Names === String(btnX.parentElement.childNodes[0].textContent) && item.dateBirthday === btnX.parentElement.childNodes[2].textContent.split(' ')[0] && item.studying === btnX.parentElement.childNodes[3].textContent.split(' ')[0]) {
        // }
        
        
    }
}


export let createElemTable = createElem.createTableItem