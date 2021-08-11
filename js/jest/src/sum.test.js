const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
})

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

function fetchData(callback) {
    const string = 'peanut butter';
    setTimeout(() => {
        callback(string);
    }, 2000)
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (err) {
            done(err)
        }
    }

    fetchData(callback)
})

function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter promise');
        }, 2000)
    })
}

test('the data is peanut butter promise', () => {
    return fetchDataPromise().then(data => {
        expect(data).toBe('peanut butter promise')
    })
})

test('the data is peanut butter resolves', () => {
    return expect(fetchDataPromise()).resolves.toBe('peanut butter promise')
})

test('the data is peanut butter async', async () => {
    const data = await fetchDataPromise();
    expect(data).toBe('peanut butter promise')
})

test('the data is peanut butter async resolves', async () => {
    await expect(fetchDataPromise()).resolves.toBe('peanut butter promise');
});