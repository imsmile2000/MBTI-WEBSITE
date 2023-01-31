MBTI 웹사이트 링크: https://quiet-treacle-1ef786.netlify.app

## 오픈 그래프와 트위터 카드

The Open Graph protocol & Twitter Cards  
웹페이지가 소셜 미디어(페이스북, 트위터 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.


```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="내숨캐" />
<meta property="og:title" content="내 안에 숨어있는 직업캐 찾기!" />
<meta property="og:description" content="누구나 찰떡인 직업이 있어요! 내 안에 숨어있는 직업캐를 찾아보세요!" />
<meta property="og:image" content="/images/thumbnail.jpg" />
<meta property="og:url" content="https://prismatic-monstera-4c9d6a.netlify.app/" />

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="내숨캐" />
<meta property="twitter:title" content="내 안에 숨어있는 직업캐 찾기!" />
<meta property="twitter:description" content="누구나 찰떡인 직업이 있어요! 내 안에 숨어있는 직업캐를 찾아보세요!" />
<meta property="twitter:image" content="/images/thumbnail.jpg" />
<meta property="twitter:url" content="https://prismatic-monstera-4c9d6a.netlify.app/" />
```

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단한 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)
