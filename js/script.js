(() => {
    let students = []

    function createStructure () {
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
        structureBox.append(filterNames)

        const filterFaculty = document.createElement('input')
        filterNames.classList.add('filter-faculty')
        structureBox.append(filterFaculty)

        const filterBirthday = document.createElement('input')
        filterNames.classList.add('filter-birthday')
        structureBox.append(filterBirthday)

        const filterDateStudy = document.createElement('input')
        filterNames.classList.add('filter-dateStudy')
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

        const namesList = document.createElement('ul')
        namesList.classList.add('names-list')
        namesList.classList.add('list')
        structureBox.append(namesList)

        const facultyList = document.createElement('ul')
        facultyList.classList.add('faculty-list')
        facultyList.classList.add('list')
        structureBox.append(facultyList)

        const birthdayList = document.createElement('ul')
        birthdayList.classList.add('birthday-list')
        birthdayList.classList.add('list')
        structureBox.append(birthdayList)

        const dateStudyList = document.createElement('ul')
        dateStudyList.classList.add('dateStudy-list')
        dateStudyList.classList.add('list')
        structureBox.append(dateStudyList)


        /// робим кнопку для додавання данных 

        const addStudent = document.createElement('button')
        addStudent.classList.add('add-student')
        addStudent.textContent = 'Добавить студента'
        container.append(addStudent)

        function openForm () {
            const formBox = document.createElement('div')
            formBox.classList.add('form-box')

            const formList = document.createElement('form')
            formList.classList.add('form-list')
            formBox.append(formList)

            /// кнопка для закрытия формы

            const closedButton = document.createElement('button')
            closedButton.classList.add('closed-button')
            closedButton.textContent = 'X'
            formList.append(closedButton)

            /// делаем 6 интуптов и кнопку для заполнения формы + подписи к каждому input
            const mustWriteName = document.createElement('h3')
            mustWriteName.classList.add('about-input')
            mustWriteName.textContent = 'Введите имя студента'
            formList.append(mustWriteName)

            const mustWriteSurname = document.createElement('h3')
            mustWriteSurname.classList.add('about-input')
            mustWriteSurname.textContent = 'Введите фамилию студента'
            formList.append(mustWriteSurname)

            const inputName = document.createElement('input')
            inputName.classList.add('input-name')
            inputName.classList.add('input')
            formList.append(inputName)

            const inputSurname = document.createElement('input')
            inputSurname.classList.add('input-surname')
            inputSurname.classList.add('input')
            formList.append(inputSurname)

            const mustWriteLastName = document.createElement('h3')
            mustWriteLastName.classList.add('about-input')
            mustWriteLastName.textContent = 'Введите отчество студента'
            formList.append(mustWriteLastName)

            const mustWriteBirthday = document.createElement('h3')
            mustWriteBirthday.classList.add('about-input')
            mustWriteBirthday.textContent = 'Введите дату рождения студента'
            formList.append(mustWriteBirthday)

            const inputLastName = document.createElement('input')
            inputLastName.classList.add('input-lastname')
            inputLastName.classList.add('input')
            formList.append(inputLastName)

            const inputBirthday = document.createElement('input')
            inputBirthday.classList.add('input-birthday')
            inputBirthday.classList.add('input')
            inputBirthday.setAttribute('type', 'date')
            inputBirthday.setAttribute('min', '1900-01-01')
            /// делаем ограничение для максимального ввода
            let date = new Date().toLocaleDateString().split('.').reverse()
            let maxDate = date[0] + '-' + date[1] + '-' + date[2]
            inputBirthday.setAttribute('max', maxDate)
            formList.append(inputBirthday)

            const mustWriteStartStudy = document.createElement('h3')
            mustWriteStartStudy.classList.add('about-input')
            mustWriteStartStudy.textContent = 'Введите год начала обучения студента'
            formList.append(mustWriteStartStudy)

            const mustWriteFaculty = document.createElement('h3')
            mustWriteFaculty.classList.add('about-input')
            mustWriteFaculty.textContent = 'Введите факультет студента'
            formList.append(mustWriteFaculty)

            const inputStartStudy = document.createElement('input')
            inputStartStudy.classList.add('input-startstady')
            inputStartStudy.classList.add('input')
            inputStartStudy.setAttribute('type', 'date')
            inputStartStudy.setAttribute('min', '2000-01-01')
            inputStartStudy.setAttribute('max', maxDate)
            formList.append(inputStartStudy)

            const inputFaculty = document.createElement('input')
            inputFaculty.classList.add('input-facolty')
            inputFaculty.classList.add('input')
            formList.append(inputFaculty)

            const formButton = document.createElement('button')
            formButton.classList.add('form-btn')
            formButton.textContent = 'Добавить студента'
            formList.append(formButton)

            const errorPlace = document.createElement('div')
            errorPlace.classList.add('error-place')
            formList.append(errorPlace)
            

            addStudent.addEventListener('click', () => {
                container.append(formBox)
            })

            closedButton.addEventListener('click', () => {
                formBox.remove()
                inputName.value = ''
                inputSurname.value = ''
                inputLastName.value = ''
                inputBirthday.value = ''
                inputFaculty.value = ''
                inputStartStudy.value = ''
            })

            function checkAndAdd () {
                let j = 0 /// индекс проверки если больше 0 то проверка не пройдена
                
                function checkItemValue (inputName, errorText, classTriger) {
                    // let classTriger = 'name-error'
                    // let errorText = 'Введите Имя корректно'
                    if (inputName.value == '') {

                        if (document.querySelector('.' + classTriger) == null) {
                            let nameError = document.createElement('div')
                            nameError.classList.add(classTriger)
                            nameError.textContent = errorText
                            errorPlace.append(nameError)
                            j++
                        } else {
                            j++
                        }
    
                        
                    } else {
                        let find = document.querySelector('.' + classTriger)
                        if (document.querySelector('.' + classTriger) !== null) {
                            find.remove()
                        }

                    }
                }


                /// проверки на незаполненные поля
                checkItemValue(inputName, 'Введите Имя', 'name-error')
                checkItemValue(inputSurname, 'Введите Фамилию', 'surname-error')
                checkItemValue(inputLastName, 'Введите Отчество', 'lastname-error')
                checkItemValue(inputBirthday, 'Введите ваш день рождения', 'birthday-error')
                checkItemValue(inputStartStudy, 'Введите год нчала обучения', 'startstudy-error')
                checkItemValue(inputFaculty, 'Введите название факультета', 'faculty-error')


                /// формируем Объект из полученных данных
                if (j < 6) {/// временно до 3 ошибок
                    // проверка на наличие идентичного , еще стоит сделать
                    let studentInfo = {}
                    // let names = inputName.value + inputSurname.value + inputLastName.value

                    let inpName = (inputName.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputName.value.trim().toLocaleLowerCase()).slice(1)
                    let inpSurname = (inputSurname.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputSurname.value.trim().toLocaleLowerCase()).slice(1)
                    let inpLastName = (inputLastName.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputLastName.value.trim().toLocaleLowerCase()).slice(1)
                    let inpFaculty = (inputFaculty.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputFaculty.value.trim().toLocaleLowerCase()).slice(1)

                    studentInfo.Name = inpName
                    studentInfo.Surname = inpSurname
                    studentInfo.LastName = inpLastName
                    studentInfo.Faculty = inpFaculty

                    /// считаем сколько лет:
                    let dateBirthday = inputBirthday.value.split('-')
                    let dateBirthdayReverse = dateBirthday.reverse()
                    let dateBirthdayObj = dateBirthdayReverse[0] + '.' + dateBirthdayReverse[1] + '.' + dateBirthdayReverse[2]

                    let now = new Date(); //Текущя дата
                    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
                    let dob = new Date(dateBirthday); //Дата рождения
                    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
                    let age; //Возраст

                    //Возраст = текущий год - год рождения
                    age = today.getFullYear() - dob.getFullYear();
                    //Если ДР в этом году ещё предстоит, то вычитаем из age один год
                    if (today < dobnow) {
                    age = age-1;
                    }

                    studentInfo.date = dateBirthdayObj
                    studentInfo.age = age
                    console.log(studentInfo)

                }
                
            }

            formList.addEventListener('submit', e => {
                e.preventDefault()
                
                checkAndAdd ()
                
            })

            
        }
        openForm ()
    }

    
    createStructure ()
    

})();