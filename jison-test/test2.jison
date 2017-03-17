/* description: Parses words out of html, ignoring html in the parse, but returning it in the end */

/* lexical grammar */
%lex
%%
\s+                                 {/* skip whitespace */}
"<"(.|\n)*?">"						return 'TAG'
[a-zA-Z0-9]+						return 'WORD'
(.)								    return 'CHAR'
[\t\n\r\f]                          return 'WHITESPACE'
<<EOF>>								return 'EOF'


/lex

%start file

%% /* language grammar */

file
 : contents EOF
     {return $1;}
 ;

contents
 : content
	{$$ = $1;}
 | contents content
	{$$ =  $1 + $2;}
 ;

content
	: TAG
		{
			if (!yy.lexer.tagHandler) yy.lexer.tagHandler = function(tag) {return tag;};
			$$ = yy.lexer.tagHandler(yytext);
		}
	| WORD
		{
			if (!yy.lexer.wordHandler) yy.lexer.wordHandler = function(word) {return word;};
			$$ = yy.lexer.wordHandler(yytext);
		}
	| CHAR
		{
			if (!yy.lexer.charHandler) yy.lexer.charHandler = function(char) {return char;};
			$$ = yy.lexer.charHandler(yytext);
		}
	| WHITESPACE
    		{
    			if (!yy.lexer.whiteSpaceHandler) yy.lexer.whiteSpaceHandler = function(ws) {return ws;};
    			$$ = '';
    		}
 ;
