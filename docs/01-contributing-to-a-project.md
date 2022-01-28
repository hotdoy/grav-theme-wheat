# Contributing to an existing project

This section is for peoples jumping in on an already started project using Wheat as foundation. If you want to start a fresh project, you should probably be in the [Creating a new project](https://github.com/hotdoy/grav-theme-wheat/blob/main/docs/00-creating-a-new-project.md) section.

## What you'll need

- About 30 minutes (half that if you've done this before).
- A [GitHub](https://github.com/) account.
- Some knowledge of Git. (I recommend using the [Github Desktop App](https://desktop.github.com/)).
- A comand line interface (we will be using Window's Command Prompt).
- XAMPP or any similar web server solution (I'll be moving to Grav built-in server soon).
- The name of the project (we will use `coolproject`).

## Local setup

- On your computer, create a folder named `coolproject`.
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav archive and put it in you `coolproject` folder.
- From inside the `grav-admin` folder, cut ✂️ the `user` folder and paste it right next to `grav-admin`.
- At that point, your project folder should look like this:

```bash
mycoolname
  grav-admin
  user
```

- Clone the `coolproject` theme repo you are working on in the project folder, next to the other ones so it looks like...

```bash
mycoolname
  grav-admin
  grav-theme-coolproject
  user
```

- Make sure you switch to the `develop` branch before you start working or create your own feature branch. Do not commit to `master` since it should only be used for the production-ready version of the theme.

### Symlinks

If you followed this guide, your 3 main directories (admin, theme and user) are side by side in our project folder so we'll now want to [symlink](https://en.wikipedia.org/wiki/Symbolic_link#:~:text=In%20computing%2C%20a%20symbolic%20link,and%20that%20affects%20pathname%20resolution.) everything together. You'll have to change the paths bellow to fit with your setup. I usually keep a copy of this the `_SETUP` folder in the theme repo so I can get back on my feet quickly if anything happen.

**Local webroot to Grav install**

`mklink /D D:\xampp\htdocs\coolproject D:\coolproject\grav-admin`

**grav-admin to user**

`mklink /D D:\coolproject\grav-admin\user D:\coolproject\user`

**user to theme**

`mklink /D D:\coolproject\user\themes\coolproject D:\coolproject\grav-theme-coolproject`

Test your setup using your favorite browser and going to your local webroot (something like `127.0.0.1/coolproject`).
If everything goes well, Grav will prompt you to create an account. At this point, you can consider the whole operation a success.

Login into the admin panel, go to `Themes` and activate the new theme.
