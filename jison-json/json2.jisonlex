digit [0-9]
esc \\\\
int [-]?(?:[0-9]|[1-9][0-9]+)
exp (?:[eE][-+]?[0-9]+)
frac (?:\\.[0-9]+)

%%
\s+                                                               /* skip whitespace */
[0-9]+("."[0-9]+)?\b                                              return 'NUMBER';
\"(?:{esc}[\"bfnrt/{esc}]|{esc}u[a-fA-F0-9]{4}|[^\"{esc}])*\"     yytext = yytext.substr(1,yyleng-2); return 'STRING';
"{"                                                               return '{';
"}"                                                               return '}';
"["                                                               return '[';
"]"                                                               return ']';
","                                                               return ',';
":"                                                               return ':';
"true"                                                            return 'TRUE';
"false"                                                           return 'FALSE';
"null"                                                            return 'NULL';