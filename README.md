#Balar

Easy way to create documentation.

##How To

 - download Balar from [github](https://github.com/saturngod/Balar)
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

[SGDoc](saturngod.github.com/SGDoc/) have inspired **Balar**. Original template design are base on Flatdoc's theme-white CSS.

##Changelog

### Version 0.9.5

- add search in side bar

### Version 0.9

- Fixed Mobile Version


###Version 0.8

- support mobile version
- Change name to Balar

###Version 0.5

- Add auto hide feature (data-autohide="true")


###Version 0.1

- just publish

##Acknowledgements

**Balar** is authored and maintained by [Saturngod](http://en.saturngod.net).
Released under the [MIT License](http://opensource.org/licenses/mit-license.php).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/saturngod/balar/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

