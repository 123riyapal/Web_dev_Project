# Nesting 
 
## 👇 we can do Nesting in Saas like other programming language.
```scss
$bg-color:teal;
body{
    background-color: $bg-color;
}
header{
    background-color:rgb(23, 167, 148);
    nav{
        ul{
            display: flex;
            li {
                    list-style:none ;
                a{
                    text-decoration: none;
                    color: white;
                    padding: 12px;
                }
            }
        }
    }
}
```


 