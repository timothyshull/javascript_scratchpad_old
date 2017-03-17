%token STRING NUMBER ID { } [ ] , : TRUE FALSE NULL

%start dsl_csv
%%

DSLKey
    : ID
    ;

DSLString
    : STRING
    ;

DSLNumber
    : NUMBER
    ;

JSONBooleanLiteral
    : TRUE
    | FALSE
    ;

JSONText
    : JSONValue
    ;

DSLValue
    : DSLNullLiteral
    | DSLBooleanLiteral
    | DSLString
    | DSLNumber
    | DSLObject
    | DSLArray
    ;

DSLObject
    : DSLKey ',' DSLMember
    | '{' JSONMemberList '}'
    ;


DSLMember
    : DSLKey '=' DSLValue


JSONMember
    : JSONString ':' JSONValue
    ;

DSLMemberList
    : DSLMember
    | DSLMemberList ',' DSLMember
    ;

DSLArray
    : DSLValue '^^' DSLValue
    | DSLArray '^^' DSLValue
    ;

JSONElementList
    : JSONValue
    | JSONElementList ',' JSONValue
    ;