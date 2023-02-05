import React from "react";
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("bash", bash);
const syntaxTheme = dracula;

const CodeBlock: CodeComponent = ({ inline, children }) => {
  return (
    <SyntaxHighlighter
      language={"bash"}
      style={syntaxTheme}
      PreTag="pre"
      wrapLines={true}
      wrapLongLines={true}
      className="codeStyle"
      showLineNumbers={false}
      useInlineStyles={inline}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
