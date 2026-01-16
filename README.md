# Sentia Works

산업용 센싱 솔루션 전문 기업 Sentia의 공식 웹사이트입니다.

## 기술 스택

이 프로젝트는 다음 기술로 구축되었습니다:

- **Vite** - 빠른 빌드 도구
- **TypeScript** - 타입 안정성
- **React** - UI 라이브러리
- **shadcn-ui** - UI 컴포넌트
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅

## 시작하기

### 필수 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn

### 설치 및 실행

```sh
# 1. 저장소 클론
git clone <YOUR_GIT_URL>

# 2. 프로젝트 디렉토리로 이동
cd <YOUR_PROJECT_NAME>

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

개발 서버는 기본적으로 `http://localhost:8080`에서 실행됩니다.

## 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드 미리보기
- `npm run lint` - 코드 린팅

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 훅
├── lib/           # 유틸리티 함수
└── assets/        # 정적 파일 (이미지 등)
```

## 배포

프로젝트를 빌드하려면:

```sh
npm run build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.
