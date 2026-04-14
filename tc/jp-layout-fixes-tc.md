# JP 버전 레이아웃 수정 테스트케이스

## 작업 파일 목록

- [src/imports/Main01_JP.tsx](../src/imports/Main01_JP.tsx)
- [src/app/jp/pages/JpReservationPage.tsx](../src/app/jp/pages/JpReservationPage.tsx)
- [src/app/jp/pages/JpPromotionPage.tsx](../src/app/jp/pages/JpPromotionPage.tsx)
- [src/app/jp/pages/JpPromotionDetailPage.tsx](../src/app/jp/pages/JpPromotionDetailPage.tsx)

---

## TC-001 | 홈페이지 — All-depth Lifting 배지 1줄 표시

**대상 파일:** [src/imports/Main01_JP.tsx](../src/imports/Main01_JP.tsx)  
**수정 위치:** Frame43 컴포넌트 내 liftingCards 배지 (`w-[145px]` → `w-auto px-[12px]` + `whitespace-nowrap`)

### 테스트 절차
1. `http://localhost:5173/jp` 접속
2. All-depth Lifting 섹션까지 스크롤 (약 3240px)
3. 4장의 카드(Epidermis & Dermis / Fat / Fascia / Muscle) 확인

### 기대값
- 각 카드의 「プレミアムリフティング」 배지가 **1줄**로 표시됨
- 배지 너비가 텍스트에 맞게 자동 조정됨

### 실패 조건
- 「プレミアムリフティ」와 「ング」가 줄 바꿈되어 2줄로 표시됨

---

## TC-002 | 예약 페이지 — 3카드 본문 텍스트 표시

**대상 파일:** [src/app/jp/pages/JpReservationPage.tsx](../src/app/jp/pages/JpReservationPage.tsx)  
**수정 위치:** Kakao Talk 카드 본문 텍스트 (「チャンネルを追加」→「を追加」, 「お問い合わせ」→「ご連絡」 로 단축)

### 테스트 절차
1. `http://localhost:5173/jp/reservation` 접속
2. 「ご相談・ご予約案内」 섹션까지 스크롤
3. 3개 카드(お電話 / カカオトーク / ネイバー) 본문 텍스트 확인

### 기대값
- **お電話 카드:** 본문 2줄
  - 1줄: 「診療時間内にお電話いただければ」
  - 2줄: 「丁寧にご予約をお手伝いします。」
- **カカオトーク 카드:** 본문 2줄
  - 1줄: 「カカオトークを追加いただければ」
  - 2줄: 「いつでもお気軽にご連絡いただけます。」
- **ネイバー 카드:** 본문 2줄
  - 1줄: 「ネイバー予約を通じて」
  - 2줄: 「簡単にご相談をお申し込みください。」

### 실패 조건
- 어느 카드에서든 본문이 3줄 이상 표시됨
- カカオトーク 카드에서 「ます。」만 3번째 줄에 고립됨

---

## TC-003 | 프로모션 페이지 — 카드 타이틀 1줄 표시

**대상 파일:** [src/app/jp/pages/JpPromotionPage.tsx](../src/app/jp/pages/JpPromotionPage.tsx)  
**대상 파일:** [src/app/jp/pages/JpPromotionDetailPage.tsx](../src/app/jp/pages/JpPromotionDetailPage.tsx)  
**수정 위치:** `monthlyEvents[0].title` — 「パッケージ」→「プラン」으로 변경 (18자→16자)

### 테스트 절차
1. `http://localhost:5173/jp/promotion` 접속
2. February 프로모션 카드 타이틀 확인
3. 카드 클릭 후 상세 페이지 타이틀도 확인

### 기대값
- 목록 페이지: 「2月シグネチャーアンチエイジングプラン」이 **1줄**로 표시됨
- 상세 페이지: 타이틀이 1줄로 표시됨

### 실패 조건
- 「2月シグネチャーアンチエイジングパッケー」와 「ジ」가 각각 다른 줄에 표시됨

---

## TC-004 | 언어 플래그 — 활성 상태 표시 (회귀)

**대상 파일:** [src/imports/Main01_JP.tsx](../src/imports/Main01_JP.tsx)  
**대상 파일:** [src/imports/Main01.tsx](../src/imports/Main01.tsx)

### 테스트 절차
1. `http://localhost:5173/` 접속 → 헤더 우측 상단 플래그 확인
2. JP 플래그 클릭 → `/jp`로 이동 확인
3. `http://localhost:5173/jp` 접속 → 플래그 상태 확인
4. KR 플래그 클릭 → `/`로 이동 확인
5. 각 페이지에서 햄버거 메뉴 열어 Language 섹션도 확인

### 기대값
- **한국어 페이지 (/):** KR 플래그 = dim (opacity-40), JP 플래그 = 정상 표시·클릭 가능
- **일본어 페이지 (/jp):** JP 플래그 = dim (opacity-40), KR 플래그 = 정상 표시·클릭 가능
- 햄버거 메뉴 내 Language 섹션도 동일 상태

### 실패 조건
- 현재 페이지의 플래그가 밝게 표시됨 (반전 상태)
- 플래그 클릭 시 해당 페이지로 이동하지 않음

---

## TC-005 | JP 서브페이지 전체 라우트 소통 확인 (회귀)

**대상 파일:** [src/app/routes.tsx](../src/app/routes.tsx)  
**대상 디렉토리:** [src/app/jp/pages/](../src/app/jp/pages/)

### 테스트 절차
아래 각 URL에 직접 접속하여 404 없이 페이지가 렌더링되는지 확인

| URL | 페이지 |
|-----|--------|
| `/jp` | JP 홈페이지 |
| `/jp/about/brand-value` | 브랜드 가치 |
| `/jp/about/doctor` | 의사 소개 |
| `/jp/about/gallery` | 갤러리 |
| `/jp/about/location` | 오시는 길 |
| `/jp/alldepth/redefine` | RE:DEFINE |
| `/jp/alldepth/lifting` | 올뎁스 리프팅 |
| `/jp/treatment/lifting` | 리프팅 |
| `/jp/treatment/pigmentation` | 색소·붉은기 |
| `/jp/treatment/acne-pore` | 모공·여드름 흉터 |
| `/jp/treatment/petit` | 쁘띠 성형 |
| `/jp/treatment/skin-booster` | 스킨부스터 |
| `/jp/treatment/collagen-booster` | 콜라겐부스터 |
| `/jp/treatment/body` | 바디 |
| `/jp/treatment/skincare` | 스킨케어 |
| `/jp/treatment/iv-therapy` | 영양수액 |
| `/jp/reservation` | 예약 |
| `/jp/promotion` | 프로모션 |
| `/jp/promotion/:id` | 프로모션 상세 |
| `/jp/community` | 커뮤니티 |
| `/jp/community/column` | 칼럼 |
| `/jp/community/before-after` | 비포애프터 |
| `/jp/community/inquiry` | 온라인 문의 |

### 기대값
- 모든 URL에서 페이지가 정상 렌더링됨
- 헤더 메뉴 각 링크가 대응하는 JP 페이지로 이동함
- 404 또는 흰 화면 없음

### 실패 조건
- 어느 URL에서든 404 또는 흰 화면이 표시됨
