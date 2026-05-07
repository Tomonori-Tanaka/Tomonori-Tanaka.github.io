# TASKS.md — 実装タスク

ステータス: `[ ]` 未着手 / `[~]` 進行中 / `[x]` 完了

## フェーズ 1: 基盤構築

- [x] `_quarto.yml` の作成（テーマ `journal`、ナビゲーション、二言語設定）
- [x] `ja/` ディレクトリの作成
- [x] GitHub Pages 用 `docs/` 出力設定の確認

## フェーズ 2: ページ実装（英語）

- [x] `index.qmd` — トップページ（自己紹介・研究概要・News・外部リンク）
- [x] `research.qmd` — 研究テーマ
- [x] `publications.qmd` — 論文リスト
- [x] `software.qmd` — ソフトウェア（Magesty.jl 等）
- [x] `cv.qmd` — 学歴・職歴・受賞
- [x] `contact.qmd` — 連絡先・外部リンク

## フェーズ 3: ページ実装（日本語）

- [x] `ja/index.qmd`
- [x] `ja/research.qmd`
- [x] `ja/publications.qmd`
- [x] `ja/software.qmd`
- [x] `ja/cv.qmd`
- [x] `ja/contact.qmd`

## フェーズ 4: 仕上げ・公開

- [x] 言語切り替えリンクの実装（Contact の右に配置）
- [ ] モバイル表示の確認
- [x] `quarto render` でビルド確認
- [ ] GitHub Pages へのデプロイ設定

## 未解決の TODO（要確認）

- [ ] 公開用メールアドレス（`contact.qmd` / `ja/contact.qmd` の TODO を埋める）
- [ ] GitHub Pages リポジトリ名・カスタムドメインの有無
