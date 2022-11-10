
let localUp = {
    localCreate : function (students) {

        let getStorage = JSON.parse(localStorage.getItem('tableInfo'))
        // localStorage.setItem('dd', JSON.stringify('lorem'))
        if(getStorage !== null) {

            for (let item of getStorage) {
                students.push(item)
            }
            
        }
        
    },

    localAdd : function (students) {
        localStorage.setItem('tableInfo', JSON.stringify(students)) /// синхрон students и localStorage кажыдй раз при использовании функции
    }
}

export let localPull = localUp.localCreate
export let localPush = localUp.localAdd