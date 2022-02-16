# Cloudflare

## What is Cloudflare?

[Cloudflare](https://www.cloudflare.com/en-ca/) protect and accelerate websites. Once a website is added to the service, its web traffic is routed through its global network and cached at the [edge](https://en.wikipedia.org/wiki/Edge_computing). They automatically optimize the delivery of web pages so visitors get the fastest page load times and best performance. They also block threats and limit abusive bots from wasting bandwidth and server resources.
They can do all that by sitting between your users and your [origin server](https://www.cloudflare.com/en-ca/learning/cdn/glossary/origin-server/). When a user asks for a webpage, Cloudflare comes in and get the required assets from your server, then delivers it to the user while keeping a copy they can serve quickly when the next request arrives.

## Adding your domain to Cloudflare

Adding your domain is pretty straightforward and you can find everything you need in the [official documentation](https://support.cloudflare.com/hc/en-us/articles/201720164-Creating-a-Cloudflare-account-and-adding-a-website). We suggest you simply jump right in and follow the on-screen instructions. Note that for security reasons, everything we host goes through their services. So if you plan on coming with us, might as well create your account now.
We also won't go into too many details here so we'll take for granted you have a basic understanding of [how DNS works](https://aws.amazon.com/route53/what-is-dns/).

## Page Rules

Page Rules let you control which Cloudflare settings trigger on a given URL. Only one Page Rule will trigger per URL, so it is helpful if you sort Page Rules in priority order, and make your URL patterns as specific as possible.

Here's what we usually suggest for a Grav site.

* `www.mysite.com/*` Forwarding URL (301) `https://mysite.com/$1`
* `*mysite.com/staging/*` Forwarding URL (302)  to `https://mysite.com`.  
* `*mysite.com/admin/*` Disable security and Cache Level: Bypass.  
* `*mysite.com/*` Cache Level: Cache Everything.

The last one will most likely prevent you from seeing your changes when updating your content so it might be a good idea to leave it off when you know you need to move things around or for client work.
We usually leave this one OFF more often than not and ask our customers to tell us when they require high availability so we can switch it ON.

!!! The Grav team is treating Cloudflare as a first-class citizen and made available one of the best [Cloudflare dashboard](https://getgrav.org/premium/cloudflare) around as a premium plugin.

## Cloudflare firewall rules

Nothing fancy here but we block the [top sources of cyberwarfare](https://www.privacyaffairs.com/geopolitical-attacks/).
At the moment, that would be...

* China
* Russia
* North Korea
* Iran

While we aim at being accessible and honest,  the number of attacks originating from those countries is just too much. Sorry about that. 🤷

## SSL/TLS Full (strict) and Cloudflare's origin certificates

Now that you are using Cloudflare, cPanel's autoSSL might give you an error each month. In order to resolve the error, you usually have to pause Cloudflare's services, run autoSSL, and turn the services back on again.

You can prevent this by using a Cloudflare Origin Certificate. A free TLS certificate issued by Cloudflare (valid for 15 years), that can be installed on your origin server to facilitate end-to-end encryption for your visitors using HTTPS. If not already set, you can then optionally change the SSL setting about to use “Full (strict)” mode.

Cloudflare (and Calotte) recommends [this guide](https://www.digicert.com/kb/ssl-certificate-installation-apache-cpanel.htm) if you need help installing the certificate on your cPanel account.

You will probably need Cloudflare's CA Bundle at one point and since it might be a bit hard to find, here it is...

```
-----BEGIN CERTIFICATE-----
MIIEADCCAuigAwIBAgIID+rOSdTGfGcwDQYJKoZIhvcNAQELBQAwgYsxCzAJBgNV
BAYTAlVTMRkwFwYDVQQKExBDbG91ZEZsYXJlLCBJbmMuMTQwMgYDVQQLEytDbG91
ZEZsYXJlIE9yaWdpbiBTU0wgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MRYwFAYDVQQH
Ew1TYW4gRnJhbmNpc2NvMRMwEQYDVQQIEwpDYWxpZm9ybmlhMB4XDTE5MDgyMzIx
MDgwMFoXDTI5MDgxNTE3MDAwMFowgYsxCzAJBgNVBAYTAlVTMRkwFwYDVQQKExBD
bG91ZEZsYXJlLCBJbmMuMTQwMgYDVQQLEytDbG91ZEZsYXJlIE9yaWdpbiBTU0wg
Q2VydGlmaWNhdGUgQXV0aG9yaXR5MRYwFAYDVQQHEw1TYW4gRnJhbmNpc2NvMRMw
EQYDVQQIEwpDYWxpZm9ybmlhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
AQEAwEiVZ/UoQpHmFsHvk5isBxRehukP8DG9JhFev3WZtG76WoTthvLJFRKFCHXm
V6Z5/66Z4S09mgsUuFwvJzMnE6Ej6yIsYNCb9r9QORa8BdhrkNn6kdTly3mdnykb
OomnwbUfLlExVgNdlP0XoRoeMwbQ4598foiHblO2B/LKuNfJzAMfS7oZe34b+vLB
yrP/1bgCSLdc1AxQc1AC0EsQQhgcyTJNgnG4va1c7ogPlwKyhbDyZ4e59N5lbYPJ
SmXI/cAe3jXj1FBLJZkwnoDKe0v13xeF+nF32smSH0qB7aJX2tBMW4TWtFPmzs5I
lwrFSySWAdwYdgxw180yKU0dvwIDAQABo2YwZDAOBgNVHQ8BAf8EBAMCAQYwEgYD
VR0TAQH/BAgwBgEB/wIBAjAdBgNVHQ4EFgQUJOhTV118NECHqeuU27rhFnj8KaQw
HwYDVR0jBBgwFoAUJOhTV118NECHqeuU27rhFnj8KaQwDQYJKoZIhvcNAQELBQAD
ggEBAHwOf9Ur1l0Ar5vFE6PNrZWrDfQIMyEfdgSKofCdTckbqXNTiXdgbHs+TWoQ
wAB0pfJDAHJDXOTCWRyTeXOseeOi5Btj5CnEuw3P0oXqdqevM1/+uWp0CM35zgZ8
VD4aITxity0djzE6Qnx3Syzz+ZkoBgTnNum7d9A66/V636x4vTeqbZFBr9erJzgz
hhurjcoacvRNhnjtDRM0dPeiCJ50CP3wEYuvUzDHUaowOsnLCjQIkWbR7Ni6KEIk
MOz2U0OBSif3FTkhCgZWQKOOLo1P42jHC3ssUZAtVNXrCk3fw9/E15k8NPkBazZ6
0iykLhH1trywrKRMVw67F44IE8Y=
-----END CERTIFICATE-----
```

## Emails

Chances are, you are using emails. And chances are, you will eventually run in some kind of issues with email delivery when using Cloudflare. So here's a nice example of what kind of DNS records you'll want whenever you put a new website online.

```
A	mail XX.XX.XXX.XXX	DNS Only
MX	domain.com	mail.domain.com
```
