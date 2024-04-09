---
title: LaTeX Masterclass
position: 3
tags:
    - latex
keywords: 
    - learn latex
    - latex for beginners
    - getting started with latex
    - latex tutorial
    - latex guide
    - latex for dummies
    - latex for scientists
    - latex for researchers
image: ./img/what-is-latex.png
description: This article describes everything you need to know about LaTeX if you are writing a scientific paper, article, or book.
last_update:
  author: Federico Tartarini
---

## Introduction

<iframe width="100%" class="youtube-video" src="https://www.youtube.com/embed/CjuYkcA35dw?si=VRVIjEF-pjF5g-0B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### What is LaTeX

LaTeX is a typesetting system commonly used for scientific and mathematical documents due to its ability to render complex mathematical expressions. 
LaTeX is widely used in academia and research for writing papers, theses, and reports.

In this video, I will show you how to write a scientific document in LaTeX, including formatting text, creating lists, tables, and figures, and including mathematical equations.
I will also show you a lot of tips and tricks to make your LaTeX documents look professional and polished.
I learned this tricks from my experience as a researcher and from the LaTeX community which I am happy to share them with you.

If you are new to LaTeX, I recommend watching my video on this topic.
- [What is LaTeX?](https://www.youtube.com//watch?v=g0YdIs4oJm8)
- [LaTeX for Beginners: A Comprehensive Guide to Getting Started](https://www.youtube.com//watch?v=g0YdIs4oJm8)
- [10 Reasons Why You Should Start Using LaTeX for Your Academic Writing ✍️](https://www.youtube.com//watch?v=FzWIL3-yir8)
- [How to Get Started and Write a Paper with the LaTeX Elsevier Template](https://www.youtube.com//watch?v=iueBeWkLq60)

### Why use LaTeX

LaTeX is a powerful tool for creating professional-looking documents with complex formatting.
It is particularly well-suited for documents that contain mathematical equations, scientific notation, and other technical content.
LaTeX also provides a high degree of control over the layout and formatting of documents, allowing users to create custom styles and templates.
In addition, LaTeX documents are plain text files, which makes them easy to version control and collaborate on using tools like Git.

### How to use LaTeX

To use LaTeX, you need to install a LaTeX distribution on your computer. 
There are several distributions available, including TeX Live, MiKTeX, and MacTeX.
Just go to the official website of LaTeX and download the distribution that is compatible with your operating system.
Or watch my video to see how to install LaTeX on your computer.

- [Install LaTeX on Mac - Apple Silicon or Intel - MacTeX](https://www.youtube.com//watch?v=h-uZabWXCpc)
- [Texmaker Tutorial: How to Install and Get Started on Windows](https://www.youtube.com//watch?v=DiJ1c0tVHbU)

Once you have installed a LaTeX distribution, you can create LaTeX documents using a text editor and compile them using a LaTeX compiler such as pdflatex, TeXShop, TeXworks, and Overleaf.

I think that the best way to compile LaTeX documents is to use PyCharm or VsCode then use can use an online editor like Overleaf, which provides a user-friendly interface and real-time collaboration features, to collaborate on LaTeX documents with others who are not familiar with LaTeX.

Late in the video, I will show you how to link your local project with Overleaf using GitHub.
In this video we are going to be using PyCham as out text editor, but I will also briefly show you how to use VSCode and Overleaf.

You may also find these videos helpful:

- [How to get started with Overleaf and compile your first LaTeX document](https://www.youtube.com//watch?v=E84AeZUlv8s)
- [Install LaTeX Workshop and compile PDF in VSCode LaTeX (Mac)](https://www.youtube.com//watch?v=CmagZthwhaY)
- [Install LaTeX Workshop and compile PDF in VSCode LaTeX (Windows)](https://www.youtube.com//watch?v=CmagZthwhaY)


### LaTeX syntax

LaTeX documents are written in plain text and use a markup language to define the structure and formatting of the document.
The basic syntax of LaTeX is similar to HTML, with commands enclosed in curly braces and preceded by a backslash.
For example, to create a section heading in LaTeX, you would use the following command:

```latex
\section{Introduction}
```

LaTeX also provides a wide range of commands for formatting text, creating lists, tables, and figures, and including mathematical equations, which we are going to learn in this video.

## Basic LaTeX commands

### Document structure

A LaTeX document consists of a preamble, which contains document-wide settings and metadata, and the main body of the document, which contains the content of the document.

The preamble is enclosed in the following commands:

```latex
\documentclass{article}
\title{My first LaTeX document}
\author{John Doe}
\date{\today}
```

The main body of the document is enclosed in the following commands:

```latex
\begin{document}
\maketitle
\section{Introduction}
This is the introduction to my document.
\end{document}
```

To add affiliations to the author, you can import this package:

```latex
\usepackage{authblk}
```

```latex
\author[1]{Federico Tartarini}
\author[2]{John Doe}

\affil[1]{The University of Sydney, Australia}
\affil[2]{University}
```


### Text formatting

LaTeX provides a wide range of commands for formatting text, including:

- `\textbf{}` for bold text
- `\textit{}` for italic text
- `\underline{}` for underlined text
- `\texttt{}` for monospaced text
- `\textsc{}` for small caps text
- `\emph{}` for emphasized text
- `\textcolor{color}{}` for colored text
- `\fontsize{size}{skip}{}` for changing the font size
- `\selectfont` for selecting a font size
- `\textsuperscript{}` for superscript text
- `\textsubscript{}` for subscript text
- `\textbackslash` for a backslash character
- `\textbar` for a vertical bar character
- `\textless` for a less-than sign
- `\textgreater` for a greater-than sign
- `\textasciitilde` for a tilde character
- `\textasciicircum` for a caret character
- `\textbullet` for a bullet character
- `\textdegree` for a degree symbol
- `\textellipsis` for an ellipsis symbol
- `\textregistered` for a registered trademark symbol

#### Subscripts and superscripts

To create subscripts and superscripts in LaTeX, you would use the following commands:

```latex
H\textsubscript{2}O
x\textsuperscript{2}
```

### Chapters, Sections, Subsections, and Paragraphs

LaTeX provides commands for creating chapters, sections, subsections, and paragraphs in a document.

To create a chapter, you would use the following command:

```latex
\chapter{Chapter title}
```

To create a section, you would use the following command:

```latex
\section{Section title}
```

To create a subsection, you would use the following command:

```latex
\subsection{Subsection title}
```

To create a paragraph, you would use the following command:

```latex
\paragraph{Paragraph title}
```

You can also create a subsubsection using the `\subsubsection{}` command.

### Tables

LaTeX provides a tabular environment for creating tables:

```latex
\begin{tabular}{|c|c|c|}
\hline
Header 1 & Header 2 & Header 3 \\
\hline
Row 1, Col 1 & Row 1, Col 2 & Row 1, Col 3 \\
Row 2, Col 1 & Row 2, Col 2 & Row 2, Col 3 \\
\hline
\end{tabular}
```

However, creating tables in LaTeX can be quite complex, especially for tables with merged cells or multi-line cells.
I therefore recommend using an online tool like Table Generator to create tables and then paste the generated LaTeX code into your document.
Or exporting the table from pandas to LaTeX.

For example, to create a table from a pandas DataFrame, you would use the following command:

```python
import pandas as pd

df = pd.DataFrame(dict(name=['Raphael', 'Donatello'],
                        age=[26, 45],
                        height=[181.23, 177.65]))
print(df.to_latex(index=False,
                   formatters={"name": str.upper},
                   float_format="{:.1f}".format,
))
```

Prior to imporing the table, you need to import the package `\usepackage{{booktabs}}` you can then import the table as follows:

```latex
\input{table.tex}    
```

or by simply copying and pasting the table into the LaTeX document:

```latex
\begin{tabular}{lrr}
\toprule
name & age & height \\
\midrule
RAPHAEL & 26 & 181.2 \\
DONATELLO & 45 & 177.7 \\
\bottomrule
\end{tabular}
```

[Tables Generator](https://www.tablesgenerator.com/) can help you create tables in LaTeX.

Here are some videos that can help you with that:

- [Tables - LaTeX in 100 seconds](https://www.youtube.com//watch?v=g0YdIs4oJm8)
- [Convert an Excel or csv table into a LaTeX table - LaTeX course](https://www.youtube.com//watch?v=F4s1Rnla1r4)
- [Pandas DataFrame to LaTeX table - LaTeX course](https://www.youtube.com//watch?v=6ll6TDaZOt0)

### Figures

> You need the package `\usepackage{graphicx}` to include images in your LaTeX document.

LaTeX provides a figure environment for including images in a document:

```latex
\begin{figure}
\includegraphics{image.png}
\caption{This is a caption for the image.}
\label{fig:image}
\end{figure}
```

You can also use the `\centering` command to center the image in the document:

```latex
\begin{figure}
\centering
\includegraphics{image.png}
\caption{This is a caption for the image.}
\label{fig:image}
\end{figure}
```

The `\includegraphics{}` command is used to include an image in the document.
The `\caption{}` command is used to add a caption to the image.
The `\label{}` command is used to add a label to the image, which can be referenced elsewhere in the document.

You can also use include multiple images in a single figure using the following command

```latex
\usepackage{caption}
\usepackage{subcaption}
```

```latex
\begin{figure}
    \centering
    \begin{subfigure}[b]{0.45\textwidth}
        \includegraphics[width=\textwidth]{figures/mountain}
        \caption{Caption for image 1.}
        \label{fig:image1}
    \end{subfigure}
    \hfill
    \begin{subfigure}[b]{0.45\textwidth}
        \includegraphics[width=\textwidth]{figures/figure}
        \caption{Caption for image 2.}
        \label{fig:image2}
    \end{subfigure}
    \caption{This is a caption for the figure.}
    \label{fig:sub-figure}
\end{figure}
```

If you want to wrap text around a figure, you can use the wrapfig package:

```latex
\usepackage{wrapfig}

\begin{wrapfigure}{r}{0.5\textwidth}
\centering
\includegraphics[width=1\linewidth]{image.png}
\caption{This is a caption for the image.}
\label{fig:image}
\end{wrapfigure}
```

You can also include animated GIFs in LaTeX documents. 
If you are interested in learning how to do that, I recommend watching my video on this topic.

- [Spice up Your LaTeX Document with Animated GIFs: A How-To Guide!](https://www.youtube.com//watch?v=8OARG6dZueA)
- [LaTeX move Figures and Tables to the end](https://www.youtube.com//watch?v=Rthi2q4DMQs)
- [Annotate figures in LaTeX](https://www.youtube.com//watch?v=g0YdIs4oJm8)
- [Figures, subfigures and figures side-by-side in LaTeX all you need to know.](https://www.youtube.com//watch?v=ZihsQU7h9-E)

### Tables of contents, List of Figures and Tables

LaTeX provides commands for creating a table of contents, list of figures, and list of tables in a document.

To create a table of contents, you would use the following command:

```latex
\tableofcontents
```

To create a list of figures, you would use the following command:

```latex
\listoffigures
```

To create a list of tables, you would use the following command:

```latex
\listoftables
```

These commands will automatically generate the table of contents, list of figures, and list of tables based on the sections, figures, and tables in the document.

### Lists

LaTeX provides three types of lists: itemize, enumerate, and description.

The itemize environment is used to create bulleted lists:

```latex
\begin{itemize}
\item First item
\item Second item
\item Third item
\end{itemize}
```

The enumerate environment is used to create numbered lists:

```latex
\begin{enumerate}
\item First item
\item Second item
\item Third item
\end{enumerate}
```

The description environment is used to create lists with descriptions:

```latex
\begin{description}
\item[First item] Description of the first item
\item[Second item] Description of the second item
\item[Third item] Description of the third item
\end{description}
```

## [Version control with git in LaTeX](https://www.youtube.com//watch?v=1d2aFtXRiLM)

LaTeX documents are plain text files, which makes them well-suited for version control using tools like Git.

> You will need to install Git on your computer and create a Git repository to track changes to the LaTeX document.

To use Git with a LaTeX document, you would follow these steps:

1. Initialize a Git repository in the directory containing your LaTeX document:

```bash
git init
```

2. Add the LaTeX document to the Git repository:

```bash
git add mydocument.tex
```

3. Commit the changes to the Git repository:

```bash
git commit -m "Initial commit"
```

4. Make changes to the LaTeX document and commit them to the Git repository as needed.
5. Share the Git repository with collaborators using a platform like GitHub or GitLab.
6. Collaborate on the LaTeX document with others using Git.
7. Resolve conflicts and merge changes as needed.
8. Track the history of changes to the LaTeX document using Git.
9. Create branches for different versions or features of the LaTeX document.
10. Use Git tags to mark specific versions or milestones of the LaTeX document.
11. Use Git hooks to automate tasks like compiling the LaTeX document or running tests.
12. Use Git submodules to include external packages or libraries in the LaTeX document.
13. Use Git LFS to store large binary files like images or data in the Git repository.
14. Use Git diff to compare changes between versions of the LaTeX document.
15. Use Git blame to track changes to specific lines or sections of the LaTeX document.
16. Use Git bisect to find the commit that introduced a bug or issue in the LaTeX document.
17. Use Git stash to temporarily store changes to the LaTeX document.
18. Use Git rebase to reorganize or clean up the commit history of the LaTeX document.
19. Use Git cherry-pick to apply specific commits from one branch to another in the LaTeX document.

If you want to learn more on how to use Git with LaTeX documents, I recommend watching my video on this topic.
- [Version control with git in LaTeX](https://www.youtube.com//watch?v=1d2aFtXRiLM)

## Advanced LaTeX commands

### Mathematical equations

LaTeX is particularly well-suited for writing mathematical equations, as it provides a wide range of commands for creating complex mathematical expressions.

Mathematical equations can be included in a LaTeX document using the following commands:

- Inline equations: `$...$` or `\(...\)`
- Display equations: `\[...\]` or `\begin{equation}...\end{equation}`
- Numbered equations: `\begin{equation}...\end{equation}`
- Aligned equations: `\begin{align}...\end{align}`
- Matrices: `\begin{matrix}...\end{matrix}`
- Fractions: `\frac{}{}` or `\dfrac{}{}`
- Roots: `\sqrt{}` or `\sqrt[n]{}`

For example, to create the equation `y = mx + b`, you would use the following command:

```latex
\[ y = mx + b \]
```

If you want to learn more on how to write mathematical equations in LaTeX, I recommend watching my video on this topic.

- [Easily Write Math Equations in LaTeX using Mathpix Snip, Detexify, Math on Quora, and LaTeX CodeCogs](https://www.youtube.com//watch?v=msugNV8pT9E)
- [Boost Your Productivity: Convert Python functions in LaTeX effortlessly](https://www.youtube.com//watch?v=MfbSKRI8AXw)

### Values with units

LaTeX provides the `siunitx` package for typesetting values with units in a document.

To use the `siunitx` package, you would include the following command in the preamble of the document:

```latex
\usepackage{siunitx}
```

To typeset a value with units, you would use the following command:

```latex
\SI{10}{\meter}
$5\unit{\m\per\s}$ \\
$\qty{5}{\m\per\s} + \qty{5}{\m\per\s}$
```

You can also change the options using the following command.

```latex
\sisetup{locale = DE, per-mode = symbol, range-phrase=--, range-units=single, product-units=single}
```

```latex
\subsection*{Units}
\unit{\m\candela} \\
\unit{kg.m.s^{-1}} \\
\unit{\kilogram\metre\per\second} \\
\unit{\kg\m\per\s} \\
\unit[per-mode = symbol]{\kilogram\metre\per\ampere\per\second}\\
\unit{\kilo\gram\metre\per\square\second} \\
\unit[per-mode = symbol]{\gram\per\cubic\milli\metre} \\
\unit{\square\volt\cubic\lumen\per\farad} \\
\unit{\metre\squared\per\cubic\lux} \\
\unit{\henry\second}

\subsection*{Numbers with units}
\qty{10}{\celsius} \\
\qty{10}{\degreeCelsius} \\
\qty{1.23}{J.mol^{-1}.K^{-1}} \\
\qty{.23e7}{\candela} \\
\qty[per-mode = symbol]{1.99}{\per\kilogram} \\
\qty[per-mode = fraction]{1,345}{\coulomb\per\mole}

\subsubsection*{Additional macros for numbers with units}
\qtylist{0.13;0.67;0.80;1}{\milli\metre}\\
\numproduct{1.654 x 2.34 x 3.430} \\
\qtyproduct{10 x 30 x 45}{\metre} \\
\numrange{10}{20} \\
\numrange[range-phrase=--]{10}{20} \\
\qtyrange{0.13}{0.67}{\milli\metre} \\
```

This will automatically format the value and units according to the siunitx package settings.

If you want to learn more on how to typeset values with units in LaTeX documents, I recommend watching my video on this topic.

- [Typesetting values with units in LaTeX.](https://www.youtube.com//watch?v=lUiyzUaagoU)

### Cross-referencing

LaTeX provides a powerful cross-referencing system that allows you to reference sections, equations, figures, and tables within a document.

To create a label for a section, equation, figure, or table, you would use the following command:

```latex
\label{sec:introduction}
\label{eq:equation}
\label{fig:figure}
\label{tab:table}
```

To reference the labeled item elsewhere in the document, you would use the following command:

```latex
\ref{sec:introduction}
\ref{eq:equation}
\ref{fig:figure}
\ref{tab:table}
```

This allows you to easily create cross-references within your document and ensure that they are automatically updated if the numbering or order of items changes.

However, an even better solution is to use the `cleverref` package.

```latex
\usepackage{cleveref}
```

It works very similarly to the `\ref{}` command, but it is more powerful and flexible.
It allows us for example to reference multiple items at once.

```latex
\cref{sec:introduction}  % Lowercase
\Cref{sec:introduction}  % Capitalized
\cref{eq:equation,fig:figure,tab:table}  % Multiple items
```

The command `\cref{}` will automatically detect the type of the item and add the appropriate prefix (e.g., "Section", "Equation", "Figure", "Table").
If you want you can customize the prefix using the following command:

```latex
\usepackage[capitalise,noabbrev]{cleveref}
```

## Dividing your document into multiple files

LaTeX provides the `\input{}` and `\include{}` commands for dividing a document into multiple files.

The `\input{}` command is used to include the contents of a file in the document:

```latex
\input{chapter1.tex}
\input{chapter2.tex}
```

The `\include{}` command keeps the document structure and numbering consistent across multiple files:

```latex
\include{chapter1.tex}
\include{chapter2.tex}
```

This allows you to break up a large document into smaller files and organize the content more effectively.

> Include adds a page break before and after the included file, while input does not.

> You also cannot nest include commands, but you can nest input commands.

> The advantage of using include is that it allows you to compile individual chapters separately, which can speed up the compilation process for large documents. You  can do so by using the `\includeonly{}` command.

If you want to learn more on how to divide your document into multiple files in LaTeX, I recommend watching my video on this topic.
- [Include vs input in LaTeX, when to use them and main differences](https://www.youtube.com//watch?v=V_eCCNlBuMo)

Include and inputs are also useful to speed up the compilation of your LaTeX document.
- [Speeding up LaTeX 🚀 - LaTeX course](https://www.youtube.com//watch?v=U6bk9nZX0tw)

### Page numbering

LaTeX provides commands for customizing the page numbering in a document. 

To change the page numbering style, you would use the following commands:

- `\pagenumbering{style}` to change the style of page numbering

For example, to change the page numbering style to Roman numerals, you would use the following command:

```latex
\pagenumbering{roman}
```

If you want to disable page numbering for a specific page, you would use the following command:

```latex
\thispagestyle{empty}
```

or for the full document:

```latex
\pagenumbering{gobble}
```

If you want to have a fancy page numbering, you can use the `fancyhdr` package.

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancypagestyle{plain}{}
\fancyhf{} 
\rfoot{Page \thepage}
```   

If you want to learn more on how to customize the page numbering in LaTeX documents, I recommend watching my video on this topic.

- [Mastering Page Numbering in LaTeX: Tips and Tricks](https://www.youtube.com//watch?v=SpXtc9BO2bk)

### Hyperlinks

LaTeX provides the hyperref package for creating hyperlinks in a document.

For example, to create a hyperlink to my website, you would use the following command:

```latex
\href{http://federicotartarini.github.io/}{Visit my website}
```

You can also create hyperlinks to sections, figures, and tables within the document using the following commands:

```latex
\hyperref[label]{text}
```

For example, to create a hyperlink to a section titled "Introduction", you would use the following command:

```latex
\hyperref[sec:introduction]{Introduction}
```

If you want to learn more on how to create hyperlinks in LaTeX documents, I recommend watching my video on this topic.

- [Mastering Hyperlinks in LaTeX: A Comprehensive Guide to hyperref Package](https://www.youtube.com//watch?v=7rYrZxZfrn8)

### Nomenclature

The LaTeX package I like to use for creating a nomenclature in a document is the `acronym` package.

To create a nomenclature in a LaTeX document, you would follow these steps:

1. Include the acronym package in the LaTeX document:

```latex
\usepackage[printonlyused]{acronym}
```

2. Define the acronyms in the document using the `\acro{}` command:

```latex
\section*{Nomenclature}

\renewcommand{\baselinestretch}{0.75}\normalsize
    \begin{acronym}[longest]
    \acro{HTML}{Hypertext Markup Language}
    \acro{t}[$t_{db}$]{dry-bulb temperature \acroextra{[°C]}}
    \end{acronym}
\renewcommand{\baselinestretch}{1}\normalsize
```

3. Customize the appearance and formatting of the nomenclature using the acronym package options.
4. Use the `\ac{}` command to reference acronyms in the document.
5. Use the `\acresetall` command to reset the acronyms to their original state.
6. Use the `\acs{}` command to reference the short form of the acronym.
7. Use the `\acf{}` command to reference the full form of the acronym.
8. Use the `\Ac{}` command to capitalize the first letter of the acronym.

If you want to lean more on how to create a nomenclature or a glossary in LaTeX documents, I recommend watching my videos on this topic.

- [Nomenclature in LaTeX document - all you need to know to master it - LaTeX course](https://www.youtube.com//watch?v=zPrWS5cnDgc)

### Glossaries and Acronyms

LaTeX provides the glossaries package for creating glossaries and acronyms in a document.

To create a glossary in a LaTeX document, you would follow these steps:

1. Include the glossaries package in the LaTeX document:

```latex
\usepackage[toc, acronym]{glossaries}
```

2. Define the terms and acronyms in the document using the `\newglossaryentry{}` command:

```latex
\makeglossaries

\newglossaryentry{latex}
{
  name=latex,
  description={A document preparation system}
  plural=LaTeX
}

\newacronym{html}{HTML}{Hypertext Markup Language}
```

3. Include the glossary in the document using the `\printglossary` command:

```latex
\printglossary
```

4. Customize the appearance and formatting of the glossary using the glossaries package options.
5. Use the `\gls{}` command to reference terms and acronyms in the document.
6. Use the `\glspl{}` command to reference plural forms of terms and acronyms.

If you want to lean more on how to create a nomenclature or a glossary in LaTeX documents, I recommend watching my videos on this topic.

- [Add a glossary to your document containing terms and acronyms - Glossaries package - LaTeX Course](https://www.youtube.com//watch?v=lfF7DPUEPQ0)


### Bibliography and citations

LaTeX provides the `biblatex` package for managing bibliographies and citations in a document.

To include a bibliography in a LaTeX document, you would follow these steps:

1. Create a .bib file containing the bibliographic entries:

```bib
@article{einstein,
  author = {Albert Einstein},
  title = {Zur Elektrodynamik bewegter K{\"o}rper},
  journal = {Annalen der Physik},
  volume = {322},
  number = {10},
  pages = {891--921},
  year = {1905},
  publisher = {Wiley-VCH}
}

@book{latexcompanion,
    author    = {Michel Goossens and Frank Mittelbach and Alexander Samarin},
    title     = {The \LaTeX\ Companion},
    publisher = {Addison-Wesley},
    year      = {1994},
    address   = {Reading, Massachusetts}
}
```

2. Include the biblatex package in the preable of the LaTeX document:

```latex
\usepackage[]{biblatex}
```

or

```latex
\usepackage[style=authoryear]{biblatex}
```

3. Add the bibliography file to the LaTeX document:

```latex
\addbibresource{mybibliography.bib}
```

4. Cite the bibliographic entries in the document using the `~\cite{}` command. I am using the `~` to avoid a line break between the text and the citation.

```latex
\cite{einstein}
```

5. Compile the LaTeX document using a LaTeX compiler like pdflatex or latexmk.
6. Generate the bibliography using the `\printbibliography` command.
7. Customize the citation style and formatting using the biblatex package options.
8. Use tools like JabRef, Zotero, Mendeley or EndNote to manage bibliographic entries and export them to a .bib file.
9. Use the `\parencite{}` command to create citations with year in parentheses.

If you want to learn more on how to include bibliographies and citations in LaTeX documents, I recommend watching my video on this topic.

- [How to Add a Bibliography to Your LaTeX Document Using BibLaTeX](https://www.youtube.com//watch?v=cetKX6gWAIo)
- [Export citations from Mendeley into LaTeX - LaTeX Course](https://www.youtube.com//watch?v=JinsVU3ORaI)

### Source code

LaTeX provides the listings package for including source code in a document.

To include source code in a LaTeX document, you would follow these steps:

1. Include the listings package in the LaTeX document:

```latex
\usepackage{listings}

\renewcommand\lstlistingname{Source Code}
\renewcommand\lstlistlistingname{List of Source Codes}

\usepackage{xcolor}
\definecolor{codegreen}{rgb}{0,0.6,0}
\definecolor{codegray}{rgb}{0.5,0.5,0.5}
\definecolor{codepurple}{rgb}{0.58,0,0.82}
\definecolor{backcolour}{rgb}{0.95,0.95,0.92}

\lstdefinestyle{mystyle}{
    backgroundcolor=\color{backcolour},   
    commentstyle=\color{codegreen},
    keywordstyle=\color{magenta},
    numberstyle=\tiny\color{codegray},
    stringstyle=\color{codepurple},
    basicstyle=\footnotesize,
    breakatwhitespace=false,         
    breaklines=true,                 
    captionpos=b,                    
    keepspaces=true,                 
    numbers=left,                    
    numbersep=5pt,                  
    showspaces=false,                
    showstringspaces=false,
    showtabs=false,                  
    tabsize=2
}
```

2. Define the language of the source code:

```latex
\lstset{language=Python, style=mystyle}
```

3. Include the source code in the document using the `lstlisting` environment:

```latex
\begin{lstlisting}[language=Python, caption={Hello, world!}, label={lst:hello}, mathescape=true, breaklines=true, numbers=left, numberstyle=\tiny, numbersep=5]
def hello_world():
    print("Hello, world!")
\end{lstlisting}
```

4. Customize the appearance and formatting of the source code using the listings package options.
5. Use tools like Pygments or minted to highlight syntax and format source code in LaTeX documents.
6. Include source code from external files using the `\lstinputlisting{}` command.
7. Create custom styles and templates for source code listings in LaTeX documents.
8. Include line numbers, captions, and labels for source code listings in LaTeX documents.
9. Show the list of source codes in the document using the `\lstlistoflistings` command.

You can also import the source code from a file using the following command:

```latex
\lstinputlisting[language=Python, caption={Hello, world!}, label={lst:hello}]{source_code.py}
```

Alternatively you can use the `minted` package.

```latex
\usepackage{minted}
```

```latex
\begin{minted}{python}
def hello_world():
    print("Hello, world!")
\end{minted}
```

You can also import the source code from a file using the following command:

```latex
\inputminted{python}{source_code.py}
```

or 

```latex
\lstinputlisting[label={lst:lstinputlisting2}, caption={My code to plot figures}]{../code/figure.py}
```

If you want to learn more on how to include source code in LaTeX documents, I recommend watching my video on this topic.

- [Display source code in LaTeX - source code listing](https://www.youtube.com//watch?v=ByduYnAu2jM)

### Import variables from Python to LaTeX

To import variables from Python to LaTeX, you would follow these steps:

1. Create a Python script that defines the variables you want to import:

```python
def save_var_latex(key, value, units=False, round_var=False):
    import csv

    dict_var = {}

    file_path = "mydata.dat"

    try:
        with open(file_path, newline="") as file:
            reader = csv.reader(file)
            for row in reader:
                dict_var[row[0]] = row[1]
    except FileNotFoundError:
        pass

    if round_var:
        value = round(value, round_var)

    if units:
        dict_var[key] = f"\\qty{{{value}}}{{{units}}}"
    else:
        dict_var[key] = f"\\num{{{value}}}"

    with open(file_path, "w") as f:
        for key in dict_var.keys():
            f.write(f"{key},{dict_var[key]}\n")
            
save_var_latex("accuracy", 10, "\\percent")
save_var_latex("loss", 0.1)
save_var_latex("vel", .5693, "\\m\\per\\s", 2)    
```

2. Import the following package in the LaTeX document:

```latex
\usepackage{siunitx}
% package to open file containing variables
\usepackage{datatool, filecontents}
\DTLsetseparator{,}% Set the separator between the columns.

% import data
\DTLloaddb[noheader, keys={thekey,thevalue}]{mydata}{../mydata.dat}
% Loads mydata.dat with column headers 'thekey' and 'thevalue'
\newcommand{\var}[1]{\DTLfetch{mydata}{thekey}{#1}{thevalue}}
```

3. Include the variables in the LaTeX document using the following command:

```latex
\var{accuracy}
\var{loss}
\vart{vel}
```

If you want to learn more on how to import variables from Python to LaTeX documents, I recommend watching my video on this topic.

- [Export Python variables and import them into your LaTeX document -- Combining Python with LaTeX
](https://www.youtube.com/watch?v=LufMPezEN6Y&t=242s)

### Flowcharts and diagrams

LaTeX provides the TikZ package for creating flowcharts and diagrams in a document.

To create a flowchart in a LaTeX document, you would follow these steps:

1. Include the TikZ package in the LaTeX document:

```latex
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, arrows}
\tikzstyle{process} = [rectangle, minimum width=3cm, minimum height=1cm, text centered, draw=black, fill=orange!30]
\tikzstyle{startstop} = [rectangle, minimum width=3cm, minimum height=1cm, text centered, draw=black, fill=green!30]
\tikzstyle{arrow} = [thick,->,>=stealth]
```

2. Define the nodes and edges of the flowchart using TikZ commands:

```latex
    \begin{figure}
        \centering
        \begin{tikzpicture}
            \node (start) [startstop] {Start};
            \node (process) [below of=start] {Process};
            \node (decision) [process, below of=process] {Decision};
            \node (end) [below of=decision] {End};
            \draw [arrow] (start) -- (process);
            \draw [arrow] (process) -- (decision);
            \draw [arrow] (decision) -- (end);
        \end{tikzpicture}
        \caption{This is a flowchart.}
        \label{fig:flowchart}
    \end{figure}
```

3. Customize the appearance and formatting of the flowchart using TikZ commands.
4. Use tools like draw.io or Lucidchart to create flowcharts and export them to LaTeX code.
5. Include flowcharts and diagrams in LaTeX documents using the TikZ package.

You can also create linguistic trees and parse trees in LaTeX using the TikZ package.
Moreover, you can create gannt charts in LaTeX using the pgfgantt package.

If you want to learn more on how to create flowcharts and diagrams in LaTeX documents, I recommend watching my video on this topic.

- [Diagrams in LaTeX - Parse tree - Linguistic trees](https://www.youtube.com//watch?v=qP3RPMmYzgM)
- [Creating Beautiful Flowcharts in LaTeX with TikZ](https://www.youtube.com//watch?v=Frze6SdKV3A)
- [Effortless Gantt Chart Creation in LaTeX using ChatGPT](https://www.youtube.com//watch?v=GHbkTennLbs)

## Collaboration

### Publish your LaTeX document on GitHub

You will need to have access to a GitHub account and a repository to publish your LaTeX document on GitHub.

To publish your LaTeX document on GitHub, you would follow these steps:

1. Create a new repository on GitHub to store the LaTeX document.
2. Clone the repository to your local computer using the `git clone` command.
3. Add the LaTeX document to the repository using the `git add` command.
4. Commit the changes to the repository using the `git commit` command.
5. Push the changes to the repository using the `git push` command.
6. Share the repository with collaborators using the GitHub platform.

### Connect GitHub with Overleaf

If you want to learn more on how to connect GitHub with Overleaf, I recommend watching my video on this topic.

- [Overleaf and GitHub integration - sync an Overleaf document with GitHub repository - LaTeX Course](https://www.youtube.com//watch?v=BAt5xYP70u0)

If you want to learn how to review a document in Overleaf, I recommend watching my video on this topic.

- [Review a document in Overleaf](https://www.youtube.com//watch?v=g0YdIs4oJm8)

### Collaborate on LaTeX documents and review changes

GitHub provides a platform for collaborating on LaTeX documents and reviewing changes using pull requests and code reviews.
You can also use tools like latexdiff to compare versions of a LaTeX document and highlight changes.

To collaborate on a LaTeX document and review changes, you would follow these steps:

1. Import the package `todonodes` in the LaTeX document:

```latex
\usepackage{lipsum}                     % Dummytext
\usepackage{xargs}                      % Use more than one optional parameter in a new commands
\usepackage[pdftex,dvipsnames]{xcolor}  % Coloured text etc.

\usepackage[colorinlistoftodos,prependcaption]{todonotes}

% \usepackage[colorinlistoftodos,prependcaption,textsize=tiny,disable]{todonotes}
\newcommandx{\unsure}[2][1=]{\todo[linecolor=red,backgroundcolor=red!25,bordercolor=red,#1]{#2}}
\newcommandx{\change}[2][1=]{\todo[linecolor=blue,backgroundcolor=blue!25,bordercolor=blue,#1]{#2}}
\newcommandx{\info}[2][1=]{\todo[linecolor=green,backgroundcolor=green!25,bordercolor=green,#1]{#2}}
\newcommandx{\improvement}[2][1=]{\todo[linecolor=gray,backgroundcolor=gray!25,bordercolor=gray,#1]{#2}}
\newcommandx{\thiswillnotshow}[2][1=]{\todo[disable,#1]{#2}}

\newcommand\mynotes[1]{\textcolor{red}{#1}}
\renewcommand\mynotes[1]{}
```

2. Add comments and annotations to the LaTeX document using the `todo` command:

```latex
\todo[inline]{All you need to know on how to add todo notes to your document}

\todo[inline, color=red]{Look at the video if you want to know more!}

YouTube video tutorial on how to add to do notes\unsure{This tutorial is great} \change{4 different solutions to add notes!}

My name is Federico \change{Change this!} and I am a postdoc at the university and I like to make videos on YouTube.
% todo FT change this text

\info{This can help me in chapter seven!}

\improvement{This really needs to be improved!\newline\newline What was I thinking?!}

\thiswillnotshow{This is hidden since option `disable' is chosen!}

\mynotes{Not sure about this text!}

\improvement[inline]{The following section needs to be rewritten!}

\listoftodos[Notes to address]
```

If you want to learn more on how to collaborate on LaTeX documents and review changes, I recommend watching my video on this topic.

- [Todo notes and comments - LaTeX
](https://www.youtube.com/watch?v=RHDygno5wM0&t=16s)

### Compare versions of a LaTeX document

If you want to compare versions of a LaTeX document and highlight changes, you can use tools like latexdiff.

To compare versions of a LaTeX document using latexdiff, you would follow these steps:

1. Install the latexdiff package on your computer using the package manager of your LaTeX distribution.
2. Create a new version of the LaTeX document and save it as a separate file.
3. Run the latexdiff command to compare the two versions of the LaTeX document:

```bash
latexdiff old.tex new.tex > diff.tex
```

If you want to learn more on how to compare versions of a LaTeX document and highlight changes, I recommend watching my video on this topic.
- [Markup and view changes in LaTex with latexdiff](https://www.youtube.com//watch?v=IbHcqT8rBKI)

## Submit a LaTeX document to a journal

Before sumbmitting a LaTeX document to a journal, you need to make sure that the document complies with the journal's guidelines and requirements.
This includes formatting the document according to the journal's style guide, including the required sections and metadata, and ensuring that the document is error-free and properly compiled.

### Word count

You will also need to count the words in the document and make sure that it meets the journal's word limit.

You can do so by using the `texcount` tool. 
Make sure to install it on your computer. 
You will also need to install Perl.

```bash
texcount mydocument.tex
```

If you want to get the total number of words in the document, you can use the following command:

```bash
texcount -sum -total mydocument.tex
```

`textcount` does not counts the words in included documents.
To do so you can use the following command:

```bash
texcount -sum -inc mydocument.tex
```

The verbose option will provide more detailed information on the word count:

```bash
texcount -sum -inc -v mydocument.tex
```

In red you will see the number of words in the main document and in blue the number of words in the included documents.

You can also export the word count to and HTML file using the following command:

```bash
texcount -sum -inc -v -html mydocument.tex > tmp.html
```

You can exclude some sections from the word count by using the following command:

```bash
%TC:ignore
\section{To be excluded from the word count}
%TC:endignore
```

Please follow the instructions provided in this video for more information on how to count the words in a LaTeX document.

- [Count words in LaTeX
](https://www.youtube.com/watch?v=hlyLABFfvTQ)

### Formatting the document

Many journals provide LaTeX templates that you can use to format your document according to their guidelines.

For example, the IEEE provides LaTeX templates for conference and journal papers that you can use to format your document.
You can download the templates from the [IEEE website](https://template-selector.ieee.org/secure/templateSelector/publicationType) and use them to create your document.

If you want to learn more on how to submit a LaTeX document to a journal, I recommend watching my video on this topic.

- [IEEE LaTeX template tutorial](https://www.youtube.com/watch?v=VbaFTcpSHyA&t)
- [Elsevier LaTeX template tutorial](https://youtu.be/iueBeWkLq60?si=kYklpCs-68U-i1dJ)

If you need to convert a Word document to LaTeX or vice versa, you can use tools like Pandoc to convert between formats.
- [Convert a Word document to LaTeX for free using Pandoc](https://www.youtube.com//watch?v=4fQDxGfNj2U)
- [Covert LaTeX document to Word (.docx) for free using Pandoc](https://www.youtube.com//watch?v=VsAwatp3c_w)

## Other LaTeX applications

LaTeX can be used for a wide range of applications beyond scientific and mathematical documents.

Some other applications of LaTeX include:

- Creating presentations.
- Writing resumes and CVs.
- Designing posters and flyers .
- Creating quizzes and exams.
- Writing letters and memos.

If you want to learn more on how to use LaTeX for these applications, I recommend watching my videos on these topics.

- [Typesetting exams in LaTeX](https://www.youtube.com//watch?v=g0YdIs4oJm8)
- [Scientific conference poster - LaTeX](https://www.youtube.com//watch?v=dFJV9FA8zLg)
- [Overleaf resume tutorial - write a professional curriculum vitae (CV) with LaTeX](https://www.youtube.com//watch?v=3VFn700xwho)
    