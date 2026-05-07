# SPEC.md — サイト仕様書

## 1. 概要

| 項目 | 内容 |
|------|------|
| サイト種別 | 研究者向け個人ホームページ |
| 氏名（英） | Tomonori Tanaka |
| 氏名（日） | 田中友規 |
| 所属（英） | Institute of Science Tokyo, Department of Materials Science and Engineering |
| 所属（日） | 東京科学大学 物質理工学院 材料系 |
| 役職（英） | Specially Appointed Assistant Professor |
| 役職（日） | 特任助教 |
| 専門分野 | 計算材料科学 / Computational Materials Science |
| ORCID | https://orcid.org/0000-0001-7306-6770 |
| GitHub | https://github.com/Tomonori-Tanaka |
| Google Scholar | https://scholar.google.co.jp/citations?user=m2RlBXgAAAAJ&hl=en&oi=sra |
| ResearchMap | https://researchmap.jp/tomonori-tanaka |

## 2. ページ構成

| ページ | 英語ファイル | 日本語ファイル | 内容 |
|--------|------------|--------------|------|
| トップ | `index.qmd` | `ja/index.qmd` | 自己紹介・研究概要・最新情報 |
| 研究 | `research.qmd` | `ja/research.qmd` | 研究テーマ・プロジェクト |
| 論文 | `publications.qmd` | `ja/publications.qmd` | 論文・口頭発表・受賞 |
| ソフトウェア | `software.qmd` | `ja/software.qmd` | 開発ソフトウェア（Magesty.jl 等） |
| CV | `cv.qmd` | `ja/cv.qmd` | 学歴・職歴・業績一覧 |
| お問い合わせ | `contact.qmd` | `ja/contact.qmd` | 連絡先・外部リンク |

## 3. 二言語運用

- デフォルト言語: 英語
- 英語ページ: リポジトリ直下（`/`）
- 日本語ページ: `ja/` 以下
- 各ページに対応する言語切り替えリンクを設置
- 英語版・日本語版は同一のページ構成・セクション構成とする
- 翻訳方針は `STYLE_GUIDE.md` に従う

## 4. 各ページ仕様

### 4.1 トップページ（index）

- 氏名・所属・役職
- 研究の一言紹介
- 研究キーワード: 第一原理計算、有限温度磁性、永久磁石、フォノン物性、相平衡
- News セクション（論文発表・受賞など時系列）
- 外部リンク: ORCID、GitHub、Google Scholar、ResearchMap

### 4.2 研究（research）

主要テーマ:

1. **有限温度磁性の第一原理計算** — キュリー温度予測、磁性-フォノン結合
2. **交換相互作用パラメータ** — ノンコリニアスピン DFT・スピンクラスター展開による一般化スピンモデル
3. **フォノン物性** — 球面テンソル展開ベースのフォースコンスタント、熱膨張込み自由エネルギー計算
4. **永久磁石材料探索** — Nd–Fe 系磁性化合物の第一原理探索（転移学習・遺伝的アルゴリズム）
5. **相平衡** — Pd–Fe 合金の過剰体積の起源解明

TODO: 各テーマの説明図を用意する

### 4.3 論文（publications）

表示項目: 著者・タイトル・雑誌名・巻号・年・DOI リンク

論文一覧（researchmap より、2026年5月時点）:

1. Sayaka Ito, Insung Seo, Shimpei Tanaka, Mitsuru Endo, Yukio Tsutsui, **Tomonori Tanaka**, Yoshihiro Gohda. "First-Principles Exploration of Nd–Fe Magnetic Compounds Assisted by Transfer Learning and Genetic Algorithm." *Journal of the Physical Society of Japan* (2026).
2. Daigo Ito, Kota Hashimoto, **Tomonori Tanaka**, Yoshihiro Gohda. "Physically Interpretable Force Constants Based on Spherical Tensor Expansion." *Journal of the Physical Society of Japan* (2026).
3. **Tomonori Tanaka**, Yoshihiro Gohda. "General spin models from noncollinear spin density functional theory and spin-cluster expansion." *arXiv* (2025).
4. Kota Hashimoto, **Tomonori Tanaka**, Yoshihiro Gohda. "Efficient first-principles approach to Gibbs free energy with thermal expansion." *Physical Review B* (2025).
5. **Tomonori Tanaka**, Yoshihiro Gohda. "Impact of electron–spin coupling on exchange coupling parameters." *arXiv* (2024).
6. Manabu Watanabe et al. "Clarification of origin of positive excess volume of Pd–Fe binary alloys." *Acta Materialia* (2024).
7. **Tomonori Tanaka**, Yoshihiro Gohda. "Prediction of the Curie temperature considering the dependence of the phonon free energy on magnetic states." *npj Computational Materials* 6(1) (2020).
8. **Tomonori Tanaka**, Yoshihiro Gohda. "First-Principles Study of Magnetism-Dependent Phonons Governed by Exchange Ligand Field." *Journal of the Physical Society of Japan* 89(9), 093705 (2020).
9. **Tomonori Tanaka**, Yoshihiro Gohda. "First-principles prediction of one-dimensional giant Rashba splittings in Bi-adsorbed In atomic chains." *Physical Review B* **98**, 241409(R) (2018).

DOI・巻号・ページ番号は publications.qmd に反映済み。

### 4.4 ソフトウェア（software）

- **Magesty.jl** — Julia 製パッケージ（スピンクラスター展開による一般化スピンモデル構築）。2026年4月ポスター賞受賞。
  - リポジトリ: https://github.com/Tomonori-Tanaka/Magesty.jl
  - ドキュメント: https://tomonori-tanaka.github.io/Magesty.jl/dev/
- **SpinClusterMC.jl** — Magesty.jl 派生のモンテカルロパッケージ
  - リポジトリ: https://github.com/Tomonori-Tanaka/SpinClusterMC.jl

### 4.5 CV

学歴:

| 期間 | 機関 | 課程・学科 |
|------|------|----------|
| 2008.4–2013.3 | 都城工業高等専門学校 | 物質工学科 |
| 2013.4–2015.3 | 名古屋工業大学 | 工学部 環境材料工学科 |
| 2015.4–2017.9 | 東京工業大学 | 材料物理科学専攻（修士） |
| 2017.10–2020.9 | 東京工業大学 | 物質理工学院 材料系（博士） |

職歴:

| 期間 | 機関 | 役職 |
|------|------|------|
| 2020.10–2021.2 | 東京工業大学 | 研究員 |
| 2021.2–2023.3 | 産業技術総合研究所 | 特別研究員 |
| 2023.4–2024.9 | 東京工業大学 | 研究員 |
| 2024.10–2026.3 | 東京科学大学 | 研究員 |
| 2026.4– | 東京科学大学 | 特任助教 |

受賞:

| 年月 | 賞 |
|------|----|
| 2024.12 | 機能材料特性のアーキテクチャー研究会 Distinguished Paper Award |
| 2026.4 | ポスター賞（Magesty.jl） |

学協会: 日本物理学会、American Physical Society、日本金属学会

### 4.6 お問い合わせ（contact）

- メールアドレス: tomonori.tanaka.academic@gmail.com
- ORCID: https://orcid.org/0000-0001-7306-6770
- GitHub: https://github.com/Tomonori-Tanaka
- Google Scholar: https://scholar.google.co.jp/citations?user=m2RlBXgAAAAJ&hl=en&oi=sra
- ResearchMap: https://researchmap.jp/tomonori-tanaka

## 5. デザイン方針

- フレームワーク: Quarto
- テーマ: `journal`
- 配色: journal デフォルト（ネイビー `#1a3a5c` ベース）。落ち着いた学術的な印象。
- 方針: シンプル・アカデミック・読みやすさ重視、モバイル対応

## 6. 公開方針

- ホスティング: GitHub Pages
- 出力先: `docs/`（`quarto render` で生成）
- リポジトリ: https://github.com/Tomonori-Tanaka/Tomonori-Tanaka.github.io
- カスタムドメイン: なし（tomonori-tanaka.github.io）
- ビルド方法: ローカルで `quarto render` → `docs/` を push
