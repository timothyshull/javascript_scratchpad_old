%lex

digit [0-9]

%%
\s+                  /* skip whitespace */
x*                   return 'x';
{digit}*            return 'NUMBER';

/lex

%%

E
    : x
    { return $1; }
    ;