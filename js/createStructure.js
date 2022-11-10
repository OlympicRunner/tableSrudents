let craft = {
    createStructure : function () {
        const container = document.querySelector('.container')

        const title = document.createElement('h1')
        title.textContent = 'Список Студентов'
        container.append(title)

        const structureBox = document.createElement('div')
        structureBox.classList.add('structure-box')
        container.append(structureBox)
        /// наполняем таблицу 
        const filterRow = document.createElement('h2')
        filterRow.classList.add('filter-row')
        filterRow.textContent = 'Фильтры'
        structureBox.append(filterRow)

        const filterNames = document.createElement('input')
        filterNames.classList.add('filter-names')
        filterNames.classList.add('filter-sett')
        filterNames.setAttribute('placeholder', 'Чето-то из ФИО )')
        structureBox.append(filterNames)

        const filterFaculty = document.createElement('input')
        filterFaculty.classList.add('filter-faculty')
        filterFaculty.classList.add('filter-sett')
        filterFaculty.setAttribute('placeholder', 'Название факультета')
        structureBox.append(filterFaculty)

        const filterBirthday = document.createElement('input')
        filterBirthday.classList.add('filter-birthday')
        filterBirthday.classList.add('filter-sett')
        filterBirthday.setAttribute('type', 'date')
        structureBox.append(filterBirthday)

        const filterDateStudy = document.createElement('input')
        filterDateStudy.classList.add('filter-dateStudy')
        filterDateStudy.classList.add('filter-sett')
        filterDateStudy.setAttribute('placeholder', 'Год начала обучения')
        structureBox.append(filterDateStudy)

        const numbers = document.createElement('h2')
        numbers.classList.add('numbers')
        numbers.textContent = '№'
        structureBox.append(numbers)

        const namesItem = document.createElement('button')
        namesItem.classList.add('names-btn')
        namesItem.classList.add('btn')
        namesItem.textContent = 'ФИО'
        structureBox.append(namesItem)

        const facultyItem = document.createElement('button')
        facultyItem.classList.add('faculty-btn')
        facultyItem.classList.add('btn')
        facultyItem.textContent = 'Факультет'
        structureBox.append(facultyItem)

        const birthdayItem = document.createElement('button')
        birthdayItem.classList.add('birthday-btn')
        birthdayItem.classList.add('btn')
        birthdayItem.textContent = 'ДР и возраст'
        structureBox.append(birthdayItem)
        
        const dateStudyItem = document.createElement('button')
        dateStudyItem.classList.add('dateStudy-btn')
        dateStudyItem.classList.add('btn')
        dateStudyItem.textContent = 'Годы обучения'
        structureBox.append(dateStudyItem)

        const numbersList = document.createElement('ul')
        numbersList.classList.add('numbers-list')
        numbersList.classList.add('list')
        structureBox.append(numbersList)

        const tableItems = document.createElement('ul')
        tableItems.classList.add('table-items')
        tableItems.classList.add('list')
        structureBox.append(tableItems)

        /// робим кнопку для додавання данных 

        const addStudent = document.createElement('button')
        addStudent.classList.add('add-student')
        addStudent.textContent = '+'
        container.append(addStudent)
    }
}

export let createStructure = craft.createStructure