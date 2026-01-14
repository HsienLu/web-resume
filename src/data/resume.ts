export const resumeData = {
  name: "陳咸儒",
  title: "Web Developer (Frontend-focused / Full-stack capable)",
  location: "新北",
  email: "sjps946403@gmail.com",
  github: "https://github.com/HsienLu",
  tagline:
    "個性謹慎、善於規劃，能正向應對突發狀況並即時回報；工作上擅長平衡產品設計與量產可行性，順利完成客戶需求。",
  summary:
    "具 2 年網頁開發 + 4 年硬體研發經驗，前端以 React 為主，並具備 Node.js / MySQL 後端能力。曾參與教育平台 AI 教學助手，負責 對話歷程記錄/查詢 等核心功能；亦具備 舊系統維護與風險控管 經驗，重視可維護性、穩定性與清晰文件。",
  highlights: [
    "前端主力：React 元件化、頁面一致性、表單互動與使用者流程（RWD / UI 可用性）",
    "能寫後端：Node.js / Express API、MySQL 資料表設計與查詢條件規劃",
    "舊系統維護能力：在既有架構與限制下進行擴充/修復",
  ],
  skills: {
    frontend: ["React", "Vite", "Tailwind CSS", "RWD"],
    backend: ["Node.js", "Express", "REST API"],
    database: ["MySQL (Schema / 索引 / 查詢)"],
    ai: ["AI 教學助手流程", "對話歷程記錄", "RAG / embedding 概念"],
    devops: ["Ubuntu", "服務常駐與基本維護"],
  },
  projects: [
    {
      title: "教育平台｜ AI 教學助手：對話歷程記錄系統",
      repo: "",
      tech: ["React", "Node.js", "MySQL"],
      desc: [
        "負責 對話歷程記錄與查詢 功能，讓師生互動可被完整追溯與管理",
        "串接前端頁面與後端 API，確保記錄寫入、查詢與顯示流程一致且穩定",
        "參與資料結構與查詢條件規劃，支援依使用者/課程或專案維度快速定位紀錄",
        "關鍵字：Chat Logs、Query Flow、可追溯性、可維運",
      ],
    }, {
      title: "Key Traveler ─ 鍵盤電商網站 (團隊專案)",
      repo: "https://github.com/HsienLu/Key_traveler_big-stable-",
      tech: [
        "React",
        "Bootstrap",
        "Node.js",
        "Express",
        "MySQL"
      ],
      desc: [
        "以 React (Next.js) 架構開發完整前端頁面，負責會員登入、註冊、忘記密碼與第三方登入功能。",
        "使用 Bootstrap 進行 RWD 切版與設計，使使用者介面具有一致性與響應式體驗。",
        "串接後端 API（Express + MySQL）處理會員帳號建立、驗證與第三方登入流程，並用 Axios 封裝請求邏輯。",
        "整合 Google API 進行第三方登入授權流程，提高使用者登入便利性。",
        "使用 Ant Design 優化互動元件與提示訊息，提升 UI/UX 友善度。",
        "參與資料庫設計（會員基本資料表與第三方註冊資料表）並撰寫企劃書與簡報文件，展示完整開發流程與設計思路。",
      ],
    },
  ],
  experience: [
    {
      company: "台灣科技大學",
      role: "網頁工程師",
      period: "2 年 ",
      desc: [
        "直接與使用者/單位對接需求，負責 需求釐清 → 規格化 → 架構規劃 → 開發交付 → 維護迭代 的完整流程",
        "工作內容包含 新功能開發、既有系統維護、UI/流程調整、資料處理與前後端串接，可在陌生模組中定位問題並完成交付",
        "在有限資源下完成跨需求整合，確保功能 可用、可維運、變更有依據（以文件/流程整理降低溝通成本）",
        "代表性範圍：教學平台功能擴充，並導入AI系統協助教學，提供歷程記錄",
      ],
    },
    {
      company: "硬體研發",
      role: "R&D",
      period: "4 年",
      desc: [
        "研發導向流程：規格制定、測試驗證、問題分析與文件化",
        "將可靠度與品質思維帶入軟體開發：重視可重現、可驗證與長期維護",
      ],
    },
  ],
  education: ["長庚大學 機械工程研究所｜碩士"],
};
