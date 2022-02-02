---
title: Github
---

As a reminder, Git is a tool for version controlling your code. Your code is committed into repositories, where each project has its own repository. For this course, all projects and assignments will be organized into one repository. GitHub is a service that hosts a copy of your git repository online. This makes it easy for others to contribute to, and most importantly host it online as a website.

At this point your repository on your computer probably looks like this:
```
ci22-portfolio/
|-index.html
```

`ci22-portfolio` is the root folder, and within it, `index.html` is the index file for the first assignment. as we will be hosting all your work on here, including studio work, we should adjust the folder structure to be:
```
ci22-portflio/
|- a1/
  |- index.html
|- p1/
  |- index.html
|- exercises/
  |- example.html
index.html
```

By introducing this directory structure, we also modify the URL structure (since the two are inherently linked). 

The `index.html` file at the base of the directory will function as your homepage. Here, you should link out to everything else contained within the repository. 

This is the file that `https://yourusename.github.io/ci22-portfolio/` will load where `yourusername` is your github username and `ci22-portfolio` is the name of your repository on GitHub.

`a1/`, `exercises/`, and `p1/` are examples of subdirectories that will be accesed by appending their names to the URL of your site and are structured based on the assignments in lab and studio. This allows someone to access `a1` by just going to `https://yourusername.github.io/ci22-portfolio/a1`.

At this point, your `index.html` at the root of your repository (root means the top level and not nested inside another folder) should contain something like this:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CI22 Work</title>
  </head>
  <body>
    <h1>Projects</h1>
    <ul>
      <li>
        <a href="a1">Assignment 1</a>
      </li>
      <li>
        <a href="p1">Project 1</a>
      </li>
      <li>
        <a href="exercises/example.html">Exercise Example</a>
      </li>
    </ul>
  </body>
</html>
```

Note that we can omit the final `index.html` in most cases because the web browser will find it by default. However with the example exercise, we must add the additional `example.html` in the anchor tag in order for the browser to locate the file correctly.

This example can be found [here](https://github.com/eli8527/CI22-portfolio). The live site is [here](https://eli8527.github.io/CI22-portfolio/).