const { 
    default: AllBooks ,
} = require("./src/components/Books");

const{
    SingleBook(),
} = require("./src/components/SingleBook");

const{
    Navigations(),
} = require("./src/components/Books");

describe('Navigations', () => {
    let navbar; 
    beforeAll(async () => {
        //navbar = await loading mainpage;
    });
    test("navigation bar appears on page", async () => {
        expect(navbar).toBe(true);
    })
    test("that user entered an input", async() => {
        expect(navbar).anything(); 
    });
    test("navigation bar is interactive", async () => {
        const book = jest.fn();
        expect(SingleBook()).toHaveBeenCalledWith(expect.any(book));;
    });

});