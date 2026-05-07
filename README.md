# Personal Website — Tomonori Tanaka

Quarto + GitHub Pages で構築した研究者向け個人ホームページ。

## セットアップ

```bash
# Quarto のインストール（未インストールの場合）
# https://quarto.org/docs/get-started/

# サイトのビルド
quarto render

# ローカルプレビュー
quarto preview
```

出力先は `docs/`。`docs/` を push すると GitHub Pages に反映される。

## サイト更新

### 情報源

このサイトの研究者情報は以下を一次情報源とする。

| 情報 | URL |
|------|-----|
| プロフィール全般 | https://researchmap.jp/tomonori-tanaka |
| 論文リスト | https://researchmap.jp/tomonori-tanaka/published_papers |
| 研究プロジェクト | https://researchmap.jp/tomonori-tanaka/research_projects |
| 開発ソフトウェア | https://github.com/Tomonori-Tanaka |

### 最新情報を反映する

Claude Code に以下のように指示すると、各一次情報源から最新情報を取得してページに反映できる。

**論文・プロフィール（ResearchMap）:**

```
researchmap から最新情報を取得して、publications.qmd と SPEC.md を更新して
```

**開発ソフトウェア（GitHub）:**

```
https://github.com/Tomonori-Tanaka から最新のリポジトリ情報を取得して、software.qmd と ja/software.qmd を更新して
```

**両方まとめて反映する場合:**

```
researchmap と https://github.com/Tomonori-Tanaka から最新情報を取得して、各ページと SPEC.md を更新して
```

### 手動更新の場合

- 論文追加 → `publications.qmd` と `ja/publications.qmd` を両方編集
- 職歴・学歴変更 → `cv.qmd` と `ja/cv.qmd` を両方編集
- 研究テーマ追加 → `research.qmd` と `ja/research.qmd` を両方編集

英語版・日本語版は常にセットで更新すること（二言語同期ルールは `CLAUDE.md` 参照）。

## ファイル構成

```
/
├── index.qmd          # トップページ（英語）
├── research.qmd       # 研究（英語）
├── publications.qmd   # 論文（英語）
├── software.qmd       # ソフトウェア（英語）
├── cv.qmd             # CV（英語）
├── contact.qmd        # お問い合わせ（英語）
├── ja/                # 日本語ページ
│   ├── index.qmd
│   ├── research.qmd
│   ├── publications.qmd
│   ├── software.qmd
│   ├── cv.qmd
│   └── contact.qmd
├── docs/              # ビルド出力（GitHub Pages 公開用）
├── SPEC.md            # サイト仕様書
├── STYLE_GUIDE.md     # 文体・翻訳ガイド
├── TASKS.md           # 実装タスク
└── CLAUDE.md          # Claude Code 向け作業ルール
```
