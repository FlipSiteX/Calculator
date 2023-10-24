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
    } else if (i.id === 'resultBtn') {
        i.addEventListener('click', () => {
            if (/([+\-*/%().]\.)|(\.[+\-*/%().])/ig.test(outputPanelText.value)) {
                outputPanelText.value = 'ошибка'
            } else if (/([\-+*/%][+\-/%().])|([\-+/%][+\-*/%().])/ig.test(outputPanelText.value)) {
                outputPanelText.value = 'ошибка'
            }
            else {
                outputPanelText.value = eval(outputPanelText.value)
            }
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
    } else {
        i.addEventListener('click', () => {
            outputPanelText.value = outputPanelText.value + i.textContent
        })
    }
}