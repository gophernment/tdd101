const greet = require("./greet.js");

test("greeting a name Bob gonna be Hello, Bob.", () => {
    const given = "Bob";
    const want = "Hello, Bob.";

    const get = greet(given);

    expect(get).toBe(want);
})

test.skip("greeting an empty name gonna be Hello, my friend.", () => {
    const given = "";
    const want = "Hello, my friend.";

    const get = greet(given);

    expect(get).toBe(want);
})

test.skip("greeting an Capital name JERRY gonna be HELLO, JERRY.", () => {
    const given = "JERRY";
    const want = "HELLO, JERRY.";

    const get = greet(given);

    expect(get).toBe(want);
})

test.skip("greeting two names in array like [Jill, Jane] gonna be Hello, Jill and Jane.", () => {
    const given = ["Jill", "Jane"];
    const want = "Hello, Jill and Jane.";

    const get = greet(given);

    expect(get).toBe(want);
})

test.skip("greeting three names in array Jill, Jane, John gonna be Hello, Jill, Jane and John.", () => {
    const given = ["Jill", "Jane", "John"];
    const want = "Hello, Jill, Jane and John.";

    const get = greet(given);

    expect(get).toBe(want);
})