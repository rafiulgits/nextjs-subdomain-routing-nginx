# Sub-Domain based content routing

Suppose you are running a platform where you want to provide sub-domain for each of your users.

You have your platform `example.com` and your users has their own unique handler/username.
You want to allow them to access their profile `username.example.com` instead of `example.com/username` within a same web app; I mean you want to serve both sub-domain based pages and main domain based pages by a single application.
Even if you want to change the `username.example.com` to `username.anotherdomain.com` then it will also possible through nginx configuration.

My Requirements

Site Routes: (example.com)

- /
- /about

User Routes: (username.example.com)

- /
- /about

---

**Nginx Configuration**

Requirements:

- Forward 1st level wildcard and base domain to nginx server
- Proxy nginx to nextjs server

```

server {
    listen 80;
    server_name ~^(?<subdomain>\w+)\.example\.com$;
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://$subdomain.localhost:3000$request_url;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

---

**Another use-case**
If you want to route localhost path `/[user]/followers` in sub-domain based route path `[user].domain.com/followers` then you have to ensure 2 things

- Nginx route sub-domain to path : rewrite `[user].domain.com` -> `localhost/[user]`

  ```
  server {
    listen 80;
    server_name     ~^(?<subdomain>\w+)\.example\.com$;
    location / {
         proxy_pass http://localhost:8080/$subdomain$request_url
    }
  }

  ```

- Nextjs route path to sub-domain : link `/[user]` -> href `[user].domain.com`
  use any custom hook to navigate this
