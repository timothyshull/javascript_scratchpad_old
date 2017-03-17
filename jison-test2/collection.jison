%lex

id                                  [$_a-zA-Z][\w]+

%options flex
%%

{id}                                return 'ID'
[a-zA-Z]+                           return 'STRING'
[0-9]+                              return 'NUMBER'
","                                 return ','
"="                                 return '='

%%

/lex

%%

collection
    : key_value
    | key_value ',' collection
    { console.dir($1);
      console.dir($3);
    }
    ;

key_value
    : key '=' value
    ;

key
    : ID
    ;

value
    : STRING
    | ID
    | NUMBER
    ;

%%