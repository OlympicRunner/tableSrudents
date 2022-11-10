import {createElemTable} from './createElementTable.js'
import {numeration} from './numeration.js'

let createElementsAll = {
    createElements : function (students) {


        
        if (students.length > 0) {
        let calcIteration = students.length 

        // console.log(calcIteration)

        for (let i = 0; i < calcIteration; i++) {
            createElemTable (i, students)
        }
        }

        numeration ()
    }
}


export let createAllElements = createElementsAll.createElements