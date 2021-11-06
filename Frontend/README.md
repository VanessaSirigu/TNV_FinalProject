# TNV-IV-ED-FinalProject

1. Install nodejs, chart.js mamp and visual code studio. For chart.js:
  * npm i ng2-charts@2.4.2 --save
  * npm i chart.js --save
  
2. Database configuration: open mamp
  * click "open webStartPage"
  * open phpMyAdmin
  * new database "thenetfish"
  * new database "prova"
  * new database "movie_rating"
  * new database "film_comment_app"
  * import tab, select "webservice.sql" in root folder
  * "go"

3. Open visual code studio

4. New terminal, run "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser"

5. File -> Open folder "frontend"

6. Run "npm install" in terminal

7. Run "ng-serve"

8. File -> new terminal in visual studio code, cd ./Backend

9. Run "npm install", then "npm start" to run the backend

10. Film-comments-service -> new terminal cd .\src\FilmComments.RestAPIs\ and run   "dotnet run"

11. MovieRating -> new terminal and run "php artisan serve"

12. SBProject -> Open Spring Boot project with IntelliJ IDEA, build and run

13. go to url "localhost:4200" in your browser
