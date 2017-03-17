/* description: Basic grammar that contains a nullable A nonterminal. */

%lex

%%
x                   return 'x';

/lex

%%

A
    : A x
    |
    ;