%token STRING NUMBER { } [ ] , : TRUE FALSE NULL

%start JSONText
%%

JSONString
    : STRING
    ;

JSONNumber
    : NUMBER
    ;

JSONBooleanLiteral
    : TRUE
    | FALSE
    ;

JSONText
    : JSONValue
    ;

JSONValue
    : JSONNullLiteral
    | JSONBooleanLiteral
    | JSONString
    | JSONNumber
    | JSONObject
    | JSONArray
    ;

JSONObject
    : '{' '}'
    | '{' JSONMemberList '}'
    ;

JSONMember
    : JSONString ':' JSONValue
    ;

JSONMemberList
    : JSONMember
    | JSONMemberList ',' JSONMember
    ;

JSONArray
    : '[' ']'
    | '[' JSONElementList ']'
    ;

JSONElementList
    : JSONValue
    | JSONElementList ',' JSONValue
    ;