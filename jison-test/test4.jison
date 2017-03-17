%lex

DecimalDigit [0-9]
DecimalDigits [0-9]+
NonZeroDigit [1-9]
OctalDigit [0-7]
HexDigit [0-9a-fA-F]
IdentifierStart [$_a-zA-Z]|("\\"[u]{HexDigit}{4})
IdentifierPart {IdentifierStart}|[0-9]
Identifier {IdentifierStart}{IdentifierPart}*
ExponentIndicator [eE]
SignedInteger [+-]?[0-9]+
DecimalIntegerLiteral [0]|({NonZeroDigit}{DecimalDigits}*)
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalLiteral ({DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)|(\.{DecimalDigits}{ExponentPart}?)|({DecimalIntegerLiteral}{ExponentPart}?)
LineContinuation \\(\r\n|\r|\n)
OctalEscapeSequence (?:[1-7][0-7]{0,2}|[0-7]{2,3})
HexEscapeSequence [x]{HexDigit}{2}
UnicodeEscapeSequence [u]{HexDigit}{4}
SingleEscapeCharacter [\'\"\\bfnrtv]
NonEscapeCharacter [^\'\"\\bfnrtv0-9xu]
CharacterEscapeSequence {SingleEscapeCharacter}|{NonEscapeCharacter}
EscapeSequence {CharacterEscapeSequence}|{OctalEscapeSequence}|{HexEscapeSequence}|{UnicodeEscapeSequence}
DoubleStringCharacter ([^\"\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
SingleStringCharacter ([^\'\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
StringLiteral (\"{DoubleStringCharacter}*\")|(\'{SingleStringCharacter}*\')
RegularExpressionNonTerminator [^\n\r]
RegularExpressionBackslashSequence \\{RegularExpressionNonTerminator}
RegularExpressionClassChar [^\n\r\]\\]|{RegularExpressionBackslashSequence}
RegularExpressionClass \[{RegularExpressionClassChar}*\]
RegularExpressionFlags {IdentifierPart}*
RegularExpressionFirstChar ([^\n\r\*\\\/\[])|{RegularExpressionBackslashSequence}|{RegularExpressionClass}
RegularExpressionChar ([^\n\r\\\/\[])|{RegularExpressionBackslashSequence}|{RegularExpressionClass}
RegularExpressionBody {RegularExpressionFirstChar}{RegularExpressionChar}*
RegularExpressionLiteral {RegularExpressionBody}\/{RegularExpressionFlags}

%x REGEXP
%options flex
%%
<REGEXP>{RegularExpressionLiteral} %{
                                        this.begin("INITIAL");
                                        return "REGEXP_LITERAL";
                                   %}
(\r\n|\r|\n)+\s*"++"               return "BR++"; /* Handle restricted postfix production */
(\r\n|\r|\n)+\s*"--"               return "BR--"; /* Handle restricted postfix production */
\s+                                %{
                                        if (yytext.match(/\r|\n/)) {
                                            parser.newLine = true;
                                        }

                                        if (parser.restricted && parser.newLine) {
                                            this.unput(yytext);
                                            parser.restricted = false;
                                            return ";";
                                        }
                                   %}
"/*"(.|\r|\n)*?"*/"                %{
                                        if (yytext.match(/\r|\n/)) {
                                            parser.newLine = true;
                                        }

                                        if (parser.restricted && parser.newLine) {
                                            this.unput(yytext);
                                            parser.restricted = false;
                                            return ";";
                                        }
                                   %}
"//".*($|\r\n|\r|\n)               %{
                                        if (yytext.match(/\r|\n/)) {
                                            parser.newLine = true;
                                        }

                                        if (parser.restricted && parser.newLine) {
                                            this.unput(yytext);
                                            parser.restricted = false;
                                            return ";";
                                        }
                                   %}
{StringLiteral}                    parser.restricted = false; return "STRING_LITERAL";
"break"                            parser.restricted = true; return "BREAK";
"case"                             return "CASE";
"catch"                            return "CATCH";
"continue"                         parser.restricted = true; return "CONTINUE";
"debugger"                         return "DEBUGGER";
"default"                          return "DEFAULT";
"delete"                           return "DELETE";
"do"                               return "DO";
"else"                             return "ELSE";
"finally"                          return "FINALLY";
"for"                              return "FOR";
"function"                         return "FUNCTION";
"if"                               return "IF";
"in"                               return "IN";
"instanceof"                       return "INSTANCEOF";
"new"                              parser.restricted = false; return "NEW";
"return"                           parser.restricted = true; return "RETURN";
"switch"                           return "SWITCH";
"this"                             parser.restricted = false; return "THIS";
"throw"                            parser.restricted = true; return "THROW";
"try"                              return "TRY";
"typeof"                           parser.restricted = false; return "TYPEOF";
"var"                              return "VAR";
"void"                             parser.restricted = false; return "VOID";
"while"                            return "WHILE";
"with"                             return "WITH";
"true"                             parser.restricted = false; return "TRUE";
"false"                            parser.restricted = false; return "FALSE";
"null"                             parser.restricted = false; return "NULL";
"class"                            return "CLASS";
"const"                            return "CONST";
"enum"                             return "ENUM";
"export"                           return "EXPORT";
"extends"                          return "EXTENDS";
"import"                           return "IMPORT";
"super"                            return "SUPER";
{Identifier}                       parser.restricted = false; return "IDENTIFIER";
{DecimalLiteral}                   parser.restricted = false; return "NUMERIC_LITERAL";
{HexIntegerLiteral}                parser.restricted = false; return "NUMERIC_LITERAL";
{OctalIntegerLiteral}              parser.restricted = false; return "NUMERIC_LITERAL";
"{"                                parser.restricted = false; return "{";
"}"                                return "}";
"("                                parser.restricted = false; return "(";
")"                                return ")";
"["                                parser.restricted = false; return "[";
"]"                                return "]";
"."                                return ".";
";"                                parser.restricted = false; return ";";
","                                return ",";
"?"                                return "?";
":"                                return ":";
"==="                              return "===";
"=="                               return "==";
"="                                return "=";
"!=="                              return "!==";
"!="                               return "!=";
"!"                                parser.restricted = false; return "!";
"<<="                              return "<<=";
"<<"                               return "<<";
"<="                               return "<=";
"<"                                return "<";
">>>="                             return ">>>=";
">>>"                              return ">>>";
">>="                              return ">>=";
">>"                               return ">>";
">="                               return ">=";
">"                                return ">";
"+="                               return "+=";
"++"                               parser.restricted = false; return "++";
"+"                                return "+";
"-="                               return "-=";
"--"                               parser.restricted = false; return "--";
"-"                                return "-";
"*="                               return "*=";
"*"                                return "*";
"/="                               return "/=";
"/"                                return "/";
"%="                               return "%=";
"%"                                return "%";
"&&"                               return "&&";
"&="                               return "&=";
"&"                                return "&";
"||"                               return "||";
"|="                               return "|=";
"|"                                return "|";
"^="                               return "^=";
"^"                                return "^";
"~"                                parser.restricted = false; return "~";
<<EOF>>                            return "EOF";
.                                  return "ERROR";

%%

/* Begin Lexer Customization Methods */
var _originalLexMethod = lexer.lex;

lexer.lex = function() {
	parser.wasNewLine = parser.newLine;
	parser.newLine = false;

	return _originalLexMethod.call(this);
};
/* End Lexer Customization Methods */

/lex

%start Program /* Define Start Production */
%% /* Define Grammar Productions */

Program
    : SourceElements EOF
        {
            $$ = new ProgramNode($1, createSourceLocation(null, @1, @2));
            return $$;
        }
    ;

Statement
    : Block
    | VariableStatement
    | EmptyStatement
    | ExpressionStatement
    | IfStatement
    | IterationStatement
    | ContinueStatement
    | BreakStatement
    | ReturnStatement
    | WithStatement
    | LabelledStatement
    | SwitchStatement
    | ThrowStatement
    | TryStatement
    | DebuggerStatement
    ;

Block
    : "{" StatementList "}"
        {
            $$ = new BlockStatementNode($2, createSourceLocation(null, @1, @3));
        }
    ;

StatementList
    : StatementList Statement
        {
            $$ = $1.concat($2);
        }
    |
        {
            $$ = [];
        }
    ;

VariableStatement
    : "VAR" VariableDeclarationList
        {
            $$ = new VariableDeclarationNode($2, "var", createSourceLocation(null, @1, @2));
        }
    ;

VariableDeclarationList
    : VariableDeclaration
        {
            $$ = [$1];
        }
    | VariableDeclarationList "," VariableDeclaration
        {
            $$ = $1.concat($3);
        }
    ;

VariableDeclarationListNoIn
    : VariableDeclarationNoIn
        {
            $$ = [$1];
        }
    | VariableDeclarationListNoIn "," VariableDeclarationNoIn
        {
            $$ = $1.concat($3);
        }
    ;

VariableDeclaration
    : "IDENTIFIER"
        {
            $$ = new VariableDeclaratorNode(new IdentifierNode($1, createSourceLocation(null, @1, @1)), null, createSourceLocation(null, @1, @1));
        }
    | "IDENTIFIER" Initialiser
        {
            $$ = new VariableDeclaratorNode(new IdentifierNode($1, createSourceLocation(null, @1, @1)), $2, createSourceLocation(null, @1, @2));
        }
    ;

VariableDeclarationNoIn
    : "IDENTIFIER"
        {
            $$ = new VariableDeclaratorNode(new IdentifierNode($1, createSourceLocation(null, @1, @1)), null, createSourceLocation(null, @1, @1));
        }
    | "IDENTIFIER" InitialiserNoIn
        {
            $$ = new VariableDeclaratorNode(new IdentifierNode($1, createSourceLocation(null, @1, @1)), $2, createSourceLocation(null, @1, @2));
        }
    ;

Initialiser
    : "=" AssignmentExpression
        {
            $$ = $2;
        }
    ;

InitialiserNoIn
    : "=" AssignmentExpressionNoIn
        {
            $$ = $2;
        }
    ;

EmptyStatement
    : ";"
        {
            $$ = new EmptyStatementNode(createSourceLocation(null, @1, @1));
        }
    ;

ExpressionStatement
    : ExpressionNoBF ";"
        {
            $$ = new ExpressionStatementNode($1, createSourceLocation(null, @1, @2));
        }
    | ExpressionNoBF error
        {
            $$ = new ExpressionStatementNode($1, createSourceLocation(null, @1, @1));
        }
    ;

IfStatement
    : "IF" "(" Expression ")" Statement
        {
            $$ = new IfStatementNode($3, $5, null, createSourceLocation(null, @1, @5));
        }
    | "IF" "(" Expression ")" Statement "ELSE" Statement
        {
            $$ = new IfStatementNode($3, $5, $7, createSourceLocation(null, @1, @7));
        }
    ;

IterationStatement
    : "DO" Statement "WHILE" "(" Expression ")" ";"
        {
            $$ = new DoWhileStatementNode($2, $5, createSourceLocation(null, @1, @7));
        }
    | "DO" Statement "WHILE" "(" Expression ")" error
        {
            $$ = new DoWhileStatementNode($2, $5, createSourceLocation(null, @1, @6));
        }
    | "WHILE" "(" Expression ")" Statement
        {
            $$ = new WhileStatementNode($3, $5, createSourceLocation(null, @1, @5));
        }
    | "FOR" "(" ExpressionNoIn ";" Expression ";" Expression ")" Statement
        {
            $$ = new ForStatementNode($3, $5, $7, $9, createSourceLocation(null, @1, @9));
        }
    | "FOR" "(" ExpressionNoIn ";" Expression ";" ")" Statement
        {
            $$ = new ForStatementNode($3, $5, null, $8, createSourceLocation(null, @1, @8));
        }
    | "FOR" "(" ExpressionNoIn ";" ";" Expression ")" Statement
        {
            $$ = new ForStatementNode($3, null, $6, $8, createSourceLocation(null, @1, @8));
        }
    | "FOR" "(" ExpressionNoIn ";" ";" ")" Statement
        {
            $$ = new ForStatementNode($3, null, null, $7, createSourceLocation(null, @1, @7));
        }
    | "FOR" "(" ";" Expression ";" Expression ")" Statement
        {
            $$ = new ForStatementNode(null, $4, $6, $8, createSourceLocation(null, @1, @8));
        }
    | "FOR" "(" ";" Expression ";" ")" Statement
        {
            $$ = new ForStatementNode(null, $4, null, $7, createSourceLocation(null, @1, @7));
        }
    | "FOR" "(" ";" ";" Expression ")" Statement
        {
            $$ = new ForStatementNode(null, null, $5, $7, createSourceLocation(null, @1, @7));
        }
    | "FOR" "(" ";" ";" ")" Statement
        {
            $$ = new ForStatementNode(null, null, null, $6, createSourceLocation(null, @1, @6));
        }
    | "FOR" "(" "VAR" VariableDeclarationListNoIn ";" Expression ";" Expression ")" Statement
        {
            $$ = new ForStatementNode($4, $6, $8, $10, createSourceLocation(null, @1, @10));
        }
    | "FOR" "(" "VAR" VariableDeclarationListNoIn ";" Expression ";" ")" Statement
        {
            $$ = new ForStatementNode($4, $6, null, $9, createSourceLocation(null, @1, @9));
        }
    | "FOR" "(" "VAR" VariableDeclarationListNoIn ";" ";" Expression ")" Statement
        {
            $$ = new ForStatementNode($4, null, $7, $9, createSourceLocation(null, @1, @9));
        }
    | "FOR" "(" "VAR" VariableDeclarationListNoIn ";" ";" ")" Statement
        {
            $$ = new ForStatementNode($4, null, null, $8, createSourceLocation(null, @1, @8));
        }
    | "FOR" "(" LeftHandSideExpression "IN" Expression ")" Statement
        {
            $$ = new ForInStatementNode($3, $5, $7, createSourceLocation(null, @1, @7));
        }
    | "FOR" "(" "VAR" VariableDeclarationNoIn "IN" Expression ")" Statement
        {
            $$ = new ForInStatementNode($4, $6, $8, createSourceLocation(null, @1, @8));
        }
    ;

ContinueStatement
    : "CONTINUE" ";"
        {
            $$ = new ContinueStatementNode(null, createSourceLocation(null, @1, @2));
        }
    | "CONTINUE" error
        {
            $$ = new ContinueStatementNode(null, createSourceLocation(null, @1, @1));
        }
    | "CONTINUE" "IDENTIFIER" ";"
        {
            $$ = new ContinueStatementNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), createSourceLocation(null, @1, @3));
        }
    | "CONTINUE" "IDENTIFIER" error
        {
            $$ = new ContinueStatementNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), createSourceLocation(null, @1, @2));
        }
    ;

BreakStatement
    : "BREAK" ";"
        {
            $$ = new BreakStatementNode(null, createSourceLocation(null, @1, @2));
        }
    | "BREAK" error
        {
            $$ = new BreakStatementNode(null, createSourceLocation(null, @1, @1));
        }
    | "BREAK" "IDENTIFIER" ";"
        {
            $$ = new BreakStatementNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), createSourceLocation(null, @1, @3));
        }
    | "BREAK" "IDENTIFIER" error
        {
            $$ = new BreakStatementNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), createSourceLocation(null, @1, @2));
        }
    ;

ReturnStatement
    : "RETURN" ";"
        {
            $$ = new ReturnStatementNode(null, createSourceLocation(null, @1, @2));
        }
    | "RETURN" error
        {
            $$ = new ReturnStatementNode(null, createSourceLocation(null, @1, @1));
        }
    | "RETURN" Expression ";"
        {
            $$ = new ReturnStatementNode($2, createSourceLocation(null, @1, @3));
        }
    | "RETURN" Expression error
        {
            $$ = new ReturnStatementNode($2, createSourceLocation(null, @1, @2));
        }
    ;

WithStatement
    : "WITH" "(" Expression ")" Statement
        {
            $$ = new WithStatementNode($3, $5, createSourceLocation(null, @1, @5));
        }
    ;

SwitchStatement
    : "SWITCH" "(" Expression ")" CaseBlock
        {
            $$ = new SwitchStatementNode($3, $5, createSourceLocation(null, @1, @5));
        }
    ;

CaseBlock
    : "{" CaseClauses "}"
        {
            $$ = $2;
        }
    | "{" CaseClauses DefaultClause CaseClauses "}"
        {
            $$ = $2.concat($3).concat($4);
        }
    ;

CaseClauses
    : CaseClauses CaseClause
        {
            $$ = $1.concat($2);
        }
    |
        {
            $$ = [];
        }
    ;

CaseClause
    : "CASE" Expression ":" StatementList
        {
            $$ = new SwitchCaseNode($2, $4, createSourceLocation(null, @1, @4));
        }
    ;

DefaultClause
    : "DEFAULT" ":" StatementList
        {
            $$ = new SwitchCaseNode(null, $3, createSourceLocation(null, @1, @3));
        }
    ;

LabelledStatement
    : "IDENTIFIER" ":" Statement
        {
            $$ = new LabeledStatementNode(new IdentifierNode($1, createSourceLocation(null, @1, @1)), $3, createSourceLocation(null, @1, @3));
        }
    ;

ThrowStatement
    : "THROW" Expression ";"
        {
            $$ = new ThrowStatementNode($2, createSourceLocation(null, @1, @3));
        }
    | "THROW" Expression error
        {
            $$ = new ThrowStatementNode($2, createSourceLocation(null, @1, @2));
        }
    ;

TryStatement
    : "TRY" Block Catch
        {
            $$ = new TryStatementNode($2, $3, null, createSourceLocation(null, @1, @3));
        }
    | "TRY" Block Finally
        {
            $$ = new TryStatementNode($2, null, $3, createSourceLocation(null, @1, @3));
        }
    | "TRY" Block Catch Finally
        {
            $$ = new TryStatementNode($2, $3, $4, createSourceLocation(null, @1, @4));
        }
    ;

Catch
    : "CATCH" "(" "IDENTIFIER" ")" Block
        {
            $$ = new CatchClauseNode(new IdentifierNode($3, createSourceLocation(null, @3, @3)), $5, createSourceLocation(null, @1, @5));
        }
    ;

Finally
    : "FINALLY" Block
        {
            $$ = $2;
        }
    ;

DebuggerStatement
    : "DEBUGGER" ";"
        {
            $$ = new DebugggerStatementNode(createSourceLocation(null, @1, @2));
        }
    | "DEBUGGER" error
        {
            $$ = new DebugggerStatementNode(createSourceLocation(null, @1, @1));
        }
    ;

FunctionDeclaration
    : "FUNCTION" "IDENTIFIER" "(" ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionDeclarationNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), [], $6, false, false, createSourceLocation(null, @1, @7));
        }
    | "FUNCTION" "IDENTIFIER" "(" FormalParameterList ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionDeclarationNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), $4, $7, false, false, createSourceLocation(null, @1, @8));
        }
    ;

FunctionExpression
    : "FUNCTION" "IDENTIFIER" "(" ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionExpressionNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), [], $6, false, false, createSourceLocation(null, @1, @7));
        }
    | "FUNCTION" "IDENTIFIER" "(" FormalParameterList ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionExpressionNode(new IdentifierNode($2, createSourceLocation(null, @2, @2)), $4, $7, false, false, createSourceLocation(null, @1, @8));
        }
    | "FUNCTION" "(" ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionExpressionNode(null, [], $5, false, false, createSourceLocation(null, @1, @6));
        }
    | "FUNCTION" "(" FormalParameterList ")" "{" FunctionBody "}"
        {
	    $$ = new FunctionExpressionNode(null, $3, $6, false, false, createSourceLocation(null, @1, @7));
        }
    ;

FormalParameterList
    : "IDENTIFIER"
        {
            $$ = [new IdentifierNode($1, createSourceLocation(null, @1, @1))];
        }
    | FormalParameterList "," "IDENTIFIER"
        {
            $$ = $1.concat(new IdentifierNode($3, createSourceLocation(null, @3, @3)));
        }
    ;

FunctionBody
    : SourceElements
    ;

Program
    : SourceElements EOF
        {
            $$ = new ProgramNode($1, createSourceLocation(null, @1, @2));
            return $$;
        }
    ;

SourceElements
    : SourceElements SourceElement
        {
            $$ = $1.concat($2);
        }
    |
        {
            $$ = [];
        }
    ;

SourceElement
    : Statement
    | FunctionDeclaration
    ;

PrimaryExpression
    : PrimaryExpressionNoBrace
    | ObjectLiteral
    ;

PrimaryExpressionNoBrace
    : "THIS"
        {
            $$ = new ThisExpressionNode(createSourceLocation(null, @1, @1));
        }
    | "IDENTIFIER"
        {
            $$ = new IdentifierNode($1, createSourceLocation(null, @1, @1));
        }
    | Literal
    | ArrayLiteral
    | "(" Expression ")"
        {
            $$ = $2;
        }
    ;

ArrayLiteral
    : "[" "]"
        {
            $$ = new ArrayExpressionNode([], createSourceLocation(null, @1, @2));
        }
    | "[" Elision "]"
        {
            $$ = new ArrayExpressionNode($2, createSourceLocation(null, @1, @3));
        }
    | "[" ElementList "]"
        {
            $$ = new ArrayExpressionNode($2, createSourceLocation(null, @1, @3));
        }
    | "[" ElementList "," "]"
        {
            $$ = new ArrayExpressionNode($2.concat(null), createSourceLocation(null, @1, @4));
        }
    | "[" ElementList "," Elision "]"
        {
            $$ = new ArrayExpressionNode($2.concat($4), createSourceLocation(null, @1, @5));
        }
    ;

ElementList
    : AssignmentExpression
        {
            $$ = [$1];
        }
    | Elision AssignmentExpression
        {
            $$ = $1.concat($2);
        }
    | ElementList "," AssignmentExpression
        {
            $$ = $1.concat($3);
        }
    | ElementList "," Elision AssignmentExpression
        {
            $$ = $1.concat($3).concat($4);
        }
    ;

Elision
    : ","
        {
            $$ = [null, null];
        }
    | Elision ","
        {
            $$ = $1.concat(null);
        }
    ;

ObjectLiteral
    : "{" "}"
        {
            $$ = new ObjectExpressionNode([], createSourceLocation(null, @1, @2));
        }
    | "{" PropertyNameAndValueList "}"
        {
            $$ = new ObjectExpressionNode($2, createSourceLocation(null, @1, @3));
        }
    | "{" PropertyNameAndValueList "," "}"
        {
            $$ = new ObjectExpressionNode($2, createSourceLocation(null, @1, @4));
        }
    ;

PropertyNameAndValueList
    : PropertyAssignment
        {
            $$ = [$1];
        }
    | PropertyNameAndValueList "," PropertyAssignment
        {
            $$ = $1.concat($3);
        }
    ;

PropertyAssignment
    : PropertyName ":" AssignmentExpression
        {
            $$ = {key: $1, value: $3, kind: "init"};
        }
    | "IDENTIFIER" PropertyName "(" ")" "{" FunctionBody "}"
        {
            if ($1 === "get") {
                $$ = {key: $2, value: (new FunctionExpressionNode(null, [], $6, false, false, createSourceLocation(null, @2, @7))), kind: "get"};
            } else {
                this.parseError("Invalid getter", {});
            }
        }
    | "IDENTIFIER" PropertyName "(" PropertySetParameterList ")" "{" FunctionBody "}"
        {
            if ($1 === "set") {
                $$ = {key: $2, value: (new FunctionExpressionNode(null, $4, $7, false, false, createSourceLocation(null, @2, @8))), kind: "set"};
            } else {
                this.parseError("Invalid setter", {});
            }
        }
    ;

PropertyName
    : IdentifierName
    | StringLiteral
    | NumericLiteral
    ;

PropertySetParameterList
    : "IDENTIFIER"
        {
            $$ = [new IdentifierNode($1, createSourceLocation(null, @1, @1))];
        }
    ;

MemberExpression
    : PrimaryExpression
    | FunctionExpression
    | MemberExpression "[" Expression "]"
        {
            $$ = new MemberExpressionNode($1, $3, true, createSourceLocation(null, @1, @4));
        }
    | MemberExpression "." IdentifierName
        {
            $$ = new MemberExpressionNode($1, $3, false, createSourceLocation(null, @1, @3));
        }
    | "NEW" MemberExpression Arguments
        {
            $$ = new NewExpressionNode($2, $3, createSourceLocation(null, @1, @3));
        }
    ;

MemberExpressionNoBF
    : PrimaryExpressionNoBrace
    | MemberExpressionNoBF "[" Expression "]"
        {
            $$ = new MemberExpressionNode($1, $3, true, createSourceLocation(null, @1, @4));
        }
    | MemberExpressionNoBF "." IdentifierName
        {
            $$ = new MemberExpressionNode($1, $3, false, createSourceLocation(null, @1, @3));
        }
    | "NEW" MemberExpression Arguments
        {
            $$ = new NewExpressionNode($2, $3, createSourceLocation(null, @1, @3));
        }
    ;

NewExpression
    : MemberExpression
    | "NEW" NewExpression
        {
            $$ = new NewExpressionNode($2, null, createSourceLocation(null, @1, @2));
        }
    ;

NewExpressionNoBF
    : MemberExpressionNoBF
    | "NEW" NewExpression
        {
            $$ = new NewExpressionNode($2, null, createSourceLocation(null, @1, @2));
        }
    ;

CallExpression
    : MemberExpression Arguments
        {
            $$ = new CallExpressionNode($1, $2, createSourceLocation(null, @1, @2));
        }
    | CallExpression Arguments
        {
            $$ = new CallExpressionNode($1, $2, createSourceLocation(null, @1, @2));
        }
    | CallExpression "[" Expression "]"
        {
            $$ = new MemberExpressionNode($1, $3, true, createSourceLocation(null, @1, @4));
        }
    | CallExpression "." IdentifierName
        {
            $$ = new MemberExpressionNode($1, $3, false, createSourceLocation(null, @1, @3));
        }
    ;

CallExpressionNoBF
    : MemberExpressionNoBF Arguments
        {
            $$ = new CallExpressionNode($1, $2, createSourceLocation(null, @1, @2));
        }
    | CallExpressionNoBF Arguments
        {
            $$ = new CallExpressionNode($1, $2, createSourceLocation(null, @1, @2));
        }
    | CallExpressionNoBF "[" Expression "]"
        {
            $$ = new MemberExpressionNode($1, $3, true, createSourceLocation(null, @1, @4));
        }
    | CallExpressionNoBF "." IdentifierName
        {
            $$ = new MemberExpressionNode($1, $3, false, createSourceLocation(null, @1, @3));
        }
    ;

IdentifierName
    : "IDENTIFIER"
        {
            $$ = new IdentifierNode($1, createSourceLocation(null, @1, @1));
        }
    | ReservedWord
        {
            $$ = new IdentifierNode($1, createSourceLocation(null, @1, @1));
        }
    ;

Arguments
    : "(" ")"
        {
            $$ = [];
        }
    | "(" ArgumentList ")"
        {
            $$ = $2;
        }
    ;

ArgumentList
    : AssignmentExpression
        {
            $$ = [$1];
        }
    | ArgumentList "," AssignmentExpression
        {
            $$ = $1.concat($3);
        }
    ;

LeftHandSideExpression
    : NewExpression
    | CallExpression
    ;

LeftHandSideExpressionNoBF
    : NewExpressionNoBF
    | CallExpressionNoBF
    ;

PostfixExpression
    : LeftHandSideExpression
    | LeftHandSideExpression "++"
        {
            $$ = new UpdateExpressionNode("++", $1, false, createSourceLocation(null, @1, @2));
        }
    | LeftHandSideExpression "--"
        {
            $$ = new UpdateExpressionNode("--", $1, false, createSourceLocation(null, @1, @2));
        }
    ;

PostfixExpressionNoBF
    : LeftHandSideExpressionNoBF
    | LeftHandSideExpressionNoBF "++"
        {
            $$ = new UpdateExpressionNode("++", $1, false, createSourceLocation(null, @1, @2));
        }
    | LeftHandSideExpressionNoBF "--"
        {
            $$ = new UpdateExpressionNode("--", $1, false, createSourceLocation(null, @1, @2));
        }
    ;

UnaryExpression
    : PostfixExpression
    | UnaryExpr
    ;

UnaryExpressionNoBF
    : PostfixExpressionNoBF
    | UnaryExpr
    ;

UnaryExpr
    : "DELETE" UnaryExpression
        {
            $$ = new UnaryExpressionNode("delete", true, $2, createSourceLocation(null, @1, @2));
        }
    | "VOID" UnaryExpression
        {
            $$ = new UnaryExpressionNode("void", true, $2, createSourceLocation(null, @1, @2));
        }
    | "TYPEOF" UnaryExpression
        {
            $$ = new UnaryExpressionNode("typeof", true, $2, createSourceLocation(null, @1, @2));
        }
    | "BR++" UnaryExpression
        {
            @1.first_line = @1.last_line;
            @1.first_column = @1.last_column - 2;
            $$ = new UpdateExpressionNode("++", $2, true, createSourceLocation(null, @1, @2));
        }
    | "BR--" UnaryExpression
        {
            @1.first_line = @1.last_line;
            @1.first_column = @1.last_column - 2;
            $$ = new UpdateExpressionNode("--", $2, true, createSourceLocation(null, @1, @2));
        }
    | "++" UnaryExpression
        {
            $$ = new UpdateExpressionNode("++", $2, true, createSourceLocation(null, @1, @2));
        }
    | "--" UnaryExpression
        {
            $$ = new UpdateExpressionNode("--", $2, true, createSourceLocation(null, @1, @2));
        }
    | "+" UnaryExpression
        {
            $$ = new UnaryExpressionNode("+", true, $2, createSourceLocation(null, @1, @2));
        }
    | "-" UnaryExpression
        {
            $$ = new UnaryExpressionNode("-", true, $2, createSourceLocation(null, @1, @2));
        }
    | "~" UnaryExpression
        {
            $$ = new UnaryExpressionNode("~", true, $2, createSourceLocation(null, @1, @2));
        }
    | "!" UnaryExpression
        {
            $$ = new UnaryExpressionNode("!", true, $2, createSourceLocation(null, @1, @2));
        }
    ;

MultiplicativeExpression
    : UnaryExpression
    | MultiplicativeExpression "*" UnaryExpression
        {
            $$ = new BinaryExpressionNode("*", $1, $3, createSourceLocation(null, @1, @3));
        }
    | MultiplicativeExpression "/" UnaryExpression
        {
            $$ = new BinaryExpressionNode("/", $1, $3, createSourceLocation(null, @1, @3));
        }
    | MultiplicativeExpression "%" UnaryExpression
        {
            $$ = new BinaryExpressionNode("%", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

MultiplicativeExpressionNoBF
    : UnaryExpressionNoBF
    | MultiplicativeExpressionNoBF "*" UnaryExpression
        {
            $$ = new BinaryExpressionNode("*", $1, $3, createSourceLocation(null, @1, @3));
        }
    | MultiplicativeExpressionNoBF "/" UnaryExpression
        {
            $$ = new BinaryExpressionNode("/", $1, $3, createSourceLocation(null, @1, @3));
        }
    | MultiplicativeExpressionNoBF "%" UnaryExpression
        {
            $$ = new BinaryExpressionNode("%", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

AdditiveExpression
    : MultiplicativeExpression
    | AdditiveExpression "+" MultiplicativeExpression
        {
            $$ = new BinaryExpressionNode("+", $1, $3, createSourceLocation(null, @1, @3));
        }
    | AdditiveExpression "-" MultiplicativeExpression
        {
            $$ = new BinaryExpressionNode("-", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

AdditiveExpressionNoBF
    : MultiplicativeExpressionNoBF
    | AdditiveExpressionNoBF "+" MultiplicativeExpression
        {
            $$ = new BinaryExpressionNode("+", $1, $3, createSourceLocation(null, @1, @3));
        }
    | AdditiveExpressionNoBF "-" MultiplicativeExpression
        {
            $$ = new BinaryExpressionNode("-", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

ShiftExpression
    : AdditiveExpression
    | ShiftExpression "<<" AdditiveExpression
        {
            $$ = new BinaryExpressionNode("<<", $1, $3, createSourceLocation(null, @1, @3));
        }
    | ShiftExpression ">>" AdditiveExpression
        {
            $$ = new BinaryExpressionNode(">>", $1, $3, createSourceLocation(null, @1, @3));
        }
    | ShiftExpression ">>>" AdditiveExpression
        {
            $$ = new BinaryExpressionNode(">>>", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

ShiftExpressionNoBF
    : AdditiveExpressionNoBF
    | ShiftExpressionNoBF "<<" AdditiveExpression
        {
            $$ = new BinaryExpressionNode("<<", $1, $3, createSourceLocation(null, @1, @3));
        }
    | ShiftExpressionNoBF ">>" AdditiveExpression
        {
            $$ = new BinaryExpressionNode(">>", $1, $3, createSourceLocation(null, @1, @3));
        }
    | ShiftExpressionNoBF ">>>" AdditiveExpression
        {
            $$ = new BinaryExpressionNode(">>>", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

RelationalExpression
    : ShiftExpression
    | RelationalExpression "<" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpression ">" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpression "<=" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpression ">=" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpression "INSTANCEOF" ShiftExpression
        {
            $$ = new BinaryExpressionNode("instanceof", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpression "IN" ShiftExpression
        {
            $$ = new BinaryExpressionNode("in", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

RelationalExpressionNoIn
    : ShiftExpression
    | RelationalExpressionNoIn "<" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoIn ">" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoIn "<=" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoIn ">=" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoIn "INSTANCEOF" ShiftExpression
        {
            $$ = new BinaryExpressionNode("instanceof", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

RelationalExpressionNoBF
    : ShiftExpressionNoBF
    | RelationalExpressionNoBF "<" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoBF ">" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoBF "<=" ShiftExpression
        {
            $$ = new BinaryExpressionNode("<=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoBF ">=" ShiftExpression
        {
            $$ = new BinaryExpressionNode(">=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoBF "INSTANCEOF" ShiftExpression
        {
            $$ = new BinaryExpressionNode("instanceof", $1, $3, createSourceLocation(null, @1, @3));
        }
    | RelationalExpressionNoBF "IN" ShiftExpression
        {
            $$ = new BinaryExpressionNode("in", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

EqualityExpression
    : RelationalExpression
    | EqualityExpression "==" RelationalExpression
        {
            $$ = new BinaryExpressionNode("==", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpression "!=" RelationalExpression
        {
            $$ = new BinaryExpressionNode("!=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpression "===" RelationalExpression
        {
            $$ = new BinaryExpressionNode("===", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpression "!==" RelationalExpression
        {
            $$ = new BinaryExpressionNode("!==", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

EqualityExpressionNoIn
    : RelationalExpressionNoIn
    | EqualityExpressionNoIn "==" RelationalExpressionNoIn
        {
            $$ = new BinaryExpressionNode("==", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoIn "!=" RelationalExpressionNoIn
        {
            $$ = new BinaryExpressionNode("!=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoIn "===" RelationalExpressionNoIn
        {
            $$ = new BinaryExpressionNode("===", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoIn "!==" RelationalExpressionNoIn
        {
            $$ = new BinaryExpressionNode("!==", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

EqualityExpressionNoBF
    : RelationalExpressionNoBF
    | EqualityExpressionNoBF "==" RelationalExpression
        {
            $$ = new BinaryExpressionNode("==", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoBF "!=" RelationalExpression
        {
            $$ = new BinaryExpressionNode("!=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoBF "===" RelationalExpression
        {
            $$ = new BinaryExpressionNode("===", $1, $3, createSourceLocation(null, @1, @3));
        }
    | EqualityExpressionNoBF "!==" RelationalExpression
        {
            $$ = new BinaryExpressionNode("!==", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseANDExpression
    : EqualityExpression
    | BitwiseANDExpression "&" EqualityExpression
        {
            $$ = new BinaryExpressionNode("&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseANDExpressionNoIn
    : EqualityExpressionNoIn
    | BitwiseANDExpressionNoIn "&" EqualityExpressionNoIn
        {
            $$ = new BinaryExpressionNode("&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseANDExpressionNoBF
    : EqualityExpressionNoBF
    | BitwiseANDExpressionNoBF "&" EqualityExpression
        {
            $$ = new BinaryExpressionNode("&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseXORExpression
    : BitwiseANDExpression
    | BitwiseXORExpression "^" BitwiseANDExpression
        {
            $$ = new BinaryExpressionNode("^", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseXORExpressionNoIn
    : BitwiseANDExpressionNoIn
    | BitwiseXORExpressionNoIn "^" BitwiseANDExpressionNoIn
        {
            $$ = new BinaryExpressionNode("^", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseXORExpressionNoBF
    : BitwiseANDExpressionNoBF
    | BitwiseXORExpressionNoBF "^" BitwiseANDExpression
        {
            $$ = new BinaryExpressionNode("^", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseORExpression
    : BitwiseXORExpression
    | BitwiseORExpression "|" BitwiseXORExpression
        {
            $$ = new BinaryExpressionNode("|", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseORExpressionNoIn
    : BitwiseXORExpressionNoIn
    | BitwiseORExpressionNoIn "|" BitwiseXORExpressionNoIn
        {
            $$ = new BinaryExpressionNode("|", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

BitwiseORExpressionNoBF
    : BitwiseXORExpressionNoBF
    | BitwiseORExpressionNoBF "|" BitwiseXORExpression
        {
            $$ = new BinaryExpressionNode("|", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalANDExpression
    : BitwiseORExpression
    | LogicalANDExpression "&&" BitwiseORExpression
        {
            $$ = new LogicalExpressionNode("&&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalANDExpressionNoIn
    : BitwiseORExpressionNoIn
    | LogicalANDExpressionNoIn "&&" BitwiseORExpressionNoIn
        {
            $$ = new LogicalExpressionNode("&&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalANDExpressionNoBF
    : BitwiseORExpressionNoBF
    | LogicalANDExpressionNoBF "&&" BitwiseORExpression
        {
            $$ = new LogicalExpressionNode("&&", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalORExpression
    : LogicalANDExpression
    | LogicalORExpression "||" LogicalANDExpression
        {
            $$ = new LogicalExpressionNode("||", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalORExpressionNoIn
    : LogicalANDExpressionNoIn
    | LogicalORExpressionNoIn "||" LogicalANDExpressionNoIn
        {
            $$ = new LogicalExpressionNode("||", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

LogicalORExpressionNoBF
    : LogicalANDExpressionNoBF
    | LogicalORExpressionNoBF "||" LogicalANDExpression
        {
            $$ = new LogicalExpressionNode("||", $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

ConditionalExpression
    : LogicalORExpression
    | LogicalORExpression "?" AssignmentExpression ":" AssignmentExpression
        {
            $$ = new ConditionalExpressionNode($1, $3, $5, createSourceLocation(null, @1, @5));
        }
    ;

ConditionalExpressionNoIn
    : LogicalORExpressionNoIn
    | LogicalORExpressionNoIn "?" AssignmentExpression ":" AssignmentExpressionNoIn
        {
            $$ = new ConditionalExpressionNode($1, $3, $5, createSourceLocation(null, @1, @5));
        }
    ;

ConditionalExpressionNoBF
    : LogicalORExpressionNoBF
    | LogicalORExpressionNoBF "?" AssignmentExpression ":" AssignmentExpression
        {
            $$ = new ConditionalExpressionNode($1, $3, $5, createSourceLocation(null, @1, @5));
        }
    ;

AssignmentExpression
    : ConditionalExpression
    | LeftHandSideExpression "=" AssignmentExpression
        {
            $$ = new AssignmentExpressionNode("=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | LeftHandSideExpression AssignmentOperator AssignmentExpression
        {
            $$ = new AssignmentExpressionNode($2, $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

AssignmentExpressionNoIn
    : ConditionalExpressionNoIn
    | LeftHandSideExpression "=" AssignmentExpressionNoIn
        {
            $$ = new AssignmentExpressionNode("=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | LeftHandSideExpression AssignmentOperator AssignmentExpressionNoIn
        {
            $$ = new AssignmentExpressionNode($2, $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

AssignmentExpressionNoBF
    : ConditionalExpressionNoBF
    | LeftHandSideExpressionNoBF "=" AssignmentExpression
        {
            $$ = new AssignmentExpressionNode("=", $1, $3, createSourceLocation(null, @1, @3));
        }
    | LeftHandSideExpressionNoBF AssignmentOperator AssignmentExpression
        {
            $$ = new AssignmentExpressionNode($2, $1, $3, createSourceLocation(null, @1, @3));
        }
    ;

AssignmentOperator
    : "*="
    | "/="
    | "%="
    | "+="
    | "-="
    | "<<="
    | ">>="
    | ">>>="
    | "&="
    | "^="
    | "|="
    ;

Expression
    : AssignmentExpression
    | Expression "," AssignmentExpression
        {
            if ($1.type === "SequenceExpression") {
                $1.expressions.concat($3);
                $1.loc = createSourceLocation(null, @1, @3);
                $$ = $1;
            } else {
                $$ = new SequenceExpressionNode([$1, $3], createSourceLocation(null, @1, @3));
            }
        }
    ;

ExpressionNoIn
    : AssignmentExpressionNoIn
    | ExpressionNoIn "," AssignmentExpressionNoIn
        {
            if ($1.type === "SequenceExpression") {
                $1.expressions.concat($3);
                $1.loc = createSourceLocation(null, @1, @3);
                $$ = $1;
            } else {
                $$ = new SequenceExpressionNode([$1, $3], createSourceLocation(null, @1, @3));
            }
        }
    ;

ExpressionNoBF
    : AssignmentExpressionNoBF
    | ExpressionNoBF "," AssignmentExpression
        {
            if ($1.type === "SequenceExpression") {
                $1.expressions.concat($3);
                $1.loc = createSourceLocation(null, @1, @3);
                $$ = $1;
            } else {
                $$ = new SequenceExpressionNode([$1, $3], createSourceLocation(null, @1, @3));
            }
        }
    ;

Literal
    : NullLiteral
    | BooleanLiteral
    | NumericLiteral
    | StringLiteral
    | RegularExpressionLiteral
    ;

NullLiteral
    : "NULL"
        {
            $$ = new LiteralNode(null, createSourceLocation(null, @1, @1));
        }
    ;

BooleanLiteral
    : "TRUE"
        {
            $$ = new LiteralNode(true, createSourceLocation(null, @1, @1));
        }
    | "FALSE"
        {
            $$ = new LiteralNode(false, createSourceLocation(null, @1, @1));
        }
    ;

NumericLiteral
    : "NUMERIC_LITERAL"
        {
            $$ = new LiteralNode(parseNumericLiteral($1), createSourceLocation(null, @1, @1));
        }
    ;

StringLiteral
    : "STRING_LITERAL"
        {
            $$ = new LiteralNode($1, createSourceLocation(null, @1, @1));
        }
    ;

RegularExpressionLiteral
    : RegularExpressionLiteralBegin "REGEXP_LITERAL"
        {
            $$ = new LiteralNode(parseRegularExpressionLiteral($1 + $2), createSourceLocation(null, @1, @2));
        }
    ;

RegularExpressionLiteralBegin
    : "/"
        {
            yy.lexer.begin("REGEXP");
        }
    | "/="
        {
            yy.lexer.begin("REGEXP");
        }
    ;

ReservedWord
    : "BREAK"
    | "CASE"
    | "CATCH"
    | "CONTINUE"
    | "DEBUGGER"
    | "DEFAULT"
    | "DELETE"
    | "DO"
    | "ELSE"
    | "FINALLY"
    | "FOR"
    | "FUNCTION"
    | "IF"
    | "IN"
    | "INSTANCEOF"
    | "NEW"
    | "RETURN"
    | "SWITCH"
    | "THIS"
    | "THROW"
    | "TRY"
    | "TYPEOF"
    | "VAR"
    | "VOID"
    | "WHILE"
    | "WITH"
    | "TRUE"
    | "FALSE"
    | "NULL"
    | "CLASS"
    | "CONST"
    | "ENUM"
    | "EXPORT"
    | "EXTENDS"
    | "IMPORT"
    | "SUPER"
    ;

%%