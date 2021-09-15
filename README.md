# About
- A discord.js Package with Fun commands! Works With Slash and Normal Commands!
- Join our [Support Server](https://discord.gg/jDP2FbvCdk) for help

# Installation

```npm i djs-misc```

# Example usage

```
USE ACCORDING TO YOUR COMMAND HANDLER
```

**ROAST**
=== 

*NORMAL COMMAND*

```js
     const { Misc } = require('djs-misc')
        const misc = new Misc({
        message: message,
        embedFooter: "Made With djs-misc", //The Footer of the embed
        embedTitle: "Get Roasted", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        misc.roast()
```

=== 

*SLASH COMMAND*


```js
 const { Slash } = require('djs-misc')
        const slash = new Slash({
        args: args,
        slashCommand: true,
        interaction: interaction,
        embedFooter: "Made With djs-misc", //The Footer of the embed
        embedTitle: "Get Roasted!", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.roast()
```

**DAD JOKE**
===

```js
     const { Misc } = require('djs-misc')
        const misc = new Misc({
        message: message,
        embedFooter: "Made With djs-misc", //The Footer of the embed
        embedTitle: "Here's a Dad Joke", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        misc.dadJoke()
```

=== 

*SLASH COMMAND*


```js
 const { Slash } = require('djs-misc')
        const slash = new Slash({
        args: args,
        slashCommand: true,
        interaction: interaction,
        embedFooter: "Made With djs-misc", //The Footer of the embed
        embedTitle: "Here's a Dad Joke", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        slash.dadJoke()
```




# Note: 
Please Respect the license and dont just copy  the whole thing as paste as your own package!

# Updates

You Can use this package with djs-13 by installing djs-utils@dev

# Credits

Our Other packages:
- [djs-games](https://www.npmjs.com/package/djs-games) - A package for discord games
- [djs-anime](https://www.npmjs.com/package/djs-anime) - A package for anime commands
- [djs-utils](https://www.npmjs.com/package/djs-misc) - A package for misc commands

# Help
## Join our Support Server for help
<a href="https://discord.gg/jDP2FbvCdk"><img src="https://invidget.switchblade.xyz/jDP2FbvCdk" /></a>

