const digitBtns = document.getElementsByClassName('digit')
const operationBtns = document.getElementsByClassName('operation-btn')
let outputPanelText = document.querySelector('.output-panel')

for (let i of digitBtns) {
    i.addEventListener('click', () => {
        outputPanelText.value = outputPanelText.value + i.textContent
    })
}

let lastBracket = ')'
for (let i of operationBtns) {
    if (i.id === 'clean') {
        i.addEventListener('click', () => {
            outputPanelText.value = ''
            lastBracket = ')'
        })
    } else if (i.id === 'division') {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + '/'
        })
    } else if (i.id === 'product') {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + '*'
        })
    } else if (i.id === 'point') {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + '.'
        })
    }
    else if (i.id === 'remainder') {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + '%'
        })
    } else if (i.id === 'brackets') {
        i.addEventListener('click', () => {
            if (lastBracket === '(') {
                outputPanelText.value = outputPanelText.value + ')'
                lastBracket = ')'
            } else {
                outputPanelText.value = outputPanelText.value + '('
                lastBracket = '('
            }
        })
    } else if (i.id === 'minus' || i.id === 'plus') {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + i.textContent
        })
    } else {
        i.addEventListener('click', () => {
            try {
                outputPanelText.value = eval(outputPanelText.value)
            }
            catch (error) {
                outputPanelText.value = 'ошибочка'
            }
        })
    }
}