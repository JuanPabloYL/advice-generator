# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

### Screenshot

(./screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Through this project I learned different practices and functions in scss such as the use of mixins with keyfames.

To see how you can add create scss keyframes, see below:

Create the directory and the file where you want to store your code.
Mine was src/scss/base/mixins.scss

```scss
@mixin keyframe($name) {
  @keyframes #{$name} {
    @content;
  }
}
```

### Continued Development

I have solid bases with JS, by the way actually I'm learning React. In the development of this project I had some troubles with changing the pattern divider image src. I tried to change the image source with JS according to the change of the viewport but I couldn't, until I read the resize listener documentation.

### Useful Resources

-[HTML symbol](https://www.toptal.com/designers/htmlarrows) - This helped me to add html code to add symbols in my page -[Keyframes scss](https://dev.to/inverseswirl/how-to-add-keyframes-animation-code-in-scss-46k8) - This article helped to understand better the usage of mixins in scss.
