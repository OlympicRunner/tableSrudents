
let doFilter = {

    filter : function () {
        let filterNames = document.querySelector('.filter-names')
        

        document.addEventListener('keyup', (e) => {
            // console.log(e.target.value)
            let ulChildes = document.querySelector('.table-items').childNodes
            for (let item of ulChildes) {
                if (item.childNodes[0].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    console.log(item.childNodes[0].textContent)
                }
                // console.log(item.childNodes[0].textContent)
            }
            
        })
    }
}


export let filter = doFilter.filter