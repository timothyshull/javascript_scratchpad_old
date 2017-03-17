/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"+"                   return '+'
<<EOF>>               return 'EOF'

/lex

/* operator associations and precedence */

%left '+'

%% /* language grammar */

expr
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : e '+' e
        {return $1 + ',' + $3;}
    | NUMBER
        {$$ = Number(yytext);}
    ;
