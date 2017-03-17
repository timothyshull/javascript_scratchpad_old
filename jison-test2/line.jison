%lex

%%
[a-zA-Z0-9]+                        return 'STRING'
[0-9]+                              return 'NUMBER'
\n                                  return '\n'
"="                                 return '='
<<EOF>>                             return '\n'

%%

/lex

%%

input
    :
    | input line
    ;

line
    : '\n'
    | record '\n'
    ;

record
    : STRING
    { console.dir($1);}
    | NUMBER
    { console.dir($1);}
    ;

%%