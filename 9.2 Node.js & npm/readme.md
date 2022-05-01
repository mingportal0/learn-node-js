### package.json 생성
npm init

### 전역 설치 패키지 확인
npm ls -g

### 전역 패키지 설치 폴더 확인
npm root -g

### 패키지 정보 참조
npm view <package-name>

### eslint-config-airbnb와 함께 설치해야 하는 다른 패키지 확인
npm view eslint-config-airbnb@latest peerDependencies