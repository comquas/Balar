#EasyDoc

Easy way to create documentation.

##How To

 - download EasyDoc from [github](https://github.com/saturngod/easydoc/releases)
 - Edit index.html between `<div id="content">` and `</div>`
 - write with markdown

##Markdown

You can use markdown code like [Github](https://help.github.com/articles/github-flavored-markdown).

###Syntax Higlight

Syntax higlight for sgdoc is same like github.

Example :

    ```ruby
    require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```

Will show like

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```


#MISC

##Inspirations

[SGDoc](saturngod.github.com/SGDoc/) have inspired **EasyDoc**. Original template design are base on Flatdoc's theme-white CSS.

##Changelog

###Version 0.5

- Add auto hide feature (data-autohide="true")


###Version 0.1

- just publish

##Acknowledgements

**EasyDoc** is authored and maintained by [Saturngod](http://en.saturngod.net).
Released under the [MIT License](http://opensource.org/licenses/mit-license.php).



