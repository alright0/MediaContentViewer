
const FORMAT = 'jpg'
const SRC = './content/'
let index = 0
let minIndex = 0
let maxIndex = 128

const imageElement = document.getElementById('image')
const pageElement = document.getElementById('page')
const startFileName = `${SRC}${minIndex}.${FORMAT}`

const countImages = async () => {
    for (i = minIndex; i < maxIndex; i++) {
        const exit = await count(i)
        if (exit) { break }
    }
    pageElement.innerHTML = `${index + 1}/${maxIndex + 1}`
    imageElement.src = startFileName
}

const count = (i) => {
    return new Promise((function (resolve, reject) {
        const fileName = `${SRC}${i}.${FORMAT}`
        var img = new Image();

        img.onerror = () => {
            reject(true)
        }
        img.onload = () => {
            resolve(false)
        }
        img.src = fileName;
    })).catch((e) => {
        maxIndex = i - 1
    })
}


const slideLeft = () => {
    index -= 1
    slide()
}

const slideRight = () => {
    index += 1
    slide()
}

const slide = () => {
    if (index > maxIndex) {
        index = minIndex
    } else if (index < minIndex) {
        index = maxIndex
    }

    const fileName = `${SRC}${index}.${FORMAT}`

    imageElement.src = fileName
    pageElement.innerHTML = `${index + 1}/${maxIndex + 1}`
}


