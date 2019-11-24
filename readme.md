# express-generator 설정
~~~bash
# 한번만 설치
npm i -g express-generator
# express 프로젝트를 만들 폴더로 이동하여 터미널 창에서 아래와 같이 실행
express folderName --views=pug
# 프로젝트가 생성된 폴더로 이동하여 package.json의 참조모듈을 일괄설치
npm i
# bin/www : 시작지점
# 각종 middleware 설치
npm i morgan 			#기본설치
npm i http-errors #기본설치
npm i sequelize
npm i mysql2
npm i rotating-file-stream
npm i multer
npm i express-session
npm i session-file-store

# 한번만 설치하는 global module
npm i -g sequelize-cli
npm i -g supervisor
npm i -g pm2
~~~