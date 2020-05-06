interface Result{
    title: string;
}
interface Data{
    data: string;
    result: Result;
}

class Test {
    private data;
    constructor(str: Data) {
        this.data = str.data
    }
    log() {
        console.log(this.data)
    }
}

const test = new Test({
    data: 'gavinddddddddddd',
    result:{
        title: 'hhhh'
    }
})

test.log()