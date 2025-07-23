app router

모든 페이지는 page.tsx파일이 있어야 한다

Next.js에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
('use client' 사용 여부와 상관없음)

client component
클라이언트 컴포넌트를 사용하려면 파일 상단, import 위에 React "use client" 지시어를 추가하면 됩니다.
"use client"은 서버와 클라이언트 컴포넌트 모듈 간의 경계를 선언하는 데 사용됩니다.
즉, 파일에 "use client"을 정의하면 하위 컴포넌트를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주됩니다.

https://nextjs.org/docs/app/building-your-application/rendering/client-components

use client -> use hydrate 가 더 명확하지 않았을까..

server component
