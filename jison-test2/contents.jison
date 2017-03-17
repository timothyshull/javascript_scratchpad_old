%{
    var returnObj = {
        strings: [],
        numbers: []
    };
%}

%lex

%%
"<"(.|\n)*?">"                      return 'TAG'
[a-zA-Z]+                           return 'STRING'
[0-9]+                              return 'NUMBER'
\n                                  return '\n'
"="                                 return '='
<<EOF>>                             return 'EOF'

var _originalLexMethod = lexer.lex;

lexer.lex = function() {
	parser.wasNewLine = parser.newLine;
	parser.newLine = false;

	return _originalLexMethod.call(this);
};

%%

/lex

%%

input
    : contents EOF
    { return returnObj.final = $1;}
    ;

contents
    : content
    | contents content
    ;

content
    : record
    ;

key_val
    : STRING '=' NUMBER
    { returnObj[$1] = $3;}
    ;

record
    : key_val '\n'
    | STRING '\n'
    { returnObj.strings.push($1);}
    | NUMBER '\n'
    { returnObj.numbers.push($1);}
    ;

%%

var _originalParseMethod = parser.parse;

parser.parse = function(source, args) {
	parser.wasNewLine = false;
	parser.newLine = false;
	parser.restricted = false;

	return _originalParseMethod.call(this, source);
};

parser.parseError = function(str, hash) {
//		alert(JSON.stringify(hash) + "\n\n\n" + parser.newLine + "\n" + parser.wasNewLine + "\n\n" + hash.expected.indexOf("';'"));
	if (!((hash.expected && hash.expected.indexOf("';'") >= 0) && (hash.token === "}" || hash.token === "EOF" || hash.token === "BR++" || hash.token === "BR--" || parser.newLine || parser.wasNewLine))) {
		throw new SyntaxError(str);
	}
};