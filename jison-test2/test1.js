/*jslint node: true*/
'use strict';
var Jison = require("jison").Jison,
    RegExpLexer = require("jison-lex"),
    assert = require("assert"),
    lexData = {
        rules: [
            ["x", "return 'x';"],
            ["y", "return 'y';"]
        ]
    },
    grammar = {
        bnf: {
            "E": [["E x", "return 0"],
                ["E y", "return 1"],
                ""]
        }
    },
    parser = new Jison.Parser(grammar);

parser.lexer = new RegExpLexer(lexData);

console.dir(parser.parse('x'));
console.dir(parser.parse('y'));

assert.equal(parser.parse('x'), 0, "semantic action");
assert.equal(parser.parse('y'), 1, "semantic action");