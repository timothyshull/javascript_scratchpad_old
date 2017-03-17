/* \s+                           {}
(global|local|integer|float)  { return yytext; }
[a-zA-Z_]\w*                  { return 'id'; }
*/

%{
    var returnObj = {
        testVal: 10
    },
    counter = 0;
%}

/* lexical grammar */
%lex
InputRecord ([a-zA-Z0-9]+)\n|([a-zA-Z0-9]+)
InputSeparator "---"\n

%options flex
%%
\s+                                 {}
{InputSeparator}                    return 'SEP'
{InputRecord}                       return "RECORD";
(.)								    return 'CHAR'
<<EOF>>								return 'EOF'

/lex

%start file

%% /* language grammar */

file
 : contents EOF
     { returnObj.key = $1;
       return returnObj;}
 ;

contents
 : content
	{$$ = $1;}
 | contents content
	{$$ =  $1 + $2;}
 ;

content
    : SEP
        {
            $$ = '';
        }
	| RECORD
		{
			if (!yy.lexer.wordHandler) yy.lexer.wordHandler = function(word) {return word;};
			$$ = yy.lexer.wordHandler(yytext);
			returnObj[counter] = yytext;
			counter += 1;
		}
    | CHAR
        {
            if (!yy.lexer.charHandler) yy.lexer.charHandler = function(char) {return char;};
            $$ = '*';
        }
 ;