1] How to push code changes to github and then to heroku.

1.1] check remote repositories:
     G:\my-node-projects\trexdb-web>git remote -v
     heroku  https://git.heroku.com/mysterious-brook-21621.git (fetch)
     heroku  https://git.heroku.com/mysterious-brook-21621.git (push)
     origin  https://github.com/tdoke/trexdb-web.git (fetch)
     origin  https://github.com/tdoke/trexdb-web.git (push)

1.2] push local master changes to github:
     git push -u origin master

1.3] push local master changes to heroku
     heroku login
     git push heroku master

