  
  // 在專案資料中添加技術標籤
  export const projects = [
    {
      id: 1,
      title: 'UML Editor',
      description: 'UML Editor 是一款使用 Java 開發的 UML 圖編輯器，基於物件導向分析與設計（OOAD）原則，支援類別圖的生成以及修改、關聯線的生成以及修改、選取與編輯功能，並提供直覺化的 GUI 操作，此專案為研究所物件導向程式設計之課堂期末專題。',
      url: 'https://github.com/zackyen0603/UML_Editor',
      tags: ['Java', 'Swing','UML', 'GUI', 'OOAD','Software Engineering','Object-Oriented Programming'],
      startDate: '2023-02-01',
      endDate: '2023-06-30',
      bulletPoints: [
        '使用 Java 開發',
        '事件驅動與互動實現：實現事件監聽與處理機制，支援用戶拖放、縮放、連線等操作，確保 UML 圖表編輯過程中流暢的互動體驗。',
        '物件導向與模組化設計：採用物件導向原則與模組化架構，將各功能（如圖形繪製、事件處理、資料儲存等）分離，提升程式碼可維護性與擴展性。'
      ]
    },
    {
      id: 2,
      title: 'JudgeCoder',
      description: 'JudgeCoder 是一個基於大型語言模型（LLM）的自動化程式碼生成與驗證系統。透過自動化測試與 Chain-of-Thought 回饋機制，系統能夠根據測試結果反饋給 LLM 進行程式碼修正，有效提升了 GPT-3.5-turbo 模型在 HumanEval 測試集上的生成正確率。',
      url: 'https://github.com/zackyen0603/JudgeCoder',
      tags: ['LLM', 'AI', 'Automation Testing', 'Chain-of-Thought', 'HumanEval', 'Code Generation'],
      startDate: '2024-01-01',
      endDate: '2023-06-30',
      bulletPoints: [
        '自動化程式碼生成與測試：利用 LLM 依需求生成程式碼，並自動產生相應單元測試。執行測試後自動收集並分析錯誤結果。',
        '程式碼迭代機制：利用 Chain-of-Thought 將測試結果回饋給 LLM 逐步改善程式碼。',
        '模組化程式架構：劃分程式碼生成、測試數據生成、測試執行與結果評判等多個專責模組，易於維護與擴展。'
      ]
    },
    {
      id: 3,
      title: 'Linux 系統設計課堂專題',
      description: '此專案為修習Linux系統設計課程的課堂專題，於 Linux 系統上透過 trace 原始碼了解 Linux 系統的運作，並且透過在系統中新增 system call 並實際編譯 kernel 等實作，了解 Linux 系統的運作原理。',
      url: 'https://real-dugout-ab2.notion.site/2023-Linux-Project-193043802e69803ea9a4cd5d5d02fa48',
      tags: ['Linux', 'Kernel','C', 'Operating System', 'System Programming'],
      startDate: '2022-09-01',
      endDate: '2023-01-31',
      bulletPoints: [
        '透過 trace 原始碼了解 Linux 系統運作',
        '利用自訂 System Call 驗證不同執行緒（multi-thread）中各記憶體區段（例如 stack、TLS、heap、BSS、data、code、libraries）的共享與獨立性，並計算各區段的起始地址、結束地址與大小。',
        '修改與擴展 System Call（sys_vir2phy），使其能夠將傳入的虛擬地址透過遍歷 Page Table（利用 pgd_offset、pud_offset、pmd_offset、pte_offset_kernel）轉換為對應的實體地址。',
        '新增 System call 使系統能夠計算 process 在一段時間內的 context switch 次數。'
      ]
    },
    {
      id: 4,
      title: '個人網站',
      description: '這是一個使用 Next.js 開發的個人網站，展示了我的個人經歷以及相關介紹，將網站資料放置於Github中，並且透過 Vercel 部署，使用 Vercel 的 Edge Functions 提供即時的資訊更新。',
      url: 'https://example.com',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      startDate: '2024-07-31',
      endDate: 'current',
      bulletPoints: [
        '展示個人經歷與介紹',
        '使用 Next.js 開發',
        '儲存於 Github 中',
        '透過 Vercel 部署'
      ]
    }
  ];
  
  
  