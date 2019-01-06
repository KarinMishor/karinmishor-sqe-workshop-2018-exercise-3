import assert from 'assert';
import {parseCode,getParseData} from '../src/js/code-analyzer';



describe('check all types1',()=>{
    it('example3', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = 1 + x;\n'+
            'let b = a + y;\n'+
            'let c = 0;\n'+
            'while (a < z) {\n'+
            'c = a + b;\n'+
            'z = c * 2;\n'+
            '}\n'+
            'return z;\n'+
    '}' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    while (1 + x < z) {\n    }\n}\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example2', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = x + 1;\n'+ 'let b = a + y;\n'+
        'let c = 0;\n'+
        'if (b < z) {\n'+
            'c = c + 5;\n'+
            'return x + y + z + c;\n'+
        '} else if (b < z * 2) {\n'+
            'c = c + x + 5;\n'+
            'return x + y + z + c;\n'+
        '} else {\n'+ 'c = c + z + 5;\n'+
            'return x + y + z + c;\n'+ '}\n'+ ' }' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    if (x + 1 + y < z) {\n        return x + y + z + 0 + 5;\n    } else if (x + 1 + y < z * 2) {\n        return x + y + z + (0 + x) + 5;\n    } else {\n        return x + y + z + (0 + z) + 5;\n    }\n}\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('wrong', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('funct' );
        let recieve = getParseData(text,params);
        let ans='wrong input!';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example4', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'if (1 < z)\n'+
            'return x + y + z + 1};\n');
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    if (1 < z)\n        return x + y + z + 1;\n;\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example5', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+ '}');
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n}\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example5', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('let a = 1;\n' + ' a = 3;\n' +'function foo(x, y, z){\n'+ '}');
        let recieve = getParseData(text,params);
        let ans='let a = 1;\na = 3;\nfunction foo(x, y, z) {\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example2', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = x + 1;\n'+ 'let b = a + y;\n'+
            'let c;\n'+
            'if (b < z) {\n'+
            'let c = c + 5;\n'+
            'return x + y + z + c;\n'+
            '} else{\n'+
            'c = c + x + 5;\n'+
            'return x + y + z + c;\n'+
            '}\n'+ '}' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    if (x + 1 + y < z) {\n        return x + y + z + 0 + 5;\n    } else {\n        return x + y + z + (0 + x) + 5;\n    }\n';
        assert.deepEqual(ans, recieve);
    });
});
describe('check all types1',()=>{
    it('example12', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+ ' }' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example2', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = x + 1;\n'+ 'let b = a + y;\n'+
            'let c = 0;\n'+
            'if (b < z) {\n'+
            'c = c + 5;\n'+
            'return x + y + z + c;\n'+
            '} else if (b < z * 2) {\n'+
            'c = c + x + 5;\n'+
            'return x + y + z + c;\n'+
            '} \n'+ ' }' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    if (x + 1 + y < z) {\n        return x + y + z + 0 + 5;\n    } else if (x + 1 + y < z * 2) {\n        return x + y + z + (0 + x) + 5;\n    }\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example2', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = x + 1;\n'+ 'let b = a + y;\n'+
            'c = 1;\n'+
            'if (b < z) {\n'+
            'c = c + 5;\n'+
            'return x + y + z + c;\n'+
            '} else if (b < z * 2) {\n'+
            'c = c + x + 5;\n'+
            'return x + y + z + c;\n'+
            '} \n'+ ' }' );
        let recieve = getParseData(text,params);
        let ans='function foo(x, y, z) {\n    if (x + 1 + y < z) {\n        return x + y + z + 1 + 5;\n    } else if (x + 1 + y < z * 2) {\n        return x + y + z + (1 + x) + 5;\n    }\n';
        assert.deepEqual(ans, recieve);
    });
});

describe('check all types1',()=>{
    it('example2', ()=> {
        let params= 'x=1,y=2,z=3';
        let text = parseCode('function foo(x, y, z){\n'+
            'let a = x + 1;\n'+ 'let b = a + y;\n'+
            'let c = 0;\n'+
            'if (b < z) {\n'+
            'c = c + 5;\n'+
            'return x + y + z + c;\n'+
            '} else if (b < z * 2) {\n'+
            'c = c + x + 5;\n'+
            'return x + y + z + c;\n'+
            '} else if (b < z * 2) {\n'+ 'c = c + z + 5;\n'+
            'return x + y + z + c;\n'+ '}\n'+ ' }' );
        let recieve = getParseData(text,params);
        let ans='wrong input!';
        assert.deepEqual(ans, recieve);
    });
});

