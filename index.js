{
//  1. Знайти суму та кількість позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let i = 0
let j = 0
massive.forEach((elem) => {
    if (elem > 0) {
        i += elem
        j += 1
    }
})
console.log(`Сума позитивних елементів: ${i}, кількість позитивних елементів: ${j}`)
}
// =====================================================================================
{
// 2. Знайти мінімальний елемент масиву та його порядковий номер.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let minElement = massive[0]
let sequenceNumber = 0
massive.forEach((element, index) => {
    if (element < minElement) {
        minElement = element
        sequenceNumber = index + 1
    }
})
console.log(`Мінімальний елемент масиву: ${minElement}, його порядковий номер ${sequenceNumber}`)
}
// =====================================================================================
{
// 3. Знайти максимальний елемент масиву та його порядковий номер.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let maxElement = massive[0]
let sequenceNumber = 0
massive.forEach((element, index) => {
    if (element > maxElement) {
        maxElement = element
        sequenceNumber = index + 1
    }
})
console.log(`Максимальний елемент масиву: ${maxElement}, його порядковий номер ${sequenceNumber}`)
}
// =====================================================================================
{
// 4. Визначити кількість негативних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let theNumberOfNegativeElements = 0
massive.forEach((element) => {
    if (element < 0) {
        theNumberOfNegativeElements += 1
    }
})
console.log(`Кількість негативних елементів: ${theNumberOfNegativeElements}`)
}
// =====================================================================================
{
// 5. Знайти кількість непарних позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let oddPositiveElements = 0
massive.forEach((element) => {
    if (element > 0 && ((element % 2) !==0)) {
        oddPositiveElements += 1
    }
})
console.log(`Кількість непарних позитивних елементів: ${oddPositiveElements}`)
}
// =====================================================================================
{
// 6. Знайти кількість парних позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let evenPositiveElements = 0
massive.forEach((element) => {
    if (element > 0 && ((element % 2) ===0)) {
        evenPositiveElements += 1
    }
})
console.log(`Кількість парних позитивних елементів: ${evenPositiveElements}`)
}
// =====================================================================================
{
// 7. Знайти суму парних позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let sumEvenPositiveElements = 0
massive.forEach((element) => {
    if (element > 0 && ((element % 2) ===0)) {
        sumEvenPositiveElements += element
    }
})
console.log(`Сума парних позитивних елементів: ${sumEvenPositiveElements}`)
}
// =====================================================================================
{
// 8. Знайти суму непарних позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let sumOddPositiveElements = 0
massive.forEach((element) => {
    if (element > 0 && ((element % 2) !==0)) {
        sumOddPositiveElements += element
    }
})
console.log(`Сума непарних позитивних елементів: ${sumOddPositiveElements}`)
}
// =====================================================================================
{
// 9. Знайти добуток позитивних елементів.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let multiplicationPositiveElements = 1
massive.forEach((element) => {
    if (element > 0) {
        multiplicationPositiveElements *= element
    }
})
console.log(`Добуток позитивних елементів: ${multiplicationPositiveElements}`)
}
// =====================================================================================
{
// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
const massive = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
let indx = 0
let theLargestElement = massive[0]
massive.forEach((element) => {
    if (element > theLargestElement) {
        theLargestElement = element
    }
})
massive.forEach((element, index) => {
    if (element !== theLargestElement) {
        massive[index] = 0
    }
})
console.log(`Найбільший серед елементів масиву: ${theLargestElement}\n
Масив після обнулення остальних елементів: [${massive}]`)
}