%lex

%options flex
%%

\s+                                 {/* skip whitespace */}
[a-zA-Z]+                           return 'STRING'
[0-9]+                              return 'NUMBER'
","                                 return ','

%%

/lex

%%

list
    : value
    |  list ',' value
    ;

value
    : STRING
    | NUMBER
    ;

%%