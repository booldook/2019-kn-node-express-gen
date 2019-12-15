# express-generator 설정
~~~bash
# 한번만 설치
npm i -g express-generator
# express 프로젝트를 만들 폴더로 이동하여 터미널 창에서 아래와 같이 실행
express folderName --view=pug
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
# 실무프로젝트에서 추가된 파일
npm i bcrypt # 암호화
npm i dotenv # .env : process.env
npm i passport # 로그인/세션관리 모듈
npm i connect-flash # 1회성 토스트 메세지
# config/models/seeders/migrations(db -> models)
sequelize init

# 한번만 설치하는 global module
npm i -g sequelize-cli
npm i -g supervisor
npm i -g pm2
~~~