let sort = {
    btnsSort : function (students) {
           
        /// сортировка по ФИО
        let namesItem = document.querySelector('.names-btn')

        let sortNameIndex = true

        namesItem.addEventListener('click', () => {
            let sortNamesList =  []


            
            for (let item of students) {
                sortNamesList.push(item.Names)
            }
            if (sortNameIndex == true) {
                sortNamesList.sort()
                sortNameIndex = false
            } else {
                sortNamesList.sort().reverse()
                sortNameIndex = true
            }
            let ulList = document.querySelector('.table-items')
            for (let j of sortNamesList) {
                for (let item of ulList.childNodes) {
                    let itemElem = item.textContent.split(' ')
                    let itemNames = itemElem[0] + ' ' + itemElem[1] + ' ' + itemElem[2]
                    if (String(itemNames + ' ') == String(j)) {
                        ulList.appendChild(item)
                    }
                }
            }

            

        })

        /// сортировка по  факультетам
        let facultyItem = document.querySelector('.faculty-btn')
        facultyItem.addEventListener('click', () => {
            let sortNamesList =  []
            
            for (let item of students) {
                sortNamesList.push(item.Faculty)
            }
            sortNamesList.sort()
            let ulList = document.querySelector('.table-items')
            for (let j of sortNamesList) {
                for (let item of ulList.childNodes) {
                    let itemElem = item.textContent.split(' ')
                    let itemNames = itemElem[3]
                    if (String(itemNames + ' ') == String(j)) {
                        ulList.appendChild(item)
                    } 
                }
            }
            
        })

        /// сортировка по дате рождения
        let birthdayItem = document.querySelector('.birthday-btn')
        birthdayItem.addEventListener('click', () => {
            let sortNamesList =  []
            
            for (let item of students) {
                sortNamesList.push(item.dateBirthday)
            }
            sortNamesList.sort().reverse()
            let ulList = document.querySelector('.table-items')
            for (let j of sortNamesList) {
                for (let item of ulList.childNodes) {
                    let itemElem = item.textContent.split(' ')
                    let itemNames = itemElem[4]
                    if (String(itemNames) == String(j)) {
                        ulList.appendChild(item)
                        
                    } 
                }
            }
            
        })

        /// сортировка по дате поступленя
        let dateStudyItem = document.querySelector('.dateStudy-btn')
        dateStudyItem.addEventListener('click', () => {
            let sortNamesList =  []
            
            for (let item of students) {
                sortNamesList.push(item.studying)
            }
            sortNamesList.sort()
            let ulList = document.querySelector('.table-items')
            for (let j of sortNamesList) {
                for (let item of ulList.childNodes) {
                    let itemElem = item.textContent.split(' ')
                    let itemNames = itemElem[8]
                    if (String(itemNames) == String(j)) {
                        ulList.appendChild(item)
                    } 
                   
                }
            }
            
        })

    }
}

export let btnsSort = sort.btnsSort