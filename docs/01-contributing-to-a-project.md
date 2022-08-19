# Contributing to an existing project

This section is for peoples jumping in on an already started project using Wheat as foundation. If you want to start a fresh project, you should probably be in the [Creating a new project](https://github.com/hotdoy/grav-theme-wheat/blob/master/docs/00-creating-a-new-project.md) section.

## What you'll need

- About 30 minutes (half that if you've done this before).
- A [GitHub](https://github.com/) account.
- Some knowledge of Git. (I recommend using the [Github Desktop App](https://desktop.github.com/)).
- A comand line interface (we will be using Window's Command Prompt).
- XAMPP, any similar solution or straight up PHP (You don't NEED PHP8+ but you should).
- The name of the project (we will use `projectName`).

## Local setup

- On your computer, create a folder named `projectName`.
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav archive and put it in you `projectName` folder.
- From inside the `grav-admin` folder, cut ✂️ the `user` folder and paste it right next to `grav-admin`.
- At that point, your project folder should look like this:

```bash
mycoolname
  grav-admin
  user
```

- Clone the `projectName` theme repo you are working on in the project folder, next to the other ones so it looks like...

```bash
mycoolname
  grav-admin
  grav-theme-projectName
  user
```

- Make sure you switch to the `develop` branch before you start working or create your own feature branch. Do not commit to `master` since it should only be used for the production-ready version of the theme.

### Symlinks

If you followed this guide, your 3 main directories (admin, theme and user) are side by side in our project folder so we'll now want to [symlink](https://en.wikipedia.org/wiki/Symbolic_link#:~:text=In%20computing%2C%20a%20symbolic%20link,and%20that%20affects%20pathname%20resolution.) everything together. You'll have to change the paths bellow to fit with your setup.

Windows:

`mklink /D D:\themeName\grav-admin\user D:\themeName\user`  
`mklink /D D:\themeName\user\themes\themeName D:\themeName\grav-theme-themeName`

Mac/Linux:

`ln -s /Users/userNane/Documents/projectName/user /Users/userNane/Documents/projectName/grav-admin/user`  
`ln -s /Users/username/Documents/projectName/grav-theme-themeName /Users/vincentrouleau/Documents/projectName/user/themes/themeName`

### Grav's built-in Web Server

Once you've read the [instructions](https://getgrav.org/blog/using-builtin-webserver) and installed everything properly, run `bin/grav server` from Grav  inside your project `projectName/grav-admin`.
If everything goes well, the server should return an IP for you to see your local site. (usually at `127.0.0.1:8000`).

Login into the admin panel, go to `Themes` and activate your new theme.