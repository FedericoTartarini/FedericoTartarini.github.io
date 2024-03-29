---
title: Getting Started
position: 2
tags:
  - latex
keywords: 
  - learn latex
  - latex for beginners
  - getting started with latex
image: ./img/what-is-latex.png
description: This article describes how to get started with LaTeX
last_update:
  author: Federico Tartarini
---

# Getting Started with LaTeX: A Beginner’s Guide to the Powerful Typesetting System

Let’s recap what you have learned in my previous article about LaTeX.

>LaTeX is a powerful typesetting system that is widely used in scientific and academic communities for writing papers, articles, and books. If you’re new to LaTeX, getting started can seem intimidating, but with a little bit of practice and know-how, you’ll be able to create professional-looking documents in no time.

## How to get started

The first step in getting started with LaTeX is to download and install a TeX distribution. A TeX distribution is a collection of software that includes the LaTeX typesetting system and additional tools and packages commonly used with LaTeX. Some popular TeX distributions are TeX Live, MiKTeX, and MacTeX. You can download these distributions for free from their respective websites.

Once you’ve installed a TeX distribution, you’ll need to choose a text editor to write your LaTeX documents. There are many text editors available that have built-in support for LaTeX, such as TeXworks, and Texmaker. Some of them are open-source and others are proprietary. I recommend using either TeXiFy a PyCharm plugin (video on how to get started) or LaTeX Workshop a Visual Studio Code Plugin (video on how to get started on Windows, and on Mac).

<iframe width="100%" class="youtube-video" src="https://www.youtube.com/embed/4lyHIQl4VM8?si=wXxG_wDDoTnMcaMP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Another extremely valid alternative is to compile your document online using a free tool called Overleaf. Overleaf is great for beginners and for collaborating with other colleagues. Watch this video to learn how to get started with Overleaf.

<iframe width="100%" class="youtube-video" src="https://www.youtube.com/embed/E84AeZUlv8s?si=kp6lFPjiGq-VmlMu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

When you’re ready to start writing your first LaTeX document, you can use a template or create a new document from scratch. A template is a pre-existing document you can use as a starting point for your document. Templates can be helpful because they include a lot of the basic structure and formatting that you’ll need for your document. You can find many templates available on the internet, for example, [the Overleaf website is a great place to get started](https://www.overleaf.com/latex/templates).

### Create a new LaTeX document from scratch

To create a new document from scratch, you can start with a basic document structure that includes the `\documentclass` command, which tells LaTeX what type of document you're making (e.g., article, book, letter), and the `\begin{document}` and `\end{document}` commands, which mark the beginning and end of your document.

Copy the code below in a file with the .tex extension (for example call the file main.tex).

```latex
\documentclass{article}

\title{My First LaTeX Document}

\author{John Doe}

\begin{document}

\maketitle

\section{Introduction}

Hello, this is my first LaTeX document!

\end{document}
```

Once you’ve set up your document, you can start adding content to it. LaTeX uses a variety of commands and environments to format and structure your content, such as headings, paragraphs, lists, tables, and equations.

Finally, you’ll need to compile your document to see the final output. To do this, you can use a typesetting program, such as pdflatex or xelatex, that comes with your TeX distribution to convert your LaTeX source code into a PDF file.

Watch this video if you want to learn how to get started with LaTeX in 10 minutes.

<iframe width="100%" class="youtube-video" src="https://www.youtube.com/embed/g0YdIs4oJm8?si=WTtRJalwMy5FUisf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conclusion

In summary, to start using LaTeX, you will need to download a TeX distribution, choose a text editor, use a template or create your document, add content using LaTeX commands and environments, and then compile it to get the final output. 
It may take some time to get used to it, but it’s worth the effort.