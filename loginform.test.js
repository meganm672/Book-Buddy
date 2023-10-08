const{
    LoginForm, 
    resetForm,
    handleSubmit,
} = require("./LoginForm");

const{
    Account()
} = require("./Account");

describe('LoginForm', () => {
    let users; 
    beforeAll(async () => {
        users = await Account();
    });
    test("login information is correct", async () => {
        expect(firstname + lastname + email + password).toBe(true);
    })
    test("user is logged in", async () => {
        expect(user).toBe(loggedIn);
    });

});

describe('handleSubmit', () => {
    let register; 
    beforeAll(async () => {
        register = await LoginForm();
    })
})
/*describe('resetForm', () => {

}); */