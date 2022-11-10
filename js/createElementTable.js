import {numeration} from './numeration.js'

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

        const btnX = document.createElement('button')
        btnX.classList.add('item-dell')
        btnX.textContent = 'X'
        tableItem.append(btnX)

        btnX.addEventListener('click', () => {
            
            console.log(students)
            dellElem (students)
            btnX.parentElement.remove()
            numeration()
            

        })
        
        /// поиск и удаление елемента из students

        function dellElem () {

            let newStudents = []
            
            
            for (let item of students) {
                let i = 0
                if (item.Faculty !== String(btnX.parentElement.childNodes[1].textContent)) {
                    i++
                }
                if (item.Names !== String(btnX.parentElement.childNodes[0].textContent)) {
                    i++
                }
                if (item.dateBirthday !== btnX.parentElement.childNodes[2].textContent.split(' ')[0]) {
                    i++
                }
                if (item.studying !== btnX.parentElement.childNodes[3].textContent.split(' ')[0]) {
                    i++
                }

                if (i > 0) {
                    newStudents.push(item)
                }
                // console.log('+')
            }
            
            students = []
            
            for (let item of newStudents) {
                students.push(item)

            }
            console.log(students)
            
                 // if (item.Faculty === String(btnX.parentElement.childNodes[1].textContent) && item.Names === String(btnX.parentElement.childNodes[0].textContent) && item.dateBirthday === btnX.parentElement.childNodes[2].textContent.split(' ')[0] && item.studying === btnX.parentElement.childNodes[3].textContent.split(' ')[0]) {
        }
        
        
    }
}


export let createElemTable = createElem.createTableItem