%{
    var returnArr = [];
%}

%lex

%%

[0-9]+                              return 'NUMBER'
[a-zA-Z0-9\-]+                      return 'STRING'
"^^"                                return '^^'

%%

/lex

%left '^^'

%%

prog
    : input
    { return returnArr; }
    ;

input
    :
    | array
    ;

array
    : two_d_array
    | array_elem '^^' array
    ;

two_d_array
    : array_elem '^^' array_elem
    ;

array_elem
    : NUMBER
    { returnArr.push(parseInt($1, 10)); }
    | STRING
    { returnArr.push($1); }
    ;

%%