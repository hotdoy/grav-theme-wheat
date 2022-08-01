# Creating a new project

This section is for starting a project from scratch using Wheat as a starting point. If you are working on an already started project, you should probably be in the [Contributing to an existing project](https://github.com/hotdoy/grav-theme-wheat/blob/master/docs/01-contributing-to-a-project.md) section.

## What you'll need

- About 30 minutes (half that if you've done this before).
- A [GitHub](https://github.com/) account.
- Some knowledge of Git. (I recommend using the [Github Desktop App](https://desktop.github.com/)).
- A comand line interface (we will be using Window's Command Prompt).
- XAMPP, any similar solution or straight up PHP (You don't NEED PHP8+ but you should).
- A cool name for your theme (Use it whenever we refer to `themeName`).

## Local setup

- Head to [GitHub](https://github.com/) and create a new repo named `grav-theme-themeName`. (The grav-theme- prefix is not required but is good practice in Grav development. It is also required if you plan on releasing on the GPM). You can close Github once the repo is added. We'll get back to it late.
- On your computer, create a folder named `themeName` (or anything really) in a nice location (you won't be able to move it after).
- [Download](https://getgrav.org/downloads) the latest version of GRAV Core + ADMIN.
- Unzip the downloaded Grav archive and put it in you `themeName` folder.
- From inside the `grav-admin` folder, cut ✂️ the `user` folder and paste it right next to `grav-admin`.
- At that point, your project folder should look like this:

```bash
themeName
  grav-admin
  user
```

- Clone your theme repo in the project folder, next to the other ones so it looks like...

```bash
themeName
  grav-admin
  grav-theme-themeName
  user
```

- Delete the content of grav-theme-themeName, if there is any.
- [Download](https://github.com/hotdoy/grav-theme-wheat/archive/refs/heads/master.zip) Wheat's Master branch.
- Unzip the downloaded `grav-theme-wheat`...
- and dump it's entire content in your `grav-theme-themeName` directory.

### Cleaning and renaming

It's time to make your theme unique, ensuring you don't receive unwanted updates trough the [GPM](https://learn.getgrav.org/17/cli-console/grav-cli-gpm) (if I ever publish Wheat on it).

- Rename `wheat.yaml` to `themeName.yaml`
- Rename `wheat.php` to `themeName.php` and change any reference to `wheat` to `themeName` in the file (make sure you follow capitalization).
- Erase the content of CHANGELOG.md and start fresh with version v0.1.0 (or whatever you think is best).
- Replace references to `wheat` in `blueprints.yaml` and add your own contact informations.
- Delete or modify the content of `_ROOT` to suit your needs (you might simply want to replace the favicons and modify the `site.webmanifest`).
- At that point, you probably saw the `serviceworker.js`. This is an experiment and you should absolutely delete it unless you feel like putting on your mad scientist hat.
- Replace `screenshot.jpg` and `thumbnai.jpg` with your own images while following the size and format of the ones provided.
- Commit to `master`. (congratulation! That's v0.1.0 of your new project.)
- Create a new branch named `develop` and publish it.
- From here on out, commit all changes to the new `develop` branch.

### Symlinks

If you followed this guide, your 3 main directories (admin, theme and user) are side by side in our project folder so we'll now want to [symlink](https://en.wikipedia.org/wiki/Symbolic_link#:~:text=In%20computing%2C%20a%20symbolic%20link,and%20that%20affects%20pathname%20resolution.) everything together. You'll have to change the paths bellow to fit with your setup. I usually keep a copy of this the `_SETUP` folder in the theme repo so I can get back on my feet quickly if anything happen.

Windows should look like:

`mklink /D D:\themeName\grav-admin\user D:\themeName\user`  
`mklink /D D:\themeName\user\themes\themeName D:\themeName\grav-theme-themeName`

And Mac/Linux should look like:

`ln -s /Users/userNane/Documents/projectName/user /Users/userNane/Documents/projectName/grav-admin/user`  
`ln -s /Users/username/Documents/projectName/grav-theme-themeName /Users/vincentrouleau/Documents/projectName/user/themes/themeName`

### Grav's built-in Web Server

Once you've read the [instructions](https://getgrav.org/blog/using-builtin-webserver) and installed everything properly, run `bin/grav server` from Grav  inside your project `projectName/grav-admin`.
If everything goes well, the server should return an IP for you to see your local site. (usually at `127.0.0.1:8000`).

Login into the admin panel, go to `Themes` and activate your new theme.
