# MIXINS

Mixins is a code that is used so many times.So scss provide the facility we write a code once and use it so many times.
```SCSS
@mixin use-code{
    font-size:20px;
    border :2px solid white;
    border-radius:10px;
    background-color:teal;

}


button {
    @include use-code;
    color:white;
}
```