%{
    var returnObj = {
        numbers: [],
        strings: []
    };
%}

%lex

%%
[0-9]+                              return 'NUMBER'
[a-zA-Z0-9\-]+                      return 'STRING'
"request"                           return 'REQ'
"status"                            return 'STATUS'
"="                                 return '='
","                                 return ','
\n                                  return '\n'
<<EOF>>                             return '\n'

%%

/lex

%left ','
%left '='
%left '^^'

%%

prog
    : input
    { return returnObj; }
    ;

input
    :
    | input line
    ;

line
    : '\n'
    | collection '\n'
    ;

collection
    : record ',' record
    | record
    | info_str
    ;

record
    : STRING '=' NUMBER
    { returnObj[$1] =$3; }
    | STRING '=' STRING
    { returnObj[$1] =$3; }
    | STRING
    { returnObj.strings.push($1); }
    | NUMBER
    { returnObj.numbers.push(parseInt($1, 10)); }
    ;

info_str
    : req_str ',' status_str
    ;

status_str
    : STATUS '=' STRING
    { returnObj[$1] = $3;}
    ;

req_str
    : REQ '=' STRING
    { returnObj[$1] = $3;}
    ;

%%