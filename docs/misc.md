## cPanel (WHM) SSL renewal issues 

https://support.cpanel.net/hc/en-us/articles/4411838154903-cPanel-SSL-issued-90-day-SSL-certificates-are-renewed-three-days-before-expiration

First, reset the hostname certificate to a self-signed one:

`for service in ftp exim dovecot cpanel ; do whmapi1 --output=jsonpretty reset_service_ssl_certificate service=$service ;done`

Next, move aside the old CSR (if it exists):

`mv /var/cpanel/hostname_cert_csrs{,.cpbkp} -v`

Finally, run checkallsslcerts to order a new certificate:

`/usr/local/cpanel/bin/checkallsslcerts`
