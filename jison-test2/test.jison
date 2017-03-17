%lex

%%
x*                   return 'x';

/lex

%%

E
    : x
    { return $1; }
    ;