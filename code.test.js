const add = require('./code')
const calculateHyp = require('./code')
const removeBugs = require('./code')
const clearLowPriority = require('./code')
const PM = require('./code')
const AM = require('./code')


// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })

// test ("calculateHyp should return the square root of the sum of the squares", () => {
//     let c = calculateHyp(3,4)
//     expect(c).toBe(5)
// })

// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = removeBugs(code)
    
//     expect(bugFreeCode).not.toContain("BUG")
//     expect(bugFreeCode).toContain("good code") //this is just an example, there are other ways to check
// })

// test("should keep only HIGH priority tasks", () => {
//     let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
//     let filteredTasks = clearLowPriority(tasks)

//     filteredTasks.forEach(t => {
//         expect(t.priority).toBe("HIGH")
//     })
// })

// test("addPicture should add a picture URL to the pictureURLs array", function () { 
//   const picManager = new PM()
//   expect(picManager.pictureURLs.length).toBe(0)
  
//   picManager.addPicture("some_url")
//   expect(picManager.pictureURLs.length).toBe(1)           //test
//   expect(picManager.pictureURLs).toContain("some_url")    //double check 
// })

// test("removePicture should remove a picture URL to the pictureURLs array", function () { 
//     const picManager = new PM()
//     expect(picManager.pictureURLs.length).toBe(0)
//     picManager.addPicture("some_url")
//     picManager.removePicture("some_url")
//     expect(picManager.pictureURLs.length).toBe(0)           
//     expect(picManager.pictureURLs).not.toContain("some_url") 
//   })


test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb", "Tazmania"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({
        food: "cherry",
        item: "lightbulb",
        location: "Tazmania"
    })
})

test("should return a message when array lengths don't match", () => {
    let arrayManipulator = new AM()
    let x = ["food", "item", "location"]
    let y = ["cherry", "lightbulb"]

    let result = arrayManipulator.manipulate(x, y)

    expect(result).toEqual({ error: "Array lengths don't match" })
})
      



