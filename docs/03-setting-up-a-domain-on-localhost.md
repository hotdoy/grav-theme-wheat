# Setting up a domain on your localhost (XAMPP)

While this is totally optional, I strongly suggest that you setup a domain on your localhost (and virtualhost) using XAMPP. This will allow you to work in a more realistic environment and prevent URL shenanigans while in development.

## Adding a domain to your localhost

Go to `windows\system32\drivers\etc\hosts` and add...

```bash
127.0.0.1       myproject.localhost.com
```

... at the end of the file.

## Adding a virtual host to XAMPP

Go to `xampp\apache\conf\extra\httpd-vhostconf` and add...

```bash
<VirtualHost *:80>
  DocumentRoot "C:/xampp/htdocs/myproject"
  ServerName myproject.localhost.com
</VirtualHost>
```

... at the end of the file.

Reset XAMPP's Apache module (or the whole thing if you prefer) and test your new domain!
