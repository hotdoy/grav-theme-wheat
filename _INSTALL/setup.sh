#!/bin/bash
echo "Enter your theme's name (without the grav-theme part) ... "  
read THEME_NAME
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
    windows() { [[ -n "$WINDIR" ]]; }
    ADMIN_USER_DIR="$PWD"/grav-admin/user
    PROJECT_USER_DIR="$PWD"/user
    ADMIN_THEME_DIR="$PWD"/user/themes/"$THEME_NAME"
    PROJECT_THEME_DIR="$PWD"/grav-theme-"$THEME_NAME"
    mv grav-admin/user .
    echo "Creating symbolic links..."
    echo "Done!"
    if windows; then
        MSYS=winsymlinks:nativestrict ln -s $PROJECT_USER_DIR $ADMIN_USER_DIR
        MSYS=winsymlinks:nativestrict ln -s $PROJECT_THEME_DIR $ADMIN_THEME_DIR
    else
        ln -s $PROJECT_USER_DIR $ADMIN_USER_DIR
        ln -s $PROJECT_THEME_DIR $ADMIN_THEME_DIR
    fi
then
    [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
fi
