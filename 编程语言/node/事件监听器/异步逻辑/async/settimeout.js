setTimeout(() => {
    console.log('i execute first')
    setTimeout(() => {
        console.log('i execute next')
        setTimeout(() => {
            console.log('i execute last')
        }, 100)
    }, 500)
}, 1000)