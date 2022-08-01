# Setting up a domain on your localhost (XAMPP)

While this is totally optional, I strongly suggest that you setup a domain on your localhost (and virtualhost) using XAMPP. This will allow you to work in a more realistic environment and prevent URL shenanigans while in development.

## Adding a domain to your localhost

Go to `windows\system32\drivers\etc\hosts` and add...

```bash
127.0.0.1       myproject.localhost.com
```

... at the end of the file.
