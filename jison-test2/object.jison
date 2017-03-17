%lex

%%

[0-9]+                              return 'NUMBER'
[a-zA-Z]+                           return 'STRING'
[\w]+                               return 'ID'
":"                                 return ':'
","                                 return ','
"="                                 return '='
"("                                 return '('
")"                                 return ')'


%%

/lex

%%

object
    : key ',' collection ':'
    ;

collection
    : key_value
    | collection ',' key_value
    ;

key_value
    : key '=' value
    ;

key
    : ID
    | STRING
    ;

value
    : STRING
    | NUMBER
    ;

%%