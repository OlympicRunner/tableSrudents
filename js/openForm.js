import {createElemTable} from './createElementTable.js'
import {numeration} from './numeration.js'

import {localPush} from './LocalStorage.js'

let craftOpen = {
    openForm : function (students) {

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

            let container = document.querySelector('.container')
            let addStudent = document.querySelector('.add-student')

        addStudent.addEventListener('click', () => {
            container.append(formBox)
            // addId () ///test
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
                    j++
                    if (document.querySelector('.' + classTriger) == null) {
                        let nameError = document.createElement('div')
                        nameError.classList.add('error-sett')
                        nameError.classList.add(classTriger)
                        nameError.textContent = errorText
                        errorPlace.append(nameError)
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
            if (j === 0) {
                // проверка на наличие идентичного , еще стоит сделать
                let studentInfo = {}
                // let names = inputName.value + inputSurname.value + inputLastName.value

                let inpName = (inputName.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputName.value.trim().toLocaleLowerCase()).slice(1)
                let inpSurname = (inputSurname.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputSurname.value.trim().toLocaleLowerCase()).slice(1)
                let inpLastName = (inputLastName.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputLastName.value.trim().toLocaleLowerCase()).slice(1)
                let inpFaculty = (inputFaculty.value.trim().toLocaleLowerCase())[0].toLocaleUpperCase() + (inputFaculty.value.trim().toLocaleLowerCase()).slice(1)

                studentInfo.Names = inpName + ' ' + inpSurname + ' ' + inpLastName + ' '
                studentInfo.Faculty = inpFaculty + ' '

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

                studentInfo.dateBirthday = dateBirthdayObj
                studentInfo.age = '(' + age + ' лет ) '

                /// года учебы

                let startStudy = inputStartStudy.value.split('-')
                let studyProcess = now.getFullYear() - startStudy[0]
                let dateStudy = Number(startStudy[0]) + 4
                if (studyProcess > 4) {
                    
                    studentInfo.studying = startStudy[0] + '-' + dateStudy
                    studentInfo.status = 'Закончил'
                } else {
                    if (studyProcess == 4 && now.getMonth() > 8) {
                        studentInfo.studying = startStudy[0] + '-' + dateStudy
                        studentInfo.status = 'Закончил'
                    } else {
                        studentInfo.studying = startStudy[0] + '-' + dateStudy
                        studentInfo.status = studyProcess + ' Курс'
                    }
                }

                let lastIndex = students.length
                let willId
                if (lastIndex > 0) {
                    willId = Number(students[lastIndex - 1].id) + 1
                    
                } else {
                    willId = 1
                }
                studentInfo.id = willId
                students.push(studentInfo)

            }
        }
        
        let tableItems = document.querySelector('.table-items')
        formList.addEventListener('submit', e => {
            e.preventDefault()

            checkAndAdd () /// записали данные в объект 
            // /      ----------------------------- крафтим только елементы которые еть в массиве, возможно еще при каждом событии удаляем все и по новой крафтим 
            console.log(students)


            let tableItemsPlus = tableItems.childNodes.length
            if (tableItemsPlus < students.length) {
                if (students.length > 1) {
                    createElemTable (students.length - 1, students)
                } else {
                    createElemTable(0, students)
                }
            }

            localPush (students)
            // console.log('a +', students)
            // console.log(students)
            
            // inputName.value = ''
            // inputSurname.value = ''
            // inputLastName.value = ''
            // inputBirthday.value = ''
            // inputFaculty.value = ''
            // inputStartStudy.value = ''

            numeration()
            // formBox.remove()
        })

    }
}

export let createForm = craftOpen.openForm