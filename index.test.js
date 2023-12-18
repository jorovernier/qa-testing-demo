 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
}

test('should run', () => expect(2).toBe(2))

test('first name should be Patten', () => expect(testData.firstName).toBe('Patten'))

describe('formatTitle Tests', () => {
  test('formatTitle returns a string', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(typeof formattedTitle).toBe('string')
    // toBe works here because the typeof and string comparision values are not stored anywhere
  })

  test('formatTitle formats the title', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(formattedTitle).toBe('Nulla Ac')

    // We can also use dynamic variables as comparison values
    // let expectedTitle = 'Nulla Ac'
    // let formattedTitle = formatTitle(testData.title)
    // expect(formattedTitle).toBe(expectedTitle)
  })
})

describe('shortenBio Tests', () => {
  test('shortenBio shortens the bio', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })

  test('shortenBio adds periods to the end of the string', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio).toContain('...')
  })
})

describe('convertLength Tests', () => {
  test('convertLength returns an array with 2 items', () => {
    let result = convertLength(testData.length)
    expect(result).toHaveLength(2)
  })
  
  test('convertLength can handle numbers under 60', () => {
    let result = convertLength(30)
    // expect(result[0]).toEqual(0)
    // expect(result[0]).toBe(0)
    // toBe works in this case because the comparison value of 0 is a simple data type not stored anywhere

    expect(result[1]).toEqual(30)
  })
})

// this will pass because toEqual only compares the values of the two objects
test('toBe vs toEqual', () => {
  const myObj = {myNum: 4}
  const myObjTwo = {myNum: 4}
  expect(myObj).toEqual(myObjTwo)
})

// this will fail because toBe compares the values AND where the values are being stored
test('toBe vs toEqual again', () => {
  const myObj = {myNum: 4}
  const myObjTwo = {myNum: 4}
  expect(myObj).toBe(myObjTwo)
})